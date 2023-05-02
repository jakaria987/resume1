import React from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import banner from "../../../assets/banner.jpg";
import chef1 from "../../../assets/chef1.jpg";
import chef2 from "../../../assets/chef2.jpg";
import chef3 from "../../../assets/chef3.jpg";
import chef4 from "../../../assets/chef4.jpg";
import chef5 from "../../../assets/chef5.jpg";
import hot1 from "../../../assets/hot1.jpg";
import hot2 from "../../../assets/hot2.jpg";
import hot3 from "../../../assets/hot3.jpg";
import hot4 from "../../../assets/hot4.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="mt-4">
      <Container>
        {/* banner */}
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

        {/* chef profile */}
        <div className="row row-cols-1 row-cols-md-2 g-4 chef-img mt-4">
          <div className="chef">
            <Card.Img variant="top" src={chef1} />
            <Card.Body>
              <Card.Title>Baek Jong-won</Card.Title>
              <Card.Text className="mt-4">
                <p>Years of experience: 10</p>
                <p>Numbers of recipes : 25</p>
                <p>Likes: 200K</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button className="text-black" variant="success">
                View Recipes Button
              </Button>
            </Card.Footer>
          </div>
          <div className="chef">
            <Card.Img variant="top" src={chef2} />
            <Card.Body>
              <Card.Title>Roy Choi</Card.Title>
              <Card.Text className="mt-4">
                <p>Years of experience: 15</p>
                <p>Numbers of recipes : 35</p>
                <p>Likes: 500K</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button className="text-black" variant="success">
                View Recipes Button
              </Button>
            </Card.Footer>
          </div>
          <div className="chef">
            <Card.Img variant="top" src={chef3} />
            <Card.Body>
              <Card.Title>Lim Ji-ho</Card.Title>
              <Card.Text className="mt-4">
                <p>Years of experience: 12</p>
                <p>Numbers of recipes : 17</p>
                <p>Likes: 300K</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button className="text-black" variant="success">
                View Recipes Button
              </Button>
            </Card.Footer>
          </div>
          <div className="chef">
            <Card.Img variant="top" src={chef4} />
            <Card.Body>
              <Card.Title>Lim Ji-ho</Card.Title>
              <Card.Text className="mt-4">
                <p>Years of experience: 17</p>
                <p>Numbers of recipes : 22</p>
                <p>Likes: 150K</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button className="text-black" variant="success">
                View Recipes Button
              </Button>
            </Card.Footer>
          </div>
          <div className="chef">
            <Card.Img variant="top" src={chef5} />
            <Card.Body>
              <Card.Title>Lim Ji-ho</Card.Title>
              <Card.Text className="mt-4">
                <p>Years of experience: 26</p>
                <p>Numbers of recipes : 40</p>
                <p>Likes: 700K</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button className="text-black" variant="success">
                View Recipes Button
              </Button>
            </Card.Footer>
          </div>
          <div className="chef">
            <Card.Img variant="top" src={chef2} />
            <Card.Body>
              <Card.Title>Lim Ji-ho</Card.Title>
              <Card.Text className="mt-4">
                <p>Years of experience: 30</p>
                <p>Numbers of recipes : 70</p>
                <p>Likes: 1M</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button className="text-black" variant="success">
                View Recipes Button
              </Button>
            </Card.Footer>
          </div>
        </div>

        {/* extra section 1 */}
        <div>
          <h1 className="my-4">What hot !</h1>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <div className="col">
              <div className="card">
                <img src={hot1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Chocolate</h5>
                  <p className="card-text">
                    2 cups cream 120 grams dark chocolate, chopped 2 bags of
                    earl grey tea
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={hot2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">health</h5>
                  <p className="card-text">
                    Eat a variety of nutrient-rich foods. More than 40
                    different nutrients for good health
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={hot3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rolls</h5>
                  <p className="card-text">
                    You know how bacon is all the rage these days? Bacon dipped
                    in chocolate, bacon
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={hot4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Economical</h5>
                  <p className="card-text">
                    Quis sed mid elit, risus aliquet placerat. Pid et, vel
                    phasellus augue a ultrices,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </Container>
    </div>
  );
};

export default Home;
