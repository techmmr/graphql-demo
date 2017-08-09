const express = require('express');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

// This package automatically parses JSON requests.
const bodyParser = require('body-parser');

const schema = require('./schema');

var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Hackernews GraphQL server running on port ${PORT}.`)
});