import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { SellerService } from './seller.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { Seller } from '@prisma/client';

@Controller('sellers')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  // Tạo Seller mới
  @Post()
  async create(@Body() createSellerDto: CreateSellerDto): Promise<Seller> {
    return this.sellerService.create(createSellerDto);
  }

  // Lấy tất cả Sellers
  @Get()
  async findAll(): Promise<Seller[]> {
    return this.sellerService.findAll();
  }

  // Lấy Seller theo ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Seller> {
    return this.sellerService.findOne(id);
  }

  // Cập nhật Seller theo ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSellerDto: UpdateSellerDto,
  ): Promise<Seller> {
    return this.sellerService.update(id, updateSellerDto);
  }

  // Xoá Seller theo ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Seller> {
    return this.sellerService.remove(id);
  }
}
