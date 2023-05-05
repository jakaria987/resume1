import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState("");

    const [ok, setOk] = useState('');

    const handleRegister = event => {
        event.preventDefault();

        // if(password.length < 6){
        //     setError('password should be less than six characters');
        //     return;
        // }
        // if(email, password){
        //     createUser()
        //     .then(result => {
        //         setError("don't empty field");
        //     })
        //     .catch(error => {
        //         setError(error.message);
        //     })
        // }
        

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        

        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            setOk("registration Successful")
        })
        .catch(error => {
            console.log(error);
        })

    }

  return (
    <Container className="w-25 mx-auto">
      <h3>Please Register</h3>
      <h4 className="text-success">{ok}</h4>
      {/* <h1>{error}</h1> */}
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="accept" label="Accept terms and conditions" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already have an account?
          <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
