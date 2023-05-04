import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import './ChefDetails.css'

const ChefDetails = ({ chef }) => {
  const { img, years_of_experience, number_of_recipes, id, name, likes } = chef;
  const [singleChef, setSingleChef] = useState([]);

  const chefDetails = useLoaderData();

  useEffect(() => {
    fetch("https://assignment10-server-jakaria987.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setSingleChef(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
<div className="row row-cols-1 row-cols-md-2 g-4  d-flex justify-content-center text-center mt-4">
  <div className="col">
    <div className="card">
      <img src={img} className="card-img-top c-shape" alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">
          <h4>years of experience : {years_of_experience}</h4> <br />
          <h4>number of recipes : {number_of_recipes} </h4> <br />
          <h4>likes: {likes}</h4> <br />
        </p>
        <Link to={`/singleChef/${id}`}>
        <Button className="btn-success">View Recipe</Button>

        </Link>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default ChefDetails;
