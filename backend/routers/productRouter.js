import express from 'express' ;
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import data from '../data.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async(res, req) => {
              
              const products = await Product.find({});
              req.send(products);

})
);

productRouter.get('/seed', expressAsyncHandler(async(req,res) => {
              await Product.remove({});
              const createdProducts = await Product.insertMany(data.products);
              res.send({createdProducts});
})
);

productRouter.get('/:id', expressAsyncHandler( async(res,req) => {
  
              const product = await Product.findById(res.params.id);
              if (product) {
                            req.send(product);
              }else {
                            req.status(404).send({ message:'Product Not Found' });
              }
})
);

export default productRouter;