import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers = [
    {
      id: 1,
      name: 'Michael',
      lastName: 'Benavides',
      phone: '3111111212',
    },
  ];

  getAll() {
    return this.customers;
  }

  getById(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(data: CreateCustomerDto) {
    this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...data,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, changes: UpdateCustomerDto) {
    const customer = this.getById(id);
    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...customer,
      ...changes,
    };
    return this.customers[index];
  }

  remove(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
