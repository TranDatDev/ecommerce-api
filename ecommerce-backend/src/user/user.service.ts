import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, name, role } = createUserDto;

    return this.prisma.user.create({
      data: {
        email,
        password,
        name,
        role,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(uuid: string) {
    const user = await this.prisma.user.findUnique({
      where: { uuid },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(uuid: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { uuid } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.user.update({
      where: { uuid },
      data: updateUserDto,
    });
  }

  async remove(uuid: string) {
    const user = await this.prisma.user.findUnique({ where: { uuid } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.user.delete({
      where: { uuid },
    });
  }
}
