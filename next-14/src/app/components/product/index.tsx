"use client";

import { IProducts, ProductListProps } from "@/types/product.type";
import { useRouter } from "next/navigation";
import React from "react";
import { Card } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const ProductList: React.FC<ProductListProps> = ({
  products,
  total,
  limit,
}) => {
  const router = useRouter();
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
        );
      } else if (i - rating < 1) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            className="text-yellow-500"
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="p-5">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Products</Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {products.map((product: IProducts) => (
          <Card
            key={product.id}
            onClick={() => router.push(`/products/${product.id}`)}
            style={{ width: "18rem" }}
            className="mb-2 cursor-pointer">
            <Card.Header className="truncate">{product.title}</Card.Header>
            <Card.Body>
              <Card.Img src={product.thumbnail} alt="image" />
              <div className="flex justify-between border-t pt-3">
                <Card.Text className="text-xl font-bold text-center">
                  $ {product.price}
                </Card.Text>
                <Card.Text>{renderStars(product.rating)}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="flex justify-around mt-10">
        <h1 className="text-2xl font-bold">Total Products: {total}</h1>
        <h1 className="text-2xl font-bold">Limit: {limit}</h1>
      </div>
    </div>
  );
};

export default ProductList;
