import React from "react";
import Header from "./components/Header";
import  HeroImg from './assets/images/youtube-embed.png';
import "./shared.css";
import "./main.css";

export const Main = () => {
  return (
    <div>
      <Header />
      {/* Hero section */}
      <section id="hero">
        <div className="container">
          <div className="hero-info">

          <h1 className="title">Biznesingizni keyingi bosqichga
            olib chiqing
          </h1>
          <p className="section-text">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
          <a href="#" className="button">Xizmatlar bilan tanishish</a>
        </div>
        <div className="hero-image">
          <a href="https://www.youtube.com" target={"_blank"}>
            <img src={HeroImg} alt="youtube-embed" />
          </a>
        </div>
        </div>
      </section>
      {/* /Hero section */}


      {/* Services section */}
      <section id="services">
        <div className="container">
          
        </div>
      </section>
      {/* /Services section */}
    </div>
  );
};

export default Main;
