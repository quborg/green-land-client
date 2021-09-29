import { withRouter } from 'react-router-dom';

import MuiTable from 'mui-datatables';

import * as TConfig from './config';

const Table: React.FC<TYPES.TableProps> = ({
  title,
  columns,
  options,
  components,
  data,
  fetchMore,
  history,
  loading,
  error,
}) => (
  <MuiTable
    columns={columns}
    components={{ ...TConfig.components, ...components }}
    data={data}
    options={{ ...TConfig.options({ fetchMore, history, loading, error }), ...options }}
    title={<TConfig.Title {...{ title, loading }} />}
  />
);

Table.defaultProps = {
  title: 'Table',
};

export default withRouter(Table);
