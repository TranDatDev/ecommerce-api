import React, { useEffect, useState } from "react";
import productService from "../../services/modules/productService";

interface Seller {
  name: string;
  shopName: string;
}

interface Category {
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
  seller: Seller;
  category: Category;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getAllProducts();
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-semibold text-center mb-6">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={`https://via.placeholder.com/400x250?text=${product.title}`}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-green-600">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500">
                  In Stock: {product.stock}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">
                  Category: {product.category.name}
                </p>
                <p className="text-gray-700">
                  Seller: {product.seller.shopName} ({product.seller.name})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
