import React from "react";
import "./Home.css"
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
         <img className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="" />

        <div className="home__row">
            <Product
               id="12321341"
               title="The Lean Startup: How Constant Innovation Creates Radically Successful Bussiness Paperback"
               price={523}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product
               id="12321341"
               title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (White)"
               price={5999}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
        </div>
   
        <div className="home__row">
            <Product
               id="12321341"
               title="The Lean Startup: How Constant Innovation Creates Radically Successful Bussiness Paperback"
               price={523}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product
               id="12321341"
               title="The Lean Startup: How Constant Innovation Creates Radically Successful Bussiness Paperback"
               price={523}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product
               id="12321341"
               title="The Lean Startup: How Constant Innovation Creates Radically Successful Bussiness Paperback"
               price={523}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
               id="12321341"
               title="The Lean Startup: How Constant Innovation Creates Radically Successful Bussiness Paperback"
               price={523}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
