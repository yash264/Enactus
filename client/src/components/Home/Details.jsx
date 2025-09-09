import React from "react";
import { useNavigate } from "react-router-dom";
import img4 from "../../assets/Home/img4.jpg";

export default function Details() {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/ecart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">

            <div className="h-full flex justify-center items-center">

              <img
                src={img4}
                alt="product"
                className="w-full h-full object-cover rounded-xl"
              />

            </div>

            <div>
              <div className="max-w-4xl mx-auto px-6 text-center">

                <strong className="text-2xl text-indigo-600"> BUY PRODUCTS </strong>

                <p className="m-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                  At Enactus MNNIT, we aim at benefitting the society by combining technology with innovative ideas and enterpreneurial actions. Our team in NIT Allahabad is currently working on various projects.
                </p>

                <button
                  className="inline-block rounded-xl border border-rose-500 bg-rose-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-rose-600"
                  onClick={handleNavigation}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
