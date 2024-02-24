import { Order } from "src/order/entities/order.entity";
import { Column, CreateDateColumn, Entity,OneToMany,PrimaryColumn } from "typeorm";
@Entity()
export class User {
   @PrimaryColumn()
   number: string

   @Column()
   name: string
   
   @Column()
   password: string


   // 1 管理员 2 vip用户 3 普通用户
   @Column()
   authority:number

   @CreateDateColumn()
   date:Date

   @Column({
      nullable:true,
      default:null
   })
   userAvaterUrl:string

   @Column({
      nullable:true,
      default:null
   })
   description:string

   @OneToMany(() => Order, order => order.user)
   orders:Order[]
}
