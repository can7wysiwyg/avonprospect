"use client";
import NewArrivals from "./components/home/NewArrivals";
import Order from "./components/home/Order";
import SlideShow from "./components/home/SlideShow";
import Categories from "./components/home/Categories";
import Catalogue from "./components/home/Catalogue";


export default function Home() {
  
 
  

  return (
    <>

    <SlideShow />

    <Categories />
     

      
      <NewArrivals />

        <Catalogue /> 
      
      <Order />
    </>
  );
}
