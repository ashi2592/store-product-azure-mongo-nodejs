import  mongoose  from 'mongoose';
import {productSchema } from "./dataModel/schema";

const getConnection = async () => {
    try{
     await   mongoose.connect(`${DATABASE_CONNECTION_STRING}/${DATABASE_NAME}`);
    }catch(err)
    {
        console.log("error in connection in mongodb")
    }
}

// connection strings
const DATABASE_CONNECTION_STRING: string = process.env.DATABASE_CONNECTION_STRING;
const DATABASE_NAME : string= process.env.DATABASE_NAME;
//connection with mongoDB
getConnection().then((response)=>{
        console.log("mongoDb connected")
}).catch(e=>{
    console.log(e)
})



// declare a mongoose document based on a Typescript interface representing your schema
// interface ProductDocument extends mongoose.Document {}

export const Products = mongoose.model(process.env.PRODUCT_COLLETION, productSchema); 

