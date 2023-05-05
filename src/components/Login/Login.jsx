import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            setError(loggedUser);
            navigate(from, {replace:true})
        })
        .catch(error => {
            setError("something doing wrong");
        })
    }
    const [ok, setOk] = useState('');
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setOk("Successfully Login by google")
      })
      .catch(error => {
        console.log("error");
      })
    }
    const handleGithubSignIn =() => {
      signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setOk("Successfully Login by github")
      })
      .catch(error => {
        console.log("error");
      })
    }
  return (
    <Container className="w-25 mx-auto">
      <h4 className="text-success">{ok}</h4>
        <h3>Please Login</h3>
        
        
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>

        {/* <h3>{error}</h3> */}
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
            Want to create an account?
            <Link to='/register'>
                Register
            </Link>
        </Form.Text>
        <button onClick={handleGoogleSignIn} className="mt-4 btn-success">SIgn in with Google</button>
        <button onClick={handleGithubSignIn} className="mt-2">SIgn in with Github</button>
      </Form>
    </Container>
  );
};

export default Login;
