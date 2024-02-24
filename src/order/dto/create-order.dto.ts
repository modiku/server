import { User } from "src/user/entities/user.entity"

export class CreateOrderDto {

    id:string

    user:User

    address:string

    consigneeName:string

    consigneePhoneNumber:string

    totalprice:number
}
