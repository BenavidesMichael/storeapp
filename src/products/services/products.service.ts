import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from 'src/products/dtos/create-product.dto';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1',
      price: 1000,
      stock: 10,
      image: 'https://picsum.photos/200',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2',
      price: 2000,
      stock: 20,
      image: 'https://picsum.photos/200',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is product 3',
      price: 3000,
      stock: 30,
      image: 'https://picsum.photos/200',
    },
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  createProduct(product: CreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      ...product,
    };

    this.products.push(newProduct);
    return product;
  }

  updateProduct(id: number, changes: Partial<CreateProductDto>) {
    const product = this.getProductById(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = {
      id,
      ...product,
      ...changes,
    };

    return this.products[index];
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    this.products.splice(index, 1);
    return true;
  }
}
