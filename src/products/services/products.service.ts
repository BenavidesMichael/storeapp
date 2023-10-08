import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
// import { CreateProductDto } from 'src/products/dtos/products.dtos';
import { Product } from 'src/products/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  getAllProducts() {
    return this.productRepository.find();
  }

  getProductById(id: number) {
    const product = this.productRepository.find();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  // createProduct(product: CreateProductDto) {
  //   const newProduct = {
  //     id: this.products.length + 1,
  //     ...product,
  //   };

  //   this.products.push(newProduct);
  //   return product;
  // }

  // updateProduct(id: number, changes: Partial<CreateProductDto>) {
  //   const product = this.getProductById(id);
  //   if (!product) {
  //     throw new NotFoundException(`Product #${id} not found`);
  //   }

  //   const index = this.products.findIndex((product) => product.id === id);
  //   this.products[index] = {
  //     id,
  //     ...product,
  //     ...changes,
  //   };

  //   return this.products[index];
  // }

  // deleteProduct(id: number) {
  //   const index = this.products.findIndex((product) => product.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`Product #${id} not found`);
  //   }

  //   this.products.splice(index, 1);
  //   return true;
  // }
}
