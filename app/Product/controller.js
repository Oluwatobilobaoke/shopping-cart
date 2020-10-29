const productRepository = require('./repository');
const {
    errorResMsg,
    successResMsg,
} = require('../../Utils/libs/response');
const logger = require('../../logger').Logger;

exports.createProduct = async (req, res) => {
console.log(req)
    try {
        let payload = {
            name: req.body.name,
            price: req.body.price,
            image: req.file.path
        }
        let  product = await productRepository.createProduct({
            ...payload
        });

        const data = {
          message: 'Product Created Successfully',
          product,
        };
        return successResMsg(res, 201, data );
    } catch (err) {
        logger.error(err);
        return errorResMsg(res, 500, err)
    }
};

exports.getProducts = async (req, res) => {
    try {
        let products = await productRepository.products()
        if (!products) return errorResMsg(res, 404, 'There is not product available')

        return successResMsg(res, 200, products )
    } catch (err) {
        logger.error(err);
        return errorResMsg(res, 500, err)
    }
}

exports.getProductById = async (req, res) => {
    try {
        let id = req.params.id
        let productDetails = await productRepository.productById(id);
        if (!productDetails) return errorResMsg(res, 404, 'Product Not Found')
        return successResMsg(res, 200, productDetails)
    } catch (err) {
        logger.error(err);
        return errorResMsg(res, 500, err)
    }
}

exports.removeProduct = async (req, res) => {
    try{
        let id = req.params.id
        let productDetails = await productRepository.removeProduct(id);
        return successResMsg(res, 200, 'Product removed successfully')
    } catch (err) {
        logger.error(err);
        return errorResMsg(res, 500, err)
    }
}
