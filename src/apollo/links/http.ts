import { HttpLink } from '@apollo/client';
import CONST from 'src/defs/const';

const httpLink = new HttpLink({ uri: CONST.Apollo.GRAPHQL_URL });

export default httpLink;
