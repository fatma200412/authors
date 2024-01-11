import Navbar from "@/app/layout/navbar/page";
import React from "react";
import { getData } from "../page";

interface Props {
  params: {
    id: string;
  };
}

const AuthorDetails = ({ params }: Props) => {
  // const paths = getData();
  console.log(params.id);
  console.log();
  return (
    <>
      <Navbar />
      <h1 className="mt-20 font-bold text-center text-3xl mb-5">
        Add Authors Details
      </h1>
    </>
  );
};

export default AuthorDetails;
