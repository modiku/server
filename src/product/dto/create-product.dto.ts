export class CreateProductDto {
    id: string
    name: string
    phone: string
    price: number
    imgUrl: string
    CarouselImg1: string
    CarouselImg2: string
    CarouselImg3: string
    description: string
    isShow?:boolean
}
