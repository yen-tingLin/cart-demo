const Product = require("./model");

exports.retrieveProducts = async () => {
    const products = await Product.find();
    return products;
};
exports.retrieveProductById = async id => {
    const product = await Product.findById(id);
    return product;
};
exports.createProduct = async payload => {
    const newProduct = await Product.create(payload);
    return newProduct;
};
exports.removeProduct = async id => {
    const product = await Product.findById(id);
    return product;
}	
