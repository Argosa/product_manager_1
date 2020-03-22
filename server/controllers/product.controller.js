const { Product } = require('../models/product.model');

module.exports.findAllProducts = (request, response) => {
    Product.find()
        .then((allProducts) => response.json({ products: allProducts }))
        .catch(err => response.json(err));
}

module.exports.createProduct = (request, response) => {
    const { title, price, description }  = request.body;
    Product.create({
        title: title,
        price: price,
        description: description
    })
    .then(product => {
        console.log(product)
        response.json(product)
    })
    .catch(err => response.json(err));
};