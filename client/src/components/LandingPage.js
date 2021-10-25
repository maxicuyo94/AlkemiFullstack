import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { apiRequest } from "../helpers/apiRequest";
import { TransactionCard } from "./TransactionCard";

export const LandingPage = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const getBalance = async () => {
    try {
      const res = await apiRequest("GET", "balance");
      console.log(res.data);
      setBalance(res.data?.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  };

  const getLast10 = async () => {
    try {
      const res = await apiRequest("GET", "filter/first");
      console.log(res.data);
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
      <p className="fs-5">YOUR BALANCE IS</p>
      <p className="fs-1 fw-bold">${balance}</p>

      <TransactionCard />

      <p className="fs-1 fw-bold">Last 10 transactions</p>

      <div className={"vstack gap-" + transactions.length}>
        {transactions?.map((tr) => {
          return <div className="bg-dark border">{tr.amount}.</div>;
        })}
      </div>
    </Container>
  );
};
