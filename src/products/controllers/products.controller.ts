import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  // Query,
  ParseIntPipe,
} from '@nestjs/common';

// import { Product } from 'src/products/entities/product.entity';
// import { CreateProductDto } from 'src/products/dtos/products.dtos';
import { ProductsService } from '../services/products.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from '../dtos/products.dtos';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  // get(@Query('limit') limit = 100, @Query('offset') offset = 0)
  async get() {
    const products = await this.productsService.getAllProducts();
    return products;
  }

  // faut toujours mettre les routes les plus spécifiques en premier
  // sinon ca va prendre la route la plus dynamique (products/:productId)
  @Get('filter')
  getFilter() {
    return {
      message: `product filter`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getProductById(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.getProductById(productId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async post(@Body() payload: CreateProductDto) {
    return await this.productsService.createProduct(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: Partial<CreateProductDto>,
  ) {
    return this.productsService.updateProduct(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteProduct(id);
  }
}
