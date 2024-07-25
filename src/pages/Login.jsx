import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin } = UserData();
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    await userLogin(email, password, navigate);
  };
  return (
    <div>
      <Container className="mt-4">
        <h2 className="mt-4">Login</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Login</Button> <hr />
          <Link to="/register">New to DKart? Create an account</Link> <hr />
        </Form>
      </Container>
    </div>
  );
};

export default Login;
