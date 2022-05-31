import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout/main";
import Card from "../../components/Card/transaction";
import { histoy } from "stores/action/transaction";
import { useDispatch } from "react-redux";

export default function History() {
  const dispatch = useDispatch();
  const [dataHistory, setDataHistory] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(histoy({ page: 1, limit: 7, filter: "" }))
        .then((res) => setDataHistory(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout head="History" page="dashboard">
      <div className="col-12 " style={{ maxHeight: "inherit" }}>
        <div
          className="transaction-card rounder py-3 overflow-auto"
          style={{ maxHeight: "inherit" }}
        >
          <div className="row mx-2 p-2">
            <p className="col-6">Transaction History</p>
            <p className="col-6 text-end">
              <button className="p-2 btn-black-50 border-0 rounder">
                --Select Filter--
              </button>
            </p>
          </div>
          {dataHistory
            ? dataHistory.map((v) => (
                <div key={v.id} className="">
                  <Card
                    leftTop={`${v.firstName} ${v.lastName}`}
                    leftBottom={`${v.type}`}
                    right={`${v.amount}`}
                    image={`${v.image}`}
                    type={v.type}
                    className={"mt-2 ps-2"}
                  />
                </div>
              ))
            : ""}
        </div>
      </div>
    </Layout>
  );
}
