import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import Chef from "../Chef/Chef";
import './ChefDetails.css'

const ChefDetails = ({ chef }) => {
  const { img, years_of_experience, number_of_recipes, id, name, likes } = chef;
  // const { id } = useParams();
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
      {/* <h1>chef details page</h1>
      {chefDetails?.map((cheff) => (
        <Chef
          key={cheff.id}
          cheff = {cheff}
        ></Chef>
      ))} */}

<div className="row row-cols-1 row-cols-md-2 g-4  d-flex justify-content-center text-center">
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
        <button>View Recipe</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ChefDetails;
