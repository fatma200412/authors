import Navbar from "@/app/layout/navbar/page";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Navbar />
      <h1 className="mt-20 text-center text-5xl">This is Home Page</h1>
    </>
  );
};

export default Home;
