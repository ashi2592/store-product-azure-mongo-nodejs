const Joi = require('joi');

export const AddProductSchema = Joi.object({
    productName: Joi.string().min(3).max(300).required(),
    productImageurl: Joi.string().min(3).max(300),
})

export const AddProductsSchema = Joi.array().items(AddProductSchema)

export const GetProductSchema = Joi.object({
    id: Joi.string().min(3).max(40).required()
})

export const GetProductsSchema = Joi.object({
  limit: Joi.number().max(100),
  page: Joi.number(),
  where: Joi.string()
})

export const DeleteProductSchema = Joi.object({
    id: Joi.string().min(3).max(40).required()
})

export const UpdateProductSchema = Joi.object({
    productName: Joi.string().min(3).max(300).required(),
    productImageurl: Joi.string().min(3).max(300),
})

