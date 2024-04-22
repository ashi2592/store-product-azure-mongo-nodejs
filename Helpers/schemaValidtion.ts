import { AddProductSchema, AddProductsSchema, GetProductSchema, GetProductsSchema, DeleteProductSchema, UpdateProductSchema } from "./joiSchema/schema";
import { IAddProductInput, IGetProductInput, IDeleteProductInput } from './interfaces';
export const SchemaValidtion = async (schema: any, data: any) => {
    try {
        return await schema.validateAsync(data);
    }
    catch (err) {
        throw err.details
    }
}
export const AddProductSchemaValidation = async (data: IAddProductInput) => await SchemaValidtion(AddProductSchema, data)
export const AddProductsSchemaValidation = async (data: Array<IAddProductInput>) => await SchemaValidtion(AddProductsSchema, data)
export const GetProductSchemaValidation = async (data: IGetProductInput) => await SchemaValidtion(GetProductSchema, data)
export const GetProductsSchemaValidation = async (data) => await SchemaValidtion(GetProductsSchema, data)
export const DeleteProductSchemaValidation = async (data: IDeleteProductInput) => await SchemaValidtion(DeleteProductSchema, data);
export const UpdateProductsSchemaValidation = async (data) => await SchemaValidtion(UpdateProductSchema, data)

