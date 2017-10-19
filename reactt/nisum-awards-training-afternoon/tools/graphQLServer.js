import express from 'express';
import open from 'open';
import bodyParser from 'body-parser';
import cors from 'cors';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';

import schema from '../backend/schema';

const port = 8080;
const app = express();

app.use(cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({
  /*
  * Or use any other data source or other DB here
  * let categories: {}
  * context:{
  * data:{
  * categories: categories
  * }
  * }
  * */
  schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(port, (error) => {
// eslint-disable-next-line no-console
  if(error) console.log(error);
  else open(`http://localhost:${port}/graphiql`);
});
