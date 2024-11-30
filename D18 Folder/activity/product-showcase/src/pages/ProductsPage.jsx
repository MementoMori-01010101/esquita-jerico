import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { Container, Row, Col } from "react-bootstrap";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Filtered products
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Search filtered products
  const displayedProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <Container className="my-4">
      {/* Filters and Search */}
      <Row className="mb-4">
        <Col md={3}>
          <select
            className="form-select"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Col>
        <Col md={6}>
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </Col>
      </Row>

      {/* Product Grid */}
      <Row>
        {displayedProducts.length ? (
          displayedProducts.map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
              <ProductCard
                product={product}
                onViewDetails={handleViewDetails}
              />
            </Col>
          ))
        ) : (
          <p className="text-center">No products found</p>
        )}
      </Row>

      {/* Product Details Modal */}
      <ProductModal
        show={showModal}
        onHide={() => setShowModal(false)}
        product={selectedProduct}
      />
    </Container>
  );
};

export default ProductsPage;
