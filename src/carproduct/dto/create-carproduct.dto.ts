import { Order } from "src/order/entities/order.entity"
import { Product } from "src/product/entities/product.entity"

export class CreateCarproductDto {
    product:Product

    num:number

    price:number

    order:Order
}
