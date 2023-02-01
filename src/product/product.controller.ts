import { Controller, Get, Post } from '@nestjs/common';
import { Delete, Patch, UseGuards } from '@nestjs/common/decorators';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { ProductDocument } from './product.schema';
import { ProductService } from './product.service';


// http://localhost:3333/api/product
/**
 * {"name": "tacos","price": 4.99,"description":"A tacos"}
 */
@Controller('product')
export class ProductController {
constructor( private productService: ProductService){}
  @Post()
    createPost(@Body('name') name : string ,@Body('price') price : number ,@Body('description') description : string ,){
      return this.productService.create(name, price, description)

    }

  @Get()
    findAllProducts():Promise<ProductDocument[]>{
      return this.productService.findAll();

    }
  
  //@UseGuards(JwtGuard)
  @UseGuards(JwtGuard)
  @Get(':id')
    findProduct(@Param('id') id: string):Promise<ProductDocument>{
      return this.productService.find(id);

    }
  @Patch(':id')
    updateProduct(@Param('id') id: string,@Body('name') name : string ,@Body('price') price : number ,@Body('description') description?: string,):Promise<ProductDocument>{
      return this.productService.update(id,name,price,description);

    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string){
      return this.productService.delete(id);

    }

  

    
}
