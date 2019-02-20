const product = {
    title: 'something',
    author: 'someone'
}

module.exports = (parent, args, context, info) => {
    return product;
}