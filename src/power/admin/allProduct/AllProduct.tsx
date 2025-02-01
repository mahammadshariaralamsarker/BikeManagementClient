import { useProductsQuery } from "@/redux/features/admin/product.api";

const ProductList = () => {
  const { data, isLoading, error } = useProductsQuery(); // 
  const products = data?.result || []; 
  if (isLoading) {
    return <p className="text-center text-blue-500 text-lg">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-lg">Error fetching products. Please try again later.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Product List</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white">
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-600">
                Price: <span className="font-bold text-blue-600">${product.price}</span>
              </p>
              <p className="text-gray-500">{product.description}</p>
              <p className={`mt-2 ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
