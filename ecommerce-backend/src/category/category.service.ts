import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Đảm bảo rằng PrismaService đã được tạo sẵn
import { Category } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAllCategories(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async getCategoryById(id: number): Promise<Category> {
    return this.prisma.category.findUnique({
      where: {
        id: id, // Chắc chắn id là kiểu number, không phải string
      },
    });
  }

  async createCategory(name: string): Promise<Category> {
    return this.prisma.category.create({
      data: { name },
    });
  }

  async updateCategory(id: number, name: string): Promise<Category> {
    return this.prisma.category.update({
      where: { id },
      data: { name },
    });
  }

  async deleteCategory(id: number): Promise<Category> {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
