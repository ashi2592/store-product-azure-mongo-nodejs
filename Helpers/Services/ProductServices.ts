import { AddProductSchemaValidation, AddProductsSchemaValidation, GetProductSchemaValidation, GetProductsSchemaValidation, DeleteProductSchemaValidation, UpdateProductsSchemaValidation } from "../schemaValidtion";
import { Products } from "../mongoDbConnetor";
import _ from 'lodash';
import { IGetProductOption, IAddProductInput, IGetProductInput, IDeleteProductInput } from "../interfaces/index"
// class for all product realete services
 class ProductServices {
    /**
     * Add product into mongodb
     * @param {*} data 
     * @returns 
     */
    async addProduct(data: IAddProductInput) {
        try {
            const values = await AddProductSchemaValidation(data);
            if (values) {
                const ProductsObj = new Products(data);
                return await ProductsObj.save();
            }
        }
        catch (err) {
            throw err
        }
    }

    /**
     * Add bulk product into database
     * @param {*} data 
     * @returns 
     */

    async addProducts(data: Array<IAddProductInput>) {
        try {
            const values = await AddProductsSchemaValidation(data);
            if (values) {
                // const ProductsObj = new Products();
                const response = await Promise.all(_.chunk(values, 10).map(async (d) => {
                    return await Products.collection.insertMany(d);
                }))
                return response;
            }
        }
        catch (err) {
            throw err
        }
    }

    /**
     * get product
     * @param {*} data 
     * @returns 
     */

    async getProduct(data: IGetProductInput) {
        try {
            const values = await GetProductSchemaValidation(data);
            if (values) {
                return await Products.findById(data.id);
            }
        } catch (err) {
            throw err
        }
    }


    /**
     * get product
     * @param {*} data 
     * @returns 
     */

    async getProducts(data) {
        try {
            const values = await GetProductsSchemaValidation(data);
            if (values) {
                const options: IGetProductOption = {
                    page: data?.page || 1,
                    limit: data?.limit || 100
                };

                return await Products.find(options)
            }
        } catch (err) {
            throw err
        }
    }

    /**
     * 
     * @param {*} data 
     * @returns 
     */
    async deleteProduct(data: IDeleteProductInput) {
        try {
            const values = await DeleteProductSchemaValidation(data);
            if (values) {
                return await Products.findByIdAndDelete(data.id);
            }
        } catch (err) {
            throw err
        }
    }

    /**
     * Update Product
     * @param {*} data 
     * @param {*} query 
     * @returns 
     */
    async UpdateProduct(data, query) {
        try {
            const values = await UpdateProductsSchemaValidation(data);
            if (values) {
                return await Products.findByIdAndUpdate(query.id, data);
            }
        } catch (err) {
            throw err
        }
    }
}

export default new ProductServices()