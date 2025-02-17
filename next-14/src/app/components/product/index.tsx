"use client";

import { IProducts, ProductListProps } from "@/types/product.type";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Badge, Card, Breadcrumb } from "react-bootstrap";
import { renderStars } from "@/components/Star";
import FormPagination from "@/components/Paginations";

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const router = useRouter();
  const [totalPages, setTotalPages] = useState(1);

  return (
    <div className="p-5">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Products</Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid grid-cols-5 gap-5 mt-5">
        {products.map((product: IProducts) => (
          <Card
            key={product.id}
            onClick={() => router.push(`/products/${product.id}`)}
            style={{ width: "18rem" }}
            className="mb-2 cursor-pointer">
            <Card.Header className="truncate">{product.title}</Card.Header>
            <Badge
              bg="danger"
              className="absolute right-[-30px] top-[-22px] p-3 rounded-full">
              {product.discountPercentage}%
            </Badge>
            <Card.Body>
              <Card.Img src={product.thumbnail} alt="image" />
              <div className="flex justify-between items-center border-t pt-3">
                <Card.Text className="text-base font-bold text-center">
                  <h4 className="truncate">
                    <strong>
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </strong>{" "}
                    -{" "}
                    <span className="text-muted">
                      <del>${product.price}</del>
                    </span>{" "}
                  </h4>
                </Card.Text>
                <Card.Text>{renderStars(product.rating)}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <FormPagination totalPages={totalPages} />
    </div>
  );
};

export default ProductList;
