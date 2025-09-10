import React from 'react';

const TextWrapper = () => {
    return (
        <div className="mt-8 md:mt-0 "> {/* Add margin-top for smaller screens */}
            <div className="text-base col-lg-7 bg-white p-6 rounded-xl shadow-lg">

                <p className="text-3xl md:text-3xl font-semibold text-sky-600">
                    Who are We ?
                </p>

                <p className="mt-3">Enactus <b>MNNIT Allahabad</b>, established in 2016, is an organization, consisting of a group of dedicated and driven students who share the mutual aim of creating a better and more sustainable world and seek to uplift the communities through entrepreneurial action.</p>

                <p className="mt-3">Since its inception, Enactus Allahabad has seeked to bring formidable changes in the society and has worked on the following projects: <b>Neer, Samvesh, Moonj and Sahyog</b>. Our initiatives have the enabled the betterment of thousands of lives and created 182 entrepreneurs through sustainable business models.</p>

                <p className="mt-3">
                    Change isn't just a mindset, it is a culmination of our efforts &amp; actions and we, at Enactus Allahabad, stand firm with this belief. Because, we choose to be the changemakers!
                </p>

                <h3 className="title mt-4 font-bold italic text-gray-600">"For the community, by the community."</h3>

            </div>
        </div>
    );
};

export default TextWrapper;
