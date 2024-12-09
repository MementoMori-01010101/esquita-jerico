import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SeminarDetail from "../../components/SeminarDetail";
import _ from "lodash";
import { format } from "date-fns";

const ViewSeminar = () => {
  const navigate = useNavigate(); // useNavigate hook
  const [seminar, setSeminar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

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
        "MMMM dd, yyyy"
      );

      const formattedTime = (time) =>
        format(`${formattedDate} ${time}`, "hh:mm aa");

      const formattedSeminar = {
        ...data,
        timeFrame: {
          from: formattedTime(_.get(data, "timeFrame.from", null)),
          to: formattedTime(_.get(data, "timeFrame.to", null)),
        },
        date: formattedDate,
        speaker: {
          name: `${firstName} ${lastName}`,
          image: _.get(data, "speaker.image", null),
          linkedin: _.get(data, "speaker.linkedin", ""),
        },
        venue: {
          city: city,
          street: street,
          region: region,
          postal: postal,
        },
      };

      setSeminar(formattedSeminar);
      setIsLoading(false);
    };

    fetchSeminar();
  }, [id]);

  return (
    <div className="px-10 py-10">
      <h1 className="text-3xl font-bold mb-5">Seminar Details</h1>
      {isLoading || !seminar ? (
        <div className="flex items-center justify-center h-[50vh]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <SeminarDetail
          seminar={seminar}
          handleCancel={() => navigate("/seminars")}
          handleEdit={() => navigate(`/seminars/${id}/edit`)}
        />
      )}
    </div>
  );
};

export default ViewSeminar;
