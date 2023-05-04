import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import Chef from "../Chef/Chef";

const ChefDetails = () => {
  // const { id, name } = chef;
  const { id } = useParams();
  const chefDetails = useLoaderData();
  // const {id} = useParams();
  // const chefDetails = useLoaderData();
  // console.log(id, chefDetails);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {chefDetails.map((chef) => (
        <Chef
          key={chef.id}
          chef = {chef}
        ></Chef>
      ))}
    </div>
    // <Card className="text-center">
    //   <Card.Header>Featured</Card.Header>
    //   <Card.Body>
    //     <Card.Title>Special title treatment</Card.Title>
    //     <Card.Text>
    //       With supporting text below as a natural lead-in to additional content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    //   <Card.Footer className="text-muted">2 days ago</Card.Footer>
    // </Card>
  );
};

export default ChefDetails;
