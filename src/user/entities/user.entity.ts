import { Column, CreateDateColumn, Entity,PrimaryColumn } from "typeorm";
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
}
