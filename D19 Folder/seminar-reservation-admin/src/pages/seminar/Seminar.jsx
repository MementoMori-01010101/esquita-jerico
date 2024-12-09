import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteSeminar from "./DeleteSeminar";

const Seminar = () => {
  const [seminars, setSeminars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, SetError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate(); // useNavigate hook

  const fetchSeminar = async () => {
    setIsLoading(true);

    const response = await fetch("http://localhost:5000/api/seminars");

    const data = await response.json();

    setSeminars(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSeminar();
  }, []);

  const fields = ["Speaker", "Title", "Available Slot"];

  const formattedName = (value) => {
    const name = value.split(",").map((x) => x.trim());
    const firstName = name[1] || "";
    const lastName = name[0] || "";

    return `${firstName} ${lastName}`;
  };

  const handleDelete = async () => {
    if (selectedItem) {
      setShowModal(false);
      setIsLoading(true);

      const auth = JSON.parse(localStorage.getItem("auth"));

      const response = await fetch(
        `http://localhost:5000/api/seminars/${selectedItem}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

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
      fetchSeminar();
    }
  };

  return (
    <div>
      <div className="px-10 py-10">
        <div className="navbar">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Seminars</h1>
          </div>
          <div className="flex-none">
            <button
              className="btn btn-info text-white"
              onClick={() => navigate("/seminars/new")}
            >
              Add New Seminar
            </button>
          </div>
        </div>
        <div className="mt-10">
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
          {isLoading ? (
            <div className="flex items-center justify-center h-[50vh]">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          ) : (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  {/* <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th> */}
                  {fields.map((field, index) => (
                    <th key={index}>{field}</th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {seminars.map((seminar, index) => (
                  <tr key={seminar._id}>
                    {/* <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th> */}

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={`https://img.daisyui.com/images/profile/demo/${
                                index + 1
                              }@94.webp`}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {formattedName(seminar.speaker.name)}
                          </div>
                          {/* <div className="text-sm opacity-50">LinkedIn</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      {seminar.title}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {seminar.description}
                      </span>
                    </td>
                    <td>{seminar.slotsAvailable}</td>
                    <th>
                      {/* <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => navigate(`/seminars/${seminar._id}`)}
                      >
                        details
                      </button> */}
                      <div className="dropdown dropdown-left">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn btn-ghost btn-xs"
                        >
                          Actions
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                        >
                          <li>
                            <a
                              onClick={() =>
                                navigate(`/seminars/${seminar._id}`)
                              }
                            >
                              View
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() =>
                                navigate(`/seminars/${seminar._id}/edit`)
                              }
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => {
                                setShowModal(true);
                                setSelectedItem(seminar._id);
                              }}
                            >
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  {/* <th></th> */}

                  {fields.map((field, index) => (
                    <th key={index}>{field}</th>
                  ))}

                  <th></th>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
      <DeleteSeminar
        handleDelete={handleDelete}
        handleModal={setShowModal}
        showModal={showModal}
      />
    </div>
  );
};

export default Seminar;
