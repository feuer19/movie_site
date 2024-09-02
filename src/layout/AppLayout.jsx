import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Nav, Navbar, Form } from "react-bootstrap";

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" className="px-5 bg-black" data-bs-theme="dark">
        <Link to={"/"}>
          <Navbar.Brand className="me-4">
            <img src="icons/home_icon.png" width={45} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className="text-white me-4 link-offset-2 link-underline link-underline-opacity-0"
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="text-white link-offset-2 link-underline link-underline-opacity-0"
            >
              Movies
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
