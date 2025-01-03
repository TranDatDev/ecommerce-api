import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from './dto/create-category.dto';
import { Category } from '@prisma/client';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async getAllCategories(): Promise<Category[]> {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string): Promise<Category> {
    // Chuyển id từ chuỗi sang số nguyên
    const parsedId = parseInt(id, 10);

    // Kiểm tra nếu parsedId không hợp lệ
    if (isNaN(parsedId)) {
      throw new Error('Invalid ID format');
    }

    return this.categoryService.getCategoryById(parsedId);
  }

  @Post()
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto.name);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.updateCategory(id, updateCategoryDto.name);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number): Promise<Category> {
    return this.categoryService.deleteCategory(id);
  }
}
