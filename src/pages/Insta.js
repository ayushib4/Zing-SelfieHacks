import { ICONS } from "jest-util/build/specialChars";
import React from "react";
import { Col, Row, Button, Image } from "react-bootstrap";
import "./Insta.css";

export function Insta() {
  return (
    <div>
      <Row>
        <Col md={4}>
          {/* <div className="title">Fable</div> */}
          <center>
            <Image
              fluid
              className="logo"
              src="https://images.squarespace-cdn.com/content/v1/5e3c986ce9340f390000b809/1591743854364-2SW7IPVLJ7F27Y3YQZSA/Fable+Logo+ReDesign+V3.jpeg"
            ></Image>
            <Image
              className="image"
              rounded
              src="https://images.otstatic.com/prod1/41840284/1/large.jpg"
            ></Image>
            <script async src="//www.instagram.com/embed.js"></script>
            <p>
              <br></br>Serving seasonal Californian cuisine @ 558 Castro.{" "}
              <br></br>Open daily on the patio. <br></br>Weekdays 11:30am-10pm
              and weekends 10am-10pm.
            </p>
          </center>
        </Col>
        <Col>
          <div>
            <h1 className="sec-header">Restaurant Buzzwords</h1>
            <Button className="button" variant="info" size="lg" disabled>
              brunch
            </Button>{" "}
            <Button className="button" variant="info" size="lg" disabled>
              californian
            </Button>{" "}
            <Button className="button" variant="info" size="lg" disabled>
              garden patio
            </Button>
          </div>
          <div>
            <h1 className="sec-header">Emoji Index</h1>
            <Image
              className="em-image"
              src="https://www.clipartkey.com/mpngs/m/195-1953707_italian-chef-kiss-emoji-freetoedit-chefs-kiss-meme.png"
              thumbnail
            ></Image>
          </div>
          <div>
            <h1 className="sec-header">
              What Instagram Influencers Have To Say?
            </h1>
            <Row>
              <Col md={1.8}>
                <Image
                  className="pfp"
                  roundedCircle
                  thumbnail
                  src="https://i.pinimg.com/474x/11/22/a2/1122a2bf45c8163c6a23dc169fa7cb6d.jpg"
                ></Image>
              </Col>
              <Col>
                <p>
                  <br></br>
                  <b>@nerhereats</b> <br></br>did brunch RIGHT @fablerestaurant
                  | buttermilk pancakes were sooo good 📍 fable restaurant, sf,
                  ca
                  <br></br>
                  <br></br>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={1.8}>
                <Image
                  className="pfp"
                  roundedCircle
                  thumbnail
                  src="https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZWxlc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                ></Image>
              </Col>
              <Col>
                <p>
                  <b>@aliceizhungry</b> <br></br>Hello dreamy garden patio 😍
                  Love the vibes at @fablerestaurant & the food is also on
                  point. The fries here are the best I’ve ever had - they are
                  extra crispy and soo good. And the best part is, they are
                  puppy friendly (👀 peep the last photo)
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={1.8}>
                <Image
                  className="pfp"
                  roundedCircle
                  thumbnail
                  src="https://i.pinimg.com/474x/73/40/44/734044d78c3acbace4b7edc5c1bf9317.jpg"
                ></Image>
              </Col>
              <Col>
                <p>
                  <br></br>
                  <b>@snackswithannie</b>
                  <br></br>We love a good DOUBLE cheeseburger 🍔 Fable has the
                  cutest outdoor dining set up (so many plants!!!)🍔
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
