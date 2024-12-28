import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService], // Đăng ký PrismaService làm provider
  exports: [PrismaService], // Export PrismaService để dùng ở các module khác
})
export class PrismaModule {}
