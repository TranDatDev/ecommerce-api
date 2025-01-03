import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';

@Injectable()
export class SellerService {
  constructor(private prisma: PrismaService) {}

  // Tạo Seller mới
  async create(createSellerDto: CreateSellerDto) {
    return this.prisma.seller.create({
      data: createSellerDto,
    });
  }

  // Lấy tất cả Sellers
  async findAll() {
    return this.prisma.seller.findMany();
  }

  // Lấy Seller theo ID
  async findOne(id: number) {
    return this.prisma.seller.findUnique({
      where: { id },
    });
  }

  // Cập nhật Seller theo ID
  async update(id: number, updateSellerDto: UpdateSellerDto) {
    return this.prisma.seller.update({
      where: { id },
      data: updateSellerDto,
    });
  }

  // Xoá Seller theo ID
  async remove(id: number) {
    return this.prisma.seller.delete({
      where: { id },
    });
  }
}
