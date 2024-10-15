import ProductService from "@/services/product.service";
import ProductList from "../components/product";

export default async function ProductsPage({ params }: { params: object }) {
  try {
    const response = await ProductService.getListOfProduct(params);
    const listOfProduct = response.data.products;
    const total = response.data.total;
    const limit = response.data.limit;

    return <ProductList products={listOfProduct} total={total} limit={limit} />;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return <div>Error loading products</div>;
  }
}
