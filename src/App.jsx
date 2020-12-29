import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Formulario from "./Formulario";
import Cotizacion from "./Cotizacion";
import imagen from "./cryptomonedas.png";
import { getApiSuccess } from "./helpers";

const Contenedor = styled.div`
 max-width: 900px;
 margin: 0 auto;
 @media screen and (min-width: 992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
 }
`;

const Imagen = styled.img`
 max-width: 100%;
 margin-top: 5rem;
`;

const Heading = styled.h1`
 font-family: "Bebas Neue", cursive;
 color: #fff;
 text-align: left;
 font-weight: 700;
 font-size: 50px;
 margin-bottom: 50px;
 margin-top: 80px;
 &::after {
  content: "";
  width: 100px;
  height: 6px;
  background-color: #66a2fe;
  display: block;
 }
`;

function App() {
 const [result, setResult] = useState({});
 const [moneda, setMoneda] = useState("");
 const [criptomoneda, setCriptomoneda] = useState("");

 useEffect(() => {
  if (moneda === "" || criptomoneda === "") return;

  getApiSuccess(criptomoneda, moneda).then((resultado) => {
   setResult(resultado);
  });
 }, [moneda, criptomoneda]);

 return (
  <Contenedor>
   <div>
    <Imagen src={imagen} alt="imagen criptomoneda" />
   </div>
   <div>
    <Heading>Cotiza criptomonedas al instante</Heading>
    <Formulario setMoneda={setMoneda} setCriptomoneda={setCriptomoneda} />
    <Cotizacion result={result} />
   </div>
  </Contenedor>
 );
}

export default App;
