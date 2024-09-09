"use client";

import Card from "react-bootstrap/Card";

function Footer() {
  const variants = [
    { id: 1, name: "Primary" },
    { id: 2, name: "Secondary" },
    { id: 3, name: "Warning" },
    { id: 4, name: "Info" },
    { id: 5, name: "Light" },
    { id: 6, name: "Dark" },
  ];

  return (
    <div className="flex gap-3 p-10">
      {variants.map((variant) => (
        <Card
          bg={variant.name.toLowerCase()}
          key={variant.name}
          text={variant.name.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2">
          <Card.Header>Card {variant.id}</Card.Header>
          <Card.Body>
            <Card.Title>{variant.name} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Footer;
