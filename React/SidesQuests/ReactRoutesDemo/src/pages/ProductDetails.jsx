// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const ProductDetails = () => {
  // const { productid } = useParams();
  const [searchParams] = useSearchParams();

  const productid = searchParams.get("id");
  const productName = searchParams.get("name");
  const category = searchParams.get("category");

  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>

      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <p className="text-gray-400 mb-2">Product ID:</p>
        <p className="text-xl font-semibold mb-4">{productid}</p>

        <p className="text-gray-400 mb-2">Product Name:</p>
        <p className="text-xl font-semibold mb-4">{productName}</p>

        <p className="text-gray-400 mb-2">Category:</p>
        <p className="text-xl font-semibold mb-4 capitalize">{category}</p>

        <p className="text-gray-300">
          This is a detailed description of{" "}
          <span className="font-semibold">{productName}</span> from {category}{" "}
          category.
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;
