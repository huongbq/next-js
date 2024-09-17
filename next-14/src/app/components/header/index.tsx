/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const [token, setToken] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedToken = localStorage.getItem("token");
      setToken(savedToken);
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/auth/sign-in");
  };

  return (
    <header>
      <Navbar expand="lg" className="bg-gray-400">
        <Container>
          <Navbar.Brand href="/">Next JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <NavDropdown title="Recipes" id="basic-nav-dropdown">
                <NavDropdown.Item href="/recipe-list">
                  Recipe List
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/recipe-list">
                  Recipe Detail
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {token ? (
          <div className="relative">
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(2).jpg"
              className="h-10 rounded-full cursor-pointer mr-4"
              alt="avt"
              onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
              <div className="absolute text-center top-[120%] shadow-xl right-[20%] p-2 rounded-lg flex flex-col gap-1">
                <Link href={"/accounts"}>Profile</Link>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/auth/sign-in" className="mr-4">
            Login
          </Link>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
