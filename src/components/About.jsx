import React from "react";
import { Figure, Container, Row, Col } from "react-bootstrap";
import NavBar from "../routes/NavBar";
import TotalPrice from "../components/TotalPrice"; // Import TotalPrice

const About = ({ totalPrice }) => { // Receive totalPrice as a prop
  return (
    <div>
      <NavBar />
      <TotalPrice totalPrice={totalPrice} /> {/* Display TotalPrice */}
      <Container>
        <h1>About Page</h1>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt="Store Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
              />
              <Figure.Caption>
                Our store logo represents quality and trust.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <p>
              Welcome to our store! We offer a wide range of high-quality products
              to meet your needs. Our mission is to provide exceptional customer
              service and ensure your satisfaction.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={300}
                height={200}
                alt="Store Image 1"
                src="https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
              />
              <Figure.Caption>
                A glimpse of our store's interior.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                width={300}
                height={200}
                alt="Store Image 2"
                src="https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
              />
              <Figure.Caption>
                Our team is always ready to assist you.
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Contact Us</h3>
            <p>Email: info@store.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
