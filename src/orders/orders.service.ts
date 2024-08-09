import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './OrderItem.entity';
import { CustomerOrders } from './Order.entity';
import { User } from 'src/user/user.entity';
import { Product } from 'src/shop/entities/product.entity';

@Injectable()
export class OrdersService {
    constructor( 
    @InjectRepository(CustomerOrders)
    private readonly orderRepository: Repository<CustomerOrders>,
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
    ){}

    //async createOrder(firebaseUid:string, items:any, address:string){
    //     const user =  await this.usersRepository.findOneBy({"firebaseUid":firebaseUid});
        
    //     const allproducts = await items.map(async (product, index:number)=>{
    //         const productInfo =  await this.productRepository.findOneBy({"id": product.id})
    //         return {
    //             "name": productInfo.name,
    //             "price": productInfo.price,
    //             "quantity": items[index].quantity,
    //             "totalprice": items[index].quantity*productInfo.price
    //         }
    //     })
    //     console.log(allproducts);

    //     // const order =this.orderRepository.create({DisplayName: displayName, UserEmail:UserEmail , item: items});
    //     // return this.orderRepository.save(order);
    //     return ({user, allproducts,items, address});
    // }  
    // async createOrder(firebaseUid: string, items: any, OrderInfo:any) {
    //     // Find the user by firebaseUid
    //     //const user = await this.usersRepository.findOneBy({ firebaseUid });
    //     const orderObject = {
    //         "Name": OrderInfo.firstName + OrderInfo.lastName,
    //         "CompanyName":OrderInfo.companyName,
    //         "Country":OrderInfo.country,
    //         "StreetAddress":OrderInfo.streetAddress +  OrderInfo.apartment,
    //         "City":OrderInfo.city,
    //         "State":OrderInfo.state,
    //         "Pincode":OrderInfo.pinCode,
    //         "paymentMethod": OrderInfo.paymentMethod,
    //         "Phone":OrderInfo.phone,
    //         "Email":OrderInfo.email,
    //         "OrderNotes":OrderInfo.orderNotes
    //     }
    
    //     // Fetch product information and calculate total price for each item
    //     const allProducts = await Promise.all(
    //         items.map(async (product: any, index: number) => {
    //             const productInfo = await this.productRepository.findOneBy({ id: product.productId });
    //             return {
    //                 name: productInfo.name,
    //                 price: productInfo.price,
    //                 quantity: items[index].quantity,
    //                 totalPrice: items[index].quantity * productInfo.price,
    //             };
    //         })
    //     );

    //     const totalAmount = allProducts.reduce((acc, product) => acc + product.totalPrice, 0);
            
    //     console.log({ orderObject,totalAmount ,allProducts});
    //     return { orderObject,totalAmount ,allProducts};
    // }

    async createOrder(firebaseUid: string | null, items: any[], OrderInfo: any) {
        // Construct the order object with the billing details
        const orderObject = {
            "Name": `${OrderInfo.firstName} ${OrderInfo.lastName}`,
            "CompanyName": OrderInfo.companyName || null,
            "Country": OrderInfo.country,
            "StreetAddress": `${OrderInfo.streetAddress}, ${OrderInfo.apartment || ''}`,
            "City": OrderInfo.city,
            "State": OrderInfo.state,
            "Pincode": OrderInfo.pinCode,
            "PaymentMethod": OrderInfo.paymentMethod,
            "Phone": OrderInfo.phone,
            "Email": OrderInfo.email,
            "OrderNotes": OrderInfo.orderNotes || null
        };
    
        // Fetch product information and calculate total price for each item
        const allProducts = await Promise.all(
            items.map(async (product: any) => {
                const productInfo = await this.productRepository.findOneBy({ id: product.productId });
                return {
                    productId: productInfo.id,
                    name: productInfo.name,
                    price: productInfo.price,
                    quantity: product.quantity,
                    totalPrice: product.quantity * productInfo.price,
                    imageUrl: product.imageUrl,
                };
            })
        );
    
        const totalAmount = allProducts.reduce((acc, product) => acc + product.totalPrice, 0);
    
        // Create the order entity
        const order = this.orderRepository.create({
            firebaseUid,
            orderInfo: orderObject,
            items: allProducts,
            totalAmount,
        });

    
        // Save the order and its items to the database
        const result = await this.orderRepository.save(order);
    
        console.log(result);
        return { result };
    }
    
    
}
