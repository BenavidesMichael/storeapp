import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
// import { CreateProductDto } from 'src/products/dtos/products.dtos';
import { Product } from 'src/products/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from '../dtos/products.dtos';

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

  createProduct(product: CreateProductDto) {
    const newproduct = this.productRepository.create(product);
    return this.productRepository.save(newproduct);
  }

  async updateProduct(id: number, changes: Partial<CreateProductDto>) {
    const product = await this.productRepository.findOne({
      where: { id }, // Recherche par ID
    });

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    this.productRepository.merge(product, changes);
    return this.productRepository.save(product);
  }

  deleteProduct(id: number) {
    return this.productRepository.delete(id);
  }
}
