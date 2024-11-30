import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const ProductModal = ({ show, onHide, product }) => {
  if (!product) return null;

  const { title, description, price, image, category } = product;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image} alt={title} className="img-fluid mb-3" />
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Price:</strong> ${price.toFixed(2)}
        </p>
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    category: PropTypes.string,
  }),
};

export default ProductModal;
