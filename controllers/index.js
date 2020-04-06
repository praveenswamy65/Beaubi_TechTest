// Controller to add new product into PostgreSQL DB table - brands

const models = require('../models').brands;  //Import the model

const createProduct = async (req, res) => {
    try {
        const product = await models.create(req.body);
        return res.status(201).json({
            product,
        });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
module.exports = {
    createProduct
}