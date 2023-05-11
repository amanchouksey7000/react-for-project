import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>techyStar</h1>
          <p>solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            ullam veritatis, laudantium atque deserunt sint magnam. Esse,
            quibusdam voluptatibus illo at deleniti vel, obcaecati, excepturi
            perferendis neque delectus earum maiores?
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>who we are? </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi
            expedita doloribus laborum, animi voluptas nam nostrum, autem
            voluptatibus, delectus at incidunt praesentium eaque assumenda sint
            recusandae porro nemo mollitia.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>brands</h1>

          <article>
            <div
              style={{
                animationaDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationaDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationaDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationaDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
