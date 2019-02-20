const product = {
    title: 'something 1',
    author: 'someone'
}

module.exports = (parent, args, context, info) => {
    return product;
}