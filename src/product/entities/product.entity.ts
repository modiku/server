import { Carproduct } from "src/carproduct/entities/carproduct.entity";
import { Order } from "src/order/entities/order.entity";
import { Column, CreateDateColumn, Double, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    phone: string

    @Column(
        {
            type:"double"
        }
    )
    price: number

    @CreateDateColumn({type:'timestamp'})
    date: Date

    @Column({
        nullable: true,
        default: null
    })
    imgUrl: string

    @Column({
        nullable: true,
        default: null
    })
    CarouselImg1: string

    @Column({
        nullable: true,
        default: null
    })
    CarouselImg2: string

    @Column({
        nullable: true,
        default: null
    })
    CarouselImg3: string

    @Column({
        nullable: true,
        default: null
    })
    description: string

    @OneToMany(() => Carproduct, carproduct => carproduct.product)
    carProducts:Carproduct[]


    @Column({
        default: true
    })
    isShow:boolean



}
