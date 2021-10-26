import React, { useEffect, useState } from "react";
import { Card, Container } from "reactstrap";
import { apiRequest } from "../helpers/apiRequest";
import { TransactionCard } from "./TransactionCard";

export const LandingPage = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const getBalance = async () => {
    try {
      const res = await apiRequest("GET", "balance");
      // console.log(res.data);
      setBalance(res.data?.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  };

  const getLast10 = async () => {
    try {
      const res = await apiRequest("GET", "filter/first");
      // console.log(res.data);
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBalance();
    getLast10();
  }, []);

  return (
    <Container>
      <Card
        body
        outline
        inverse
        style={{
          backgroundColor: "#282c34",
          borderColor: balance >= 0 ? "limegreen" : "tomato",
          // maxWidth: "700px",
          // alignSelf: "center",
          marginTop: "1vh",
        }}
      >
        <p className="fs-5">YOUR BALANCE IS</p>
        <p className="fs-1 fw-bold">${balance}</p>
      </Card>
      <p className="fs-1 fw-bold">Last 10 transactions</p>
      <div className="card-columns ">
        {/* <div className={"vstack gap-" + transactions.length}> */}
        {transactions?.map((tr, key) => {
          return <TransactionCard key={key} info={tr} />;
        })}
      </div>
    </Container>
  );
};
