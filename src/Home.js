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
               title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
               price={42749}
               rating={4}
               image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
            />
        </div>
   
        <div className="home__row">
            <Product
               id="12321341"
               title="WELLTECH X6 Bluetooth Smartwatch with Camera and SIM Card Support, Apps, Pedometer, Sedentary Remind and Sleep Monitoring for Smartphones (Black)"
               price={1149}
               rating={3}
               image="https://images-na.ssl-images-amazon.com/images/I/419JdupWhwL.jpg" 
            />
            <Product
               id="12321341"
               title="Echo Flex– Plug-in Echo for smart home control"
               price={2999}
               rating={4}
               image="https://images-na.ssl-images-amazon.com/images/I/41ky9Q83ePL._SL1000_.jpg"
            />
            <Product
               id="12321341"
               title="New Apple iPad Pro (12.9-inch, Wi-Fi, 1TB) - Space Grey (4th Generation)"
               price={134900}
               rating={4}
               image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
               id="12321341"
               title="Samsung LC34J791WTWXXL 34 Wide ScreenThunderbolt 3 Curved Monitor 3440 x 1440"
               price={80890}
               rating={4}
               image="https://images-na.ssl-images-amazon.com/images/I/91pvqUcAKmL._SL1500_.jpg"
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
