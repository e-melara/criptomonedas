import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Error from "./Error";
import { getApi } from "./helpers";
import useMoneda from "./hooks/useMoneda";
import useCriptomoneda from "./hooks/useCriptmoneda";

const Boton = styled.input`
 margin-top: 20px;
 font-weight: bold;
 font-size: 20px;
 padding: 10px;
 background-color: #66a2fe;
 border: none;
 width: 100%;
 border-radius: 10px;
 color: #fff;
 transition: background-color 0.3s ease;
 &:hover {
  background-color: #326ac0;
  cursor: pointer;
 }
`;

const Formulario = ({ setCriptomoneda, setMoneda }) => {
 const MONEDAS = [
  {
   codigo: "USD",
   nombre: "Dolar Americanos",
  },
  {
   codigo: "MXN",
   nombre: "Peso Mexicano",
  },
  {
   codigo: "EUR",
   nombre: "Euro",
  },
  {
   codigo: "GBP",
   nombre: "Libra Esterlina",
  },
 ];

 const [error, setError] = useState(false);
 const [listCripto, setListCripto] = useState([]);
 const [moneda, Select] = useMoneda("Elige tu Moneda", "", MONEDAS);
 const [criptomoneda, SelectCripto] = useCriptomoneda(
  "Elige tu Criptomoneda",
  "",
  listCripto
 );

 useEffect(async () => {
  const api = await getApi();
  setListCripto(api);
 }, []);

 const onSubmit = (e) => {
  e.preventDefault();

  if (moneda === "" || criptomoneda === "") {
   setError(true);
   return;
  }

  setError(false);

  setMoneda(moneda);
  setCriptomoneda(criptomoneda);
 };

 return (
  <>
   <form onSubmit={onSubmit}>
    {error && <Error message="todos los campos son obligatorios" />}
    <Select />
    <SelectCripto />
    <Boton type="submit" />
   </form>
  </>
 );
};

export default Formulario;
