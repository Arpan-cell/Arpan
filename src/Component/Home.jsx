import React, { useState } from "react";
import Items from "./Items";
import { Card, FormControl } from "react-bootstrap";
import Header from "../Layout/Header/Header";
import Home2 from "./Home2";
const user = window.localStorage.getItem("full_name");
const GalleryReact = () => {
  const [items, setItems] = useState(Items);
  const [search, setSearch] = useState("");
  const filterItem = (categItem) => {
    const updatedItems = Items.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <Header />

      <Home2 />
      <FormControl
        className="search"
        type="text"
        placeholder="Search"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setSearch(e.target.value)}
      />

      <h1 className="mt-5 text-center main-heading"></h1>
      <hr />

      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Mountain")}
          >
            Mountain
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Beaches")}
          >
            Beaches
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Birds")}
          >
            Birds
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Food")}
          >
            Food
          </button>
          <button className="btn btn-warning" onClick={() => setItems(Items)}>
            All
          </button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {items
            .filter((v) => {
              if (v.category.toLowerCase().includes(search.toLowerCase())) {
                return v;
              } else if (!v.category) {
                return <p>No image</p>;
              }
            })

            .map((elem) => {
              const { category, image } = elem;

              return (
                <div className="item1 col-lg-4 col-md-4 col-sm-12 my-5">
                  <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                      <Card.Title>{category}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
