import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carproduct {
    @PrimaryGeneratedColumn()
    id:string

    @ManyToOne(() => Product, product => product.carProducts)
    product:Product

    @Column()
    num:number

    @Column({
        type:'double'
    })
    price:number

    @ManyToOne(()=>Order, order => order.carproducts)
    order:Order
    
}
