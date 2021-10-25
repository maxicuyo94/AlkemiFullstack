import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import axios from "axios";

export const LandingPage = () => {
  const [balance, setBalance] = useState(0);

  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.io)",
  };

  let reqOptions = {
    url: "http://localhost:3001/transactions/balance",
    method: "GET",
    headers: headersList,
  };

  const getBalance = async () => {
    try {
      const res = await axios.request(reqOptions);
      console.log(res);
      setBalance(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBalance();
  });

  return (
    <Container>
      <h4>YOUR BALANCE IS</h4>
      <h1>${balance}</h1>
    </Container>
  );
};
