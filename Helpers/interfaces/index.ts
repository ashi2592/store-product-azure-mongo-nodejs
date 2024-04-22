export interface IGetProductOption {
    page: number,
    limit: number,
    query?:object,
    sort?: object
}

export interface IAddProductInput {
    productName: string,
    productImageurl: string
}

export interface IResponse {

}

export interface IGetProductInput {
    id: any
}

export interface IDeleteProductInput {
    id: any
}