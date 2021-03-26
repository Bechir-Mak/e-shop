import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt'
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler (async (req, res) => {

              await User.remove({});
              const createdUsers = await User.insertMany (data.users);
              res.send({ createdUsers });

})
);
userRouter.post('/signin' , expressAsyncHandler (async (res , req) => {
              const user = await User.findOne({email: res.body.email });
              if (user) {
                            if(bcrypt.compareSync (res.body.password, user.password)) {
                                          req.send({
                                                        _id : user._id,
                                                        name: user.name,
                                                        email: user.email,
                                                        isAdmin: user.isAdmin,
                                                        token: generateToken(user), 
                                          });
                                          return;
                            }
              }
              req.status(401).send({message: 'Invalid password or email'})
})
);

userRouter.post('/register', expressAsyncHandler(async (res,req) => {

              const user = new User({name: res.body.name ,email: res.body.email ,
              password: bcrypt.hashSync(res.body.password, 8),
              });
              const createdUser = await user.save();
              req.send({
                            
                                                        _id : user._id,
                                                        name: user.name,
                                                        email: user.email,
                                                        isAdmin: user.isAdmin,
                                                        token: generateToken(createdUser), 


              });

})
); 


userRouter.get('/:id', expressAsyncHandler (async (req, res) => {
              const user = await User.findById(req.params.id);
              if (user) {
                            res.send(user);
              }else {
                            res.send(404).send({message: 'user not found'});
              }
} ) 
);




export default userRouter; 