import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
 color: #fff;
 font-family: Arial, Helvetica, sans-serif;
`;
const Parrafo = styled.p`
 font-size: 18px;
 span {
  font-weight: bold;
 }
`;
const Precio = styled.p`
 font-size: 30px;
`;

const Cotizacion = ({ result }) => {
 if (Object.keys(result).length === 0) return null;

 return (
  <ResultadoDiv>
   <Precio>
    El precio es: <span>{result.PRICE}</span>{" "}
   </Precio>
   <Parrafo>
    Precio mas alto del dia: <span>{result.HIGHDAY}</span>{" "}
   </Parrafo>
   <Parrafo>
    Precio mas bajo del dia: <span>{result.LOWDAY}</span>{" "}
   </Parrafo>
   <Parrafo>
    Variacion ultima 24 horas: <span>{result.CHANGEPCT24HOUR}</span>{" "}
   </Parrafo>
   <Parrafo>
    Ultima actualizacion: <span>{result.LASTUPDATE}</span>{" "}
   </Parrafo>
  </ResultadoDiv>
 );
};

export default Cotizacion;
