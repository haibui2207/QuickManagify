const fs = require('fs');
const path = require('path');
const queriesPath = path.resolve(__dirname, 'queries');
const queryResolverFiles = fs.readdirSync(queriesPath);
const queryObjectGraphType = {};
queryResolverFiles.forEach((file) =>{
    const filePath = path.resolve(queriesPath, file);
    const resolver = require(filePath);
    const prop = file.replace('.js', '');
    queryObjectGraphType[prop] = resolver;
});
const mutationPath = path.resolve(__dirname, 'mutations');
const mutationResolverFiles = fs.readdirSync(mutationPath);
const mutationObjectGraphType = {};
mutationResolverFiles.forEach((file) =>{
    const filePath = path.resolve(mutationPath, file);
    const resolver = require(filePath);
    const prop = file.replace('.js', '');
    mutationObjectGraphType[prop] = resolver;
});
console.log(queryObjectGraphType);

module.exports.resolve = {
    Query: queryObjectGraphType,
    Mutation: mutationObjectGraphType
};