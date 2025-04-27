import React from 'react';
import TextWrapper from '../components/About/TextWrapper';

const AboutUs = () => {

  const backgroundStyle = {
    backgroundImage: "url('https://www.enactusaustralia.org.au/wp-content/uploads/2023/08/SDG-Enactus-687x686-dcbade2.png')",
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundAttachment: "fixed",
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden pt-6 md:pt-16 lg:pt-20" >
    
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-3">
          Know About Us !!
        </h1>
        <p className="text-xl md:text-base text-zinc-700 italic">
          A little more about Enactus Allahabad
        </p>
      </div>

      <div className=' bg-center bg-contain bg-no-repeat' style={backgroundStyle} >
        <div className="flex flex-col md:flex-row items-center justify-center ">

          <div className="pl-8 p-4 md:w-1/2 flex justify-center " > {/* Remove mb-8 */}
            <p className="text-sm leading-relaxed mt-8" > {/* Add mt-8 class */}
              <TextWrapper />
            </p>
          </div>

          <div className="md:w-1/2 pt-40 pb-40 md:mt-0 flex justify-center " >

            <iframe className="elementor-video " frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Enactus Impact" width="480" height="260" src="https://www.youtube.com/embed/1U3zF6ll27E?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fenactus.org&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-6="true" ></iframe>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
