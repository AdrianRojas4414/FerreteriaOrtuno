import express from 'express';
import productController from  '../controllers/productController.js'

//route administrator
const route  = express.Router();

//route definition
// :id -> it will receive a variable named id

//register a product
route.post('/', productController.createProduct);

//obtain a product
route.get('/:id', productController.getProduct);

//obtain all the products
route.get('/', productController.getAllProducts);

//modify a product
route.patch('/:id', productController.updateProduct);

//erase a product
route.delete('/:id', productController.deleteProduct);

export default route;