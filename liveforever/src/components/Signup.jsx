import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Signup() {
  const emailref = useRef();
  const passwordref = useRef();
  const confirmPasswordref = useRef();
  const { signup ,currentUser} = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordref.current.value !== confirmPasswordref.current.value) {
      return setError("Passwords do not match!");
    }
    try {
      setError("");
      setLoading(true);
     await signup(emailref.current.value, passwordref.current.value);
    } catch (err) {
        alert(err)
      setError("Failed to create an account");
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {JSON.stringify(currentUser)}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailref} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordref} required />
            </Form.Group>

            <Form.Group id="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={confirmPasswordref} required />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account ? Log In
      </div>
    </>
  );
}
