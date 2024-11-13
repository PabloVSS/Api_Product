import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import products from 'src/constants/products';
import Product from './product.entity';

@Controller('product')
export class ProductController {

  @Post()
  async create(@Body() product: Product): Promise<void> {
    products.push({
      ...product,
      id: product.id ? product.id : products.length + 1

    });
    return console.log('Produto cadastrado')

  }

  @Get()
  async findProducts(): Promise<Product[]>{
    return products;
  }

  
  @Get(':id')
  async findProductsId(@Param('id') id: String): Promise<Product>{
    return products.find((product) => product.id === +id);
  }

  @Patch()
  async update(@Body() product: Partial<Product>) : Promise<void>{
    const index = products.findIndex((p) => p.id === +product.id);
    products[index] = {...products[index], ...product};
  }

  @Delete(':id')
  async remove(@Param('id') id: String) : Promise<void> {
    const index = products.findIndex((p) => p.id === +id);
    products.splice(index, 1);
  }
}
