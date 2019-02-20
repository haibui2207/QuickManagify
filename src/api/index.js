const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');
let typeDefAsString = '';
const typeDefsPath = path.resolve(__dirname, 'typeDefs');
const files = fs.readdirSync(typeDefsPath);
files.forEach((file) => {
  const filePath = path.resolve(typeDefsPath, file);
  const def = require(filePath);
  typeDefAsString += def;
});
const inputDefsPath = path.resolve(__dirname, 'inputDefs');
const inputFiles = fs.readdirSync(inputDefsPath);
inputFiles.forEach((file) => {
  const filePath = path.resolve(inputDefsPath, file);
  const def = require(filePath);
  typeDefAsString += def;
});
const operationsPath = path.resolve(__dirname, 'operations');
const operationFiles = fs.readdirSync(operationsPath);
operationFiles.forEach((file) => {
  const filePath = path.resolve(operationsPath, file);
  const def = require(filePath);
  typeDefAsString += def;
});

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`${typeDefAsString}`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = require('./resolvers').resolve;

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});