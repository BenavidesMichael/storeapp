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
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit => ${limit} and offset => ${offset} and brand => ${brand}`,
    };
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
  getProductById(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  post(@Body() payload: any) {
    console.log(payload);
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
