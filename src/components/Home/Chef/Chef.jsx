import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Chef = () => {
  const [singleChef, setSingleChef] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://assignment10-server-jakaria987.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleChef(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>

      <div class="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center mt-4">
  <div class="col ">
    <div class="card text-center ">
      
      <div class="card-body">
      <img style={{height:300 ,width:300}} src={singleChef.img} class="card-img-top" alt="..."/>
        <h5 class="card-title">Name: {singleChef.name}</h5>
        <h5 class="card-title">{singleChef.bio}</h5>
        <h5 class="card-title">Likes: {singleChef.likes}</h5>
        <h5 class="card-title">Number of recipes: {singleChef.number_of_recipes}</h5>
        <h5 class="card-title">Years of experience: {singleChef.years_of_experience}</h5>
        </div>

        <div class="card-body d-flex">
          <div>
            <p><b>Recipe Name:</b> {singleChef.recipes1 && singleChef.recipes1.recipe_name}</p>
            <p><b>Ingredients :</b> {singleChef.recipes1 && singleChef.recipes1.ingredients}</p>
          <p class="card-text">{singleChef.recipes1 && singleChef.recipes1.cooking_method}</p>
          <p class="card-text"><b>Rating:</b> {singleChef.recipes1 && singleChef.recipes1.rating}</p>
          </div>
        
        <div>
        <p><b>Recipe Name:</b> {singleChef.recipes2 && singleChef.recipes2.recipe_name}</p>
            <p><b>Ingredients :</b> {singleChef.recipes2 && singleChef.recipes2.ingredients}</p>
        <p class="card-text">{singleChef.recipes2 && singleChef.recipes2.cooking_method}</p>
        <p class="card-text"><b>Rating:</b> {singleChef.recipes2 && singleChef.recipes2.rating}</p>
        </div>
       
       <div>
       <p><b>Recipe Name: </b>{singleChef.recipes3 && singleChef.recipes3.recipe_name}</p>
            <p><b>Ingredients : </b>{singleChef.recipes3 && singleChef.recipes3.ingredients}</p>
        <p class="card-text">{singleChef.recipes3 && singleChef.recipes3.cooking_method}</p>
       <p class="card-text"><b>Rating: </b>{singleChef.recipes3 && singleChef.recipes3.rating}</p>
       </div>
        
      </div>
    </div>
  </div>
  </div>


      
    </div>
  );
};

export default Chef;
