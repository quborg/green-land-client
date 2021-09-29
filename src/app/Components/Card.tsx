import { useEffect, useRef, useState } from 'react';

import { useQuery } from '@apollo/client';
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { KEYS } from 'src/defs';
import { State } from 'src/graphql';
import { reactiveFilters } from 'src/helpers';
import { Local as Tr } from 'src/local';

const Card: React.FC<TYPES.CardProps> = ({ children, theme, title }) => {
  const [height, setHeight] = useState<any>('100%');
  const [selectable] = useState([KEYS.sheikhs, KEYS.books, KEYS.categories].includes(title));

  const {
    data: {
      filters: {
        [selectable ? title : KEYS.default]: { selected = {}, all, expanded = {} },
        ...filters
      },
    },
  } = useQuery(State.FILTERS);

  const { data } = useQuery(State.DATA);
  console.log('---->', data);

  const titleHeight = useRef<HTMLDivElement>(null);
  const bodyHeight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = titleHeight?.current?.clientHeight;
    const b = bodyHeight?.current?.clientHeight;
    if (b && t && b - t !== height) {
      setHeight(b - t - 16);
    }
  }, [height]);

  const handleSelectAll = (nextAll: boolean): void => {
    let nextSelected = selected;
    let overrideNextAll = nextAll;
    if (all === '' && nextAll) overrideNextAll = false;
    Object.keys(selected).forEach((_id) => {
      nextSelected = { ...nextSelected, [_id]: overrideNextAll };
    });
    reactiveFilters({
      ...filters,
      [title]: {
        all: overrideNextAll,
        selected: nextSelected,
        ...(title === KEYS.categories && { expanded }),
      },
    });
  };

  return (
    <div ref={bodyHeight} style={{ height: '100%' }}>
      <Box height="100%" p={0.67}>
        <Paper elevation={3} style={{ height: '100%' }}>
          <Box height="100%">
            <div ref={titleHeight}>
              <Box
                alignItems="center"
                display="flex"
                minHeight={theme.spacing(4)}
                px={selectable ? 0 : 1}>
                {selectable ? (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={!!all}
                        indeterminate={all === ''}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        size="small"
                        style={{ padding: theme.spacing(1 / 2) }}
                      />
                    }
                    label={Tr[title]}
                    style={{ margin: 0, width: '100%' }}
                  />
                ) : (
                  <Typography>{Tr[title]}</Typography>
                )}
                {title === KEYS.categories && (
                  <Box display="flex" mr={1}>
                    <IconButton
                      color="primary"
                      disabled={!Object.keys(expanded).filter((_id) => !expanded[_id]).length}
                      onClick={() => {
                        // const toExpand = categories.filter(
                        //   ({ _id, parent }) => parent === 0 && expanded[_id] === false
                        // );
                        // console.log(toExpand, categories);
                      }}
                      size="small">
                      <Icons.AddCircleOutline fontSize="small" />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      disabled={!Object.keys(expanded).filter((_id) => expanded[_id]).length}
                      onClick={() => {
                        let nextExpanded = expanded;
                        Object.keys(expanded).forEach((_id) => {
                          nextExpanded = { ...nextExpanded, [_id]: false };
                        });
                        reactiveFilters({
                          ...filters,
                          [title]: {
                            all,
                            selected,
                            expanded: nextExpanded,
                          },
                        });
                      }}
                      size="small">
                      <Icons.RemoveCircleOutline fontSize="small" />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </div>
            <Box>
              <Divider />
            </Box>
            <Box height={height} p={title === KEYS.search ? 0.5 : 0} pb={0}>
              {children}
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default withStyles({}, { withTheme: true })(Card);
