/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";
import GiftItem from "./GiftItem";
import useFetchGifts from "../hooks/useFetchGifts";

const GiftGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifts(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando</h2>
      }
      <div className="card-grid">
        {images.map((img) => {
          return <GiftItem key={img.id} {...img}/>;
        })}
      </div>
    </>
  );
};

export default GiftGrid;
