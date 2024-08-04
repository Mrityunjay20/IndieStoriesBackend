import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createProductDto } from './dtos/create-product.dto';
import { deleteProductDto } from './dtos/delete-product.dto';
import { updateProductDto } from './dtos/update-product.dto';
import { ShopService } from './services/shop.service';

@Controller('shop')
export class ShopController {
    constructor(private shopService:ShopService){}

    @Get()
    allItems(){
        return this.shopService.fetchproducts();
    }

    @Get(':id')
    oneItem(@Param('id') id:string){
        return this.shopService.fetchOneProduct(parseInt(id));
    }

    @Post('createproduct')
    createProduct(@Body() body: createProductDto){
        return this.shopService.createProduct(body.name,body.description,body.price,body.imageUrl,body.bannerUrl);
    }

    @Patch('updateproduct')
    async updateProduct(@Body() body: updateProductDto ) {
        const id = body.id;
        return this.shopService.updateProduct(id,body);
    }

    @Delete('deleteproduct')
    async deleteProduct(@Body() body:deleteProductDto){
         return this.shopService.deleteProduct(body.id);
    }
}
