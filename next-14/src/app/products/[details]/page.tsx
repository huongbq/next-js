"use client";

import ProductService from "@/services/product.service";
import Product from "@/app/components/product/detail";
import { useEffect, useState } from "react";
import { IProducts } from "@/types/product.type";

export default function ProductDetailPage({ params }: any) {
  const [productDetail, setProductDetail] = useState<IProducts>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (params.details) {
          const response = await ProductService.getProductDetail(
            params.details
          );
          setProductDetail(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchData();
  }, [params.details]);

  return <Product productDetail={productDetail} />;
}
