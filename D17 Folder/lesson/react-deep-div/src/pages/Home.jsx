import React from "react";
import { MdWavingHand } from "react-icons/md";

const Home = () => {
  return (
    <div className="container my-5">
      <h1>
        Hi! <MdWavingHand />
      </h1>
      <div className="row my-5">
        <div className="col-6">
          <h2>Welcome to Company A!</h2>
          <p className="mt-3">
            We're thrilled to have you here. Whether you're a new customer,
            partner, or team member, we’re excited to collaborate, innovate, and
            achieve great things together. If you have any questions or need
            assistance, don’t hesitate to reach out – we’re here to help!
          </p>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Home;
