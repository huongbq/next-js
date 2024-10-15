import { Card, Col, Row, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { IProducts } from "@/types/product.type";

interface ProductDetailProps {
  productDetail: IProducts | undefined;
}

const Product: React.FC<ProductDetailProps> = ({ productDetail }) => {
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

  return productDetail ? (
    <div className="px-5 py-3">
      <Breadcrumb className="text-lg">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item active>{productDetail.title}</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="my-4">
        <Col md={6}>
          <Card.Img src={productDetail.thumbnail} alt={productDetail.title} />
        </Col>

        <Col md={6}>
          <h2 className="text-xl font-bold mb-3">{productDetail.title}</h2>
          <h4>
            <Badge bg="success">{productDetail.category}</Badge>
          </h4>

          <div className="d-flex align-items-center my-3">
            {renderStars(productDetail.rating)}
            <span className="ml-2">({productDetail.rating} stars)</span>
          </div>

          <p className="font-medium text-lg">{productDetail.description}</p>

          <div className="my-3 text-lg">
            <h4>
              <strong>
                $
                {(
                  productDetail.price -
                  (productDetail.price * productDetail.discountPercentage) / 100
                ).toFixed(2)}
              </strong>{" "}
              <span className="text-muted">
                <del>${productDetail.price}</del>
              </span>{" "}
              <Badge bg="danger">{productDetail.discountPercentage}% OFF</Badge>
            </h4>
          </div>

          <Button variant="primary" size="lg">
            Buy Now
          </Button>
        </Col>
      </Row>

      <h3 className="my-4 text-xl font-bold">Reviews</h3>
      {productDetail.reviews.length > 0 ? (
        productDetail.reviews.map((review, index) => (
          <Card className="mb-3" key={index}>
            <Card.Body>
              <Card.Title>
                {review.reviewerName} ({review.reviewerEmail})
              </Card.Title>
              <div className="d-flex align-items-center">
                {renderStars(review.rating)}
                <span className="ml-2">({review.rating} stars)</span>
              </div>
              <Card.Text className="my-2">{review.comment}</Card.Text>
              <Card.Subtitle className="text-muted">
                {new Date(review.date).toLocaleDateString()}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Product;
