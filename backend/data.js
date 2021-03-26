import bcrypt from 'bcrypt';

const data = {
              users : [
                {
                  name: 'bechir',
                  email: 'bechir@gmail.com',
                  password: bcrypt.hashSync('1234', 8),
                  isAdmin: true,

                },

                {
                  name: 'behe' ,
                  email: 'behe@yahoo.com',
                  password: bcrypt.hashSync('1234', 8),
                  isAdmin: false,

                },

              ],

              products : [
                    {
                    
                      name: "Samsung Watch",
                      category: "Watches",
                      image:'/images/product1.jpg',
                      price: 1200,
                      countInStock : 5, 
                      brand:"Nike",
                      rating:4.5,
                      numReviews:10,
                      description:'Smart watch',
                    },
                    {
                 
                      name: "Appel Watch",
                      category: "Watches",
                      image:'/images/product2.jpg',
                      price: 1200,
                      countInStock : 10,
                      brand:"Nike",
                      rating:4.5,
                      numReviews:10,
                      description:'Smart watch',
                    }, 
                    {
                    
                      name: "Huawei Watch",
                      category: "Watches",
                      image:'/images/product3.jpg',
                      price: 1200,
                      countInStock: 7,
                      brand:"Nike",
                      rating:4.5,
                      numReviews:10,
                      description:'Smart watch',
                    },        
              ],        
        }
        
 export default data ;