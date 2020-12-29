import axios from "axios";

export const getApi = async () => {
 const resultado = await axios.get(
  "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
 );

 return resultado.data.Data.map((item) => {
  return item.CoinInfo;
 });
};

export const getApiSuccess = (cripto, moneda) => {
 return new Promise((resolve, reject) => {
  axios
   .get(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
   )
   .then((resultado) => {
    resolve(resultado.data.DISPLAY[cripto][moneda]);
   })
   .catch((error) => reject(error));
 });
};
