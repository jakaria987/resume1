import React from "react";
import { Container } from "react-bootstrap";

import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {
    
  return (
    <>
    <Container>
      <div className="text-center text-success">
        <h1>THE KOREAN CHEF HUB</h1>
        <p>
          <small>a premium chef house</small>
        </p>
      </div>

      
    </Container>
    </>
  );
};

export default Header;
