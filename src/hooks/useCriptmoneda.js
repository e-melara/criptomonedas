import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
 font-family: "Bebas Neue", sans-serif;
 color: #fff;
 text-transform: uppercase;
 font-weight: bold;
 font-size: 2.4rem;
 margin-top: 2rem;
 display: block;
`;

const Select = styled.select`
 width: 100%;
 font-size: 1.4rem;
 display: block;
 padding: 1rem;
 appearance: none;
 border-radius: 10px;
 border: none;
`;

const useCriptomoneda = (label, stateInitial, options) => {
 const [state, setState] = useState(stateInitial);

 const Seleccionar = () => (
  <>
   <Label>{label}</Label>
   <Select onChange={(e) => setState(e.target.value)} value={state}>
    <option>---Seleccionar---</option>
    {options.map((opt) => (
     <option key={opt.Id} value={opt.Name}>
      {opt.FullName}
     </option>
    ))}
   </Select>
  </>
 );

 return [state, Seleccionar, setState];
};

export default useCriptomoneda;
