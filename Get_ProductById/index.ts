import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import ProductServices from '../Helpers/Services/ProductServices';
import { IGetProductInput } from '../Helpers/interfaces'

const httpTrigger: AzureFunction = async function (context: Context, req: any): Promise<void> {
    try {
        const data: IGetProductInput = req?.params;
        const response: object = await ProductServices.getProduct(data)
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