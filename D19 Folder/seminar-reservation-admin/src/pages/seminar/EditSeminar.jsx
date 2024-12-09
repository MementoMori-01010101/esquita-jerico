import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SeminarForm from "../../components/SeminarForm";
import _ from "lodash";
import { format } from "date-fns";

const EditSeminar = () => {
  const navigate = useNavigate(); // useNavigate hook
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(null);

  const { id } = useParams();

  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchSeminar = async () => {
      setIsLoading(true);

      const response = await fetch(`http://localhost:5000/api/seminars/${id}`);

      const data = await response.json();

      const address = _.get(data, "venue", "")
        .split(",")
        .map((x) => x.trim());

      const street = address[0] || "";
      const city = address[1] || "";
      const region = address[2] || "";
      const postal = address[3] || null;

      const name = _.get(data, "speaker.name", "")
        .split(",")
        .map((x) => x.trim());
      const firstName = name[1] || "";
      const lastName = name[0] || "";

      const formattedDate = format(
        new Date(_.get(data, "date", null)),
        "yyyy-MM-dd"
      );

      const initForm = {
        title: _.get(data, "title", ""),
        description: _.get(data, "description", ""),
        date: formattedDate,
        timeFrame: {
          from: _.get(data, "timeFrame.from", null),
          to: _.get(data, "timeFrame.to", null),
        },
        venue: {
          street: street,
          city: city,
          region: region,
          postal: postal,
        },
        speaker: {
          firstName: firstName,
          lastName: lastName,
          image: _.get(data, "speaker.image", null),
          linkedin: _.get(data, "speaker.linkedin", null),
        },
        fee: _.get(data, "fee", 0),
        slotsAvailable: _.get(data, "slotsAvailable", 0),
      };

      setForm(initForm);
      setIsLoading(false);
    };

    fetchSeminar();
  }, [id]);

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

    const response = await fetch(`http://localhost:5000/api/seminars/${id}`, {
      method: "PUT",
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

      SetError(data.error || "Create Seminar failed.");
      setIsLoading(false);
      throw new Error(data.error || "Create Seminar failed.");
    }

    setIsLoading(false);

    navigate("/seminars");
  };

  return (
    <div>
      <div className="px-10 py-10">
        <h1 className="text-3xl font-bold mb-5"> Edit Seminar</h1>
        {error && (
          <div role="alert" className="alert alert-error mb-5">
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
        {isLoading || !form ? (
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

export default EditSeminar;
