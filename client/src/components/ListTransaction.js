import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "../helpers/apiRequest";
import { TransactionCard } from "./TransactionCard";

export const ListTransaction = () => {
  let { filter } = useParams();
  const [list, setList] = useState([]);
  const presets = {
    none: { url: "/", title: "" },
    inflow: { url: "/filter/inflow", title: "Inflow " },
    outflow: { url: "/filter/outflow", title: "Outflow " },
  };
  const getList = async () => {
    try {
      const res = await apiRequest("Get", presets[filter].url);
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getList();
  }, [filter]);

  return (
    <div>
      <p className="fs-1 fw-bold">{presets[filter].title}Transactions</p>

      <div className={"vstack gap-" + list.length}>
        {list?.map((tr, key) => {
          return <TransactionCard key={key} info={tr} />;
        })}
      </div>
    </div>
  );
};
