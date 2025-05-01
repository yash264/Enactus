import React from "react";
import { useNavigate } from "react-router-dom";
import Member1 from "../../assets/Teams/TeamMembers/ContentTeam/ShreyanshSingh.jpg";
import Member29 from  "../../assets/Teams/TeamMembers/FieldOfficer/Aditya.jpeg";
import Member9 from "../../assets/Teams/TeamMembers/WebTeam/Utkarsh.jpg";


export default function TeamCard() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/team");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 m-6 lg:grid-cols-3 lg:gap-8">
        <div className="rounded bg-gray-300">
          <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">

            <img
              src={Member1}
              alt="team"
              className="w-full h-64 object-cover rounded-xl"
            />

            <div className="bg-white p-4 sm:p-6 text-center">

              <button onClick={handleNavigation}>
                <h3 className="mt-0.5 text-lg">
                  Shreyansh Singh
                </h3>
              </button>

            </div>
          </article>
        </div>

        <div className="rounded bg-gray-300">
          <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">

            <img
              src={Member29}
              alt="team"
              className="w-full h-64 object-cover rounded-xl"
            />

            <div className="bg-white p-4 sm:p-6 text-center">

              <button onClick={handleNavigation}>
                <h3 className="mt-0.5 text-lg text-gray-900">
                  Aditya Roysha
                </h3>
              </button>

            </div>
          </article>
        </div>

        <div className="rounded bg-gray-300">
          <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">

            <img
              src={Member9}
              alt="team"
              className="w-full h-64 object-cover rounded-xl"
            />

            <div className="bg-white p-4 sm:p-6 text-center">

              <button onClick={handleNavigation}>
                <h3 className="mt-0.5 text-lg text-gray-900">
                  Utkarsh Sharma
                </h3>
              </button>

            </div>
          </article>
        </div>
      </div>
    </>
  );
}

