import React, { useState } from "react";
import { Card, Dropdown, Button, Container, Row, Col } from "react-bootstrap";
import TotalPrice from "./TotalPrice";
import "./Products.css"; // Import the CSS file

const Products = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      colors: ["Red", "Blue", "Green"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", 
      description: "A great product for everyday use.",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      colors: ["Black", "White", "Yellow"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", 
      description: "Premium quality for professionals.",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      colors: ["Purple", "Pink", "Orange"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", 
      description: "Stylish and modern design.",
    },
    {
      id: 4,
      name: "Product 4",
      price: 40,
      colors: ["Gray", "Brown", "Beige"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", 
      description: "Durable and long-lasting.",
    },
    {
      id: 5,
      name: "Product 5",
      price: 50,
      colors: ["Teal", "Cyan", "Magenta"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", 
      description: "Perfect for outdoor adventures.",
    },
    {
      id: 6,
      name: "Product 6",
      price: 60,
      colors: ["Gold", "Silver", "Bronze"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", 
      description: "Luxurious and elegant.",
    },
    {
      id: 7,
      name: "Product 7",
      price: 70,
      colors: ["Maroon", "Navy", "Olive"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", 
      description: "Ideal for tech enthusiasts.",
    },
    {
      id: 8,
      name: "Product 8",
      price: 80,
      colors: ["Lavender", "Mint", "Coral"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", 
      description: "Eco-friendly and sustainable.",
    },
    {
      id: 9,
      name: "Product 9",
      price: 90,
      colors: ["Indigo", "Turquoise", "Peach"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", 
      description: "Compact and portable.",
    },
    {
      id: 10,
      name: "Product 10",
      price: 100,
      colors: ["Charcoal", "Ivory", "Ruby"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", 
      description: "High-performance and reliable.",
    },
  ];

  const handleColorChange = (productId, color) => {
    setSelectedColors({ ...selectedColors, [productId]: color });
  };

  const handleBuy = (price) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <Container>
      <TotalPrice totalPrice={totalPrice} />
      <h1 className="page-title">Products Page</h1>
      <Row className="products">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="product-card">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="price">Price: ${product.price}</Card.Text>
                <Dropdown className="mb-3">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedColors[product.id] || "Select Color"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {product.colors.map((color) => (
                      <Dropdown.Item
                        key={color}
                        onClick={() => handleColorChange(product.id, color)}
                      >
                        {color}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  variant="primary"
                  onClick={() => handleBuy(product.price)}
                  className="w-100"
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;