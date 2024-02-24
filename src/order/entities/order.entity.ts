import { Carproduct } from "src/carproduct/entities/carproduct.entity";
import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id:string

    @CreateDateColumn({type:'timestamp'})
    date:Date

    @ManyToOne(() => User, user => user.orders)
    user:User

    @Column()
    address:string

    @Column({
        default:'zhangsan'
    })
    consigneeName:string

    @Column({
        default:'13666666666'
    })
    consigneePhoneNumber:string

    @OneToMany(() => Carproduct, carproduct => carproduct.order)
    @JoinTable()
    carproducts:Carproduct[]

    @Column({
        type:'double',
        default:0.0
    })
    totalprice:number
    

    @Column({
        type:'boolean',
        default:false
    })
    pay:boolean

    
    

}
