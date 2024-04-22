import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import ProductServices from '../Helpers/Services/ProductServices';
import { IAddProductInput, IResponse } from '../Helpers/interfaces'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    try {
        const data: Array<IAddProductInput> = req?.body;
        const response: object = await ProductServices.addProducts(data)
        context.res = {
            status: 200,
            body: response
        }

    }
    catch (err) {
        context.res = {
            status: 500,
            message: err.message
        }
    }
};

export default httpTrigger;