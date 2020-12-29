import React from "react";
import styled from "@emotion/styled";

const ErrorContenedor = styled.div`
 background-color: #b7322c;
 padding: 1rem;
 color: #fff;
 font-size: 30px;
 text-transform: uppercase;
 font-weight: bold;
 text-align: center;
 font-family: "Bebas Neue", cursive;
`;

const Error = ({ message }) => {
 return <ErrorContenedor>{message}</ErrorContenedor>;
};

export default Error;
