import { Schema } from "mongoose";
const mongoosePaginate = require('mongoose-paginate-v2');


export interface IProduct extends Document {
    productName: string;
    productImageurl: string;
    createdAtDate: any;
}

// mongoose DDL for products
export const productSchema : Schema = new Schema({
    productName: String,
    productImageurl: String,
    createdAtDate: {type: Date, default: Date.now}
})


// Add Additional pluged in mongoose
productSchema.plugin(mongoosePaginate);
