import { Link } from "react-router-dom";

const products = [
  { productid: 1, name: "Laptop", category: "electronics" },
  { productid: 2, name: "Mobile", category: "phone" },
  { productid: 3, name: "CPU", category: "cabinate" },
  { productid: 4, name: "Headphones", category: "electronics" },
];

const Products = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.productid}
            // to={`/products/${product.productid}`}
            to={`/product-details?id=${product.productid}&name=${product.name}&category=${product.category}`}
            className="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-400 capitalize">{product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
