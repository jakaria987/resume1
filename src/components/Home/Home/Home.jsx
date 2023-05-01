import React from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import banner from "../../../assets/banner.jpg";
import chef1 from '../../../assets/chef1.jpg'
import chef2 from '../../../assets/chef2.jpg'
import chef3 from '../../../assets/chef3.jpg'
import chef4 from '../../../assets/chef4.jpg'
import chef5 from '../../../assets/chef5.jpg'
import "./Home.css";

const Home = () => {
  return (
    <div className="mt-4">
      <Container>
        <div className=" d-flex align-items-center gap-4">
          <p>
            <img className="size" src={banner} alt="" />
          </p>
          <p>
            If you’re a fan of Korean food or looking to explore the cuisine,
            there are plenty of Korean food blogs out there that can help you
            learn about the culture, ingredients, and cooking techniques.My
            Korean Kitchen – My Korean Kitchen is a fantastic blog that features
            delicious Korean recipes that you can make at home. From classic
            dishes like kimchi and bibimbap to unique creations like the Jolly
            Pong Shake (Cereal Milkshake), this blog has it all. They also have
            a great selection of game day dishes that are perfect for
            entertaining.If you ever want to indulge in some trendy and
            delicious Korean food, then Rose Tteokbokki should definitely be on
            your list. This fusion dish has taken the country by storm, with its
            creamy and mildly spicy flavor profile that everyone seems to be
            obsessed with. Learn how to make this dish at home!Korean Tuna Mayo
            Rice Bowl is an easy and delicious meal that can be enjoyed at any
            time at home. It is packed with delicious savory flavor, and creamy
            texture, making it a great option for lunch or dinner. In this post,
            you will find out what Korean Tuna Mayo Rice Bowl Are you looking
            for something delicious and new to try on your next game day? Check
            out these 14 delicious Korean dishes. From classics like Korean
            Fried Chicken to lesser-known gems like Honey Butter Squid Jerky and
            Fire Noodles with French Fries, there is sure to be something
            everyone will love.{" "}
          </p>
        </div>

        
      </Container>
    </div>
  );
};

export default Home;
