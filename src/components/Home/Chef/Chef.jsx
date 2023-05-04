import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";

const Chef = () => {


const [singleChef, setSingleChef] = useState([]);


  return (
    <div>
      <Card className="text-center">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default Chef;
