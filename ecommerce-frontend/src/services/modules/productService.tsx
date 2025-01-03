import axiosInstance from "../api/axiosInstance";
interface Seller {
  id: number;
  uuid: string;
  email: string;
  password: string;
  name: string;
  shopName: string;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  uuid: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
  sellerId: number;
  categoryId: number;
  seller: Seller;
  category: Category;
}

interface CreateProductDto {
  title: string;
  description: string;
  price: number;
  stock: number;
  sellerId: number;
  categoryId: number;
}

const productService = {
  // Lấy danh sách sản phẩm
  getAllProducts: async () => {
    const response = await axiosInstance.get<Product[]>("/products");
    return response;
  },

  // Lấy thông tin sản phẩm theo ID
  getProductById: async (id: string) => {
    const response = await axiosInstance.get<Product>(`/products/${id}`);
    return response;
  },

  // Thêm sản phẩm mới
  createProduct: async (data: CreateProductDto) => {
    const response = await axiosInstance.post<Product>("/products", data);
    return response;
  },

  // Cập nhật thông tin sản phẩm
  updateProduct: async (id: string, data: CreateProductDto) => {
    const response = await axiosInstance.put<Product>(`/products/${id}`, data);
    return response;
  },

  // Xóa sản phẩm
  deleteProduct: async (id: string) => {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response;
  },
};

export default productService;
