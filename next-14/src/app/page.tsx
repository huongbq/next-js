"use client";

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function Home() {
  const router = useRouter();
  const variants = [
    { id: 1, name: "Dark", title: "Cart", link: "/cart" },
    { id: 2, name: "Light", title: "Profile", link: "/profile" },
    { id: 3, name: "Info", title: "Products", link: "/products" },
    { id: 4, name: "Warning", title: "Account", link: "/accounts" },
    { id: 5, name: "Secondary", title: "Recipes", link: "recipe-list" },
    { id: 6, name: "Primary", title: "Blogs", link: "/blogs" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/sign-in");
    } else {
      try {
        const decodedToken = jwtDecode(token) as any;
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp && decodedToken.exp < currentTime) {
          localStorage.removeItem("token");
          router.push("/auth/sign-in");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        router.push("/auth/sign-in");
      }
    }
  }, [router]);

  return (
    <main className="flex gap-4 items-center p-20">
      {variants.map((variant) => (
        <Card
          bg={variant.name.toLowerCase()}
          key={variant.id}
          onClick={() => router.push(variant.link)}
          text={variant.name.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2 cursor-pointer">
          <Card.Header>{variant.title}</Card.Header>
          <Card.Body>
            <Card.Title>{variant.title} Card</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </main>
  );
}
