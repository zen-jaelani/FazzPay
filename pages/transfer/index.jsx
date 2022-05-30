import React, { useEffect, useState } from "react";
import Layout from "components/Layout/main";
import Card from "components/Card/transaction";
import PrivateRoute from "components/privateRoute";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "stores/action/user";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import Spinner from "react-bootstrap/Spinner";

function Transfer() {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.user);
  const { data } = user;
  console.log(pageInfo);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    search: "",
    sort: "",
    hasMore: true,
  });
  const [pageInfo, setPageInfo] = useState({});
  console.log();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [pagination]);

  const getData = () => {
    try {
      dispatch(getAllUser(pagination))
        .then((res) => setPageInfo(res.value.data.pagination))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(pageInfo ? pageInfo.page : "nothing");
  return (
    <Layout page="transfer" head="Transfer">
      <div
        className="bg-white rounder shadow p-3 overflow-auto"
        style={{ maxHeight: "inherit", position: "" }}
        id="scrollableDiv"
      >
        <div className="">
          <div className="">
            <p>Search Receiver</p>
            <div className="input-group mb-3">
              <span
                className="input-group-text border-0 bg-light"
                id="basic-addon1"
              >
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 bg-light"
                placeholder="Search receiver here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
          <InfiniteScroll
            dataLength={pagination.limit}
            next={() =>
              setPagination({
                ...pagination,
                limit: pagination.limit + 4,
                hasMore:
                  pagination.limit <=
                  (pageInfo ? pageInfo.totalData : Number.MAX_VALUE),
              })
            }
            scrollThreshold={0.9}
            hasMore={pagination.hasMore}
            loader={
              <div className="text-center">
                <Spinner
                  animation="border"
                  size="lg"
                  className="my-4"
                  variant="primary"
                />
              </div>
            }
            scrollableTarget="scrollableDiv"
          >
            <div className="rounder px-2 w-100">
              {Array.isArray(data) &&
                data.map((value) => (
                  <div
                    key={value.id}
                    onClick={() =>
                      router.push({
                        pathname: `/transfer/${value.id}`,
                        query: value,
                      })
                    }
                  >
                    <Card
                      leftTop={`${value.firstName} ${value.lastName}`}
                      leftBottom={`${value.noTelp}`}
                      right={``}
                      image={`${value.image}`}
                      className="mt-3 shadow-sm"
                    />
                  </div>
                ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </Layout>
  );
}

export default PrivateRoute(Transfer);
