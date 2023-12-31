import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from 'src/products/products.module';

import { UsersController } from './controllers/users.controller';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

import { User } from './entities/user.entity';
import { Customer } from './entities/customer.entity';
import { Order } from './entities/order.entity';

@Module({
  imports: [ProductsModule, TypeOrmModule.forFeature([User, Customer, Order])],
  controllers: [UsersController, CustomersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
