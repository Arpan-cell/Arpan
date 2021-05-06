import React from "react";
import { Carousel } from "react-bootstrap";
import Categorydetails from "../Products/Categorydetails/Categorydetails";
import Productcategory from "../Products/Productcategory/Productcategory";
export default function Home() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" >
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img className="img1" src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80" class="d-block w-100" alt="..."/>
    </div>
    
    
  </div>
</div>

<Productcategory/>
 
 Our Collection

<br/>
 
 

    </div>
  );
}
