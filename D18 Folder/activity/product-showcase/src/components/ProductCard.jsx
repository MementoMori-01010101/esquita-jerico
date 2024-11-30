import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onViewDetails }) => {
  const { title, image, price } = product;

  return (
    <Card className="product-card h-100 shadow-sm">
      <Card.Img variant="top" src={image} className="product-image" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-truncate">{title}</Card.Title>
        <Card.Text className="mt-auto">
          <strong>${price.toFixed(2)}</strong>
        </Card.Text>
        <Button
          variant="primary"
          className="mt-2"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ProductCard;
