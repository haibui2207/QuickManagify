const products = [{
    title: 'something 1',
    author: 'someone 1'
},{
    title: 'something 2',
    author: 'someone 2'
}];

module.exports = (parent, args, context, info) => {
    return products;
}