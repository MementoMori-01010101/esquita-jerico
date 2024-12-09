import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SeminarForm from "../../components/SeminarForm";
import _ from "lodash";

const AddSeminar = () => {
  const navigate = useNavigate(); // useNavigate hook
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(null);

  const initForm = {
    title: "",
    description: "",
    date: null,
    timeFrame: {
      from: null,
      to: null,
    },
    venue: {
      street: "",
      city: "",
      region: "",
      postal: null,
    },
    speaker: {
      firstName: "",
      lastName: "",
      image: null,
      linkedin: null,
    },
    fee: 0,
    slotsAvailable: 0,
  };

  const [form, setForm] = useState(initForm);

  const handleForm = (field, value) => {
    const newData = _.set(form, field, value);

    setForm({ ...form, ...newData });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      title: form.title,
      description: form.description,
      date: form.date,
      timeFrame: {
        from: form.timeFrame.from,
        to: form.timeFrame.to,
      },
      venue: `${form.venue.street}, ${form.venue.city}, ${form.venue.region}, ${form.venue.postal}`,
      speaker: {
        name: `${form.speaker.lastName}, ${form.speaker.firstName}`,
        image: form.speaker.image,
        linkedin: form.linkedin,
      },
      fee: Number(form.fee),
      slotsAvailable: Number(form.slotsAvailable),
    };

    const auth = JSON.parse(localStorage.getItem("auth"));

    const response = await fetch("http://localhost:5000/api/seminars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status == 401) {
        navigate("/login");
      }

      SetError(data.error);
      setIsLoading(false);
      throw new Error(data.error || "Create Seminar failed.");
    }

    setIsLoading(false);

    navigate("/seminars");
  };

  return (
    <div>
      <div className="px-10 py-10">
        <h1 className="text-3xl font-bold mb-5"> Add New Seminar</h1>
        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
        {isLoading ? (
          <div className="flex items-center justify-center h-[50vh]">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <SeminarForm
            form={form}
            handleCancel={() => navigate("/seminars")}
            handleSubmit={handleSubmit}
            handleForm={handleForm}
          />
        )}
      </div>
    </div>
  );
};

export default AddSeminar;
