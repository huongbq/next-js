"use client";

import { IProducts, ProductListProps } from "@/types/product.type";
import { useRouter } from "next/navigation";
import React from "react";
import { Badge, Card, Breadcrumb, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const ProductList: React.FC<ProductListProps> = ({ products }) => {
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
      <Pagination className="mt-4 flex justify-center">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item active>{5}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default ProductList;
