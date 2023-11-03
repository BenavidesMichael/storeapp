import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ProductsService } from 'src/products/services/products.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private productsService: ProductsService,
    private appsetting: ConfigService,
  ) {}

  getAll() {
    return this.userRepository.find();
  }

  async getById(id: number) {
    const user = await this.userRepository.findOne({
      where: { id }, // Recherche par ID
    });

    if (!user) {
      throw new NotFoundException(`user #${id} not found`);
    }

    return user;
  }

  create(data: CreateUserDto) {
    const newser = this.userRepository.create(data);
    return this.userRepository.save(newser);
  }

  async update(id: number, changes: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id }, // Recherche par ID
    });

    if (!user) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    this.userRepository.merge(user, changes);
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async getOrdersByUserId(userId: number) {
    const user = await this.getById(userId);
    return {
      date: new Date(),
      user,
      products: await this.productsService.getAllProducts(),
    };
  }
}
