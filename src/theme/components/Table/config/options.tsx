import CONST from 'src/defs/const';
import { PATHS } from 'src/router';

const { LIMIT: limit } = CONST.Gql;

const options = ({ fetchMore, history, loading, error }): TYPES.TableOptions => ({
  filter: true,
  filterType: 'textField',
  responsive: 'vertical',
  enableNestedDataAccess: '.',
  elevation: 0,
  print: false,
  download: false,
  search: false,
  selectableRows: 'none',
  rowsPerPage: limit / 2,
  rowsPerPageOptions: [limit / 2, limit],
  onTableChange: (action, tableState) => {
    const { data = [], page, rowsPerPage } = tableState;
    const isNeedFetchMore = rowsPerPage * (page + 1) >= data.length;
    if (isNeedFetchMore && !loading && data.length) {
      const start = tableState.data?.length;
      fetchMore({ variables: { args: { start, limit } } });
    }
  },
  textLabels: {
    body: {
      noMatch: error?.message ? error.message : 'loading ...',
    },
  },
  onRowClick: (rowData) => {
    history.push(PATHS.APP);
  },
});

export default options;
