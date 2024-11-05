export interface ProductType{
    product_name: string
    product_qty: number,
    product_price: number
}
export interface Invoice {
    customerName: string,
    customerEmail: string,
    customerPhone: string,
    products: ProductType[],
    totalPrice: number
}