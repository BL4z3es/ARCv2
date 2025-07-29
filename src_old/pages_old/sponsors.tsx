import Footer from "../components/footer";
import Navbar from "../components/navbar";

import Boeing from "../assets/Sponsor_Logos/Boeing Logo.webp";
import ThreeM from "../assets/Sponsor_Logos/ThreeM Logo.webp";
import MetaTech from "../assets/Sponsor_Logos/MetaTech Logo.webp";
import Dow from "../assets/Sponsor_Logos/Dow Logo.webp";
import Temsa from "../assets/Sponsor_Logos/Temsa Logo.webp";
import Enda from "../assets/Sponsor_Logos/Enda Sistem Logo.webp";
import Integral from "../assets/Sponsor_Logos/Integral Logo.webp";
import Tersan from "../assets/Sponsor_Logos/Tersan Logo.webp";
import Turcom from "../assets/Sponsor_Logos/Turcom Logo.webp";
import TurkiyeFinans from "../assets/Sponsor_Logos/Turkiye Finans Logo.webp";

import { useEffect } from 'react';

function Sponsors() {
  useEffect(() => {
    document.title = 'ARC#6014 - Sponsors';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex flex-grow flex-col items-center text-center lg:mt-[9%] mt-[20%]">
          <b className="md:w-[60%] w-[80%] md:text-4xl text-xl">
            Our Sponsors
          </b>
          <p className="md:w-[60%] w-[80%] md:text-2xl text-sm mt-[1%]">
            As the Robert College Robotics Team ARC, we actively participate in the FRC (FIRST Robotics Competition), a high school-level robotics competition organized by the FIRST Foundation. Each year, we consistently achieve successes in Off-Season and regional competitions. Throughout the season, we dedicate our time to constructing our robot and engaging in projects that revolve around STEAM, education, and many more subjects. With the support of our sponsors, we can bring our projects to life and, with the right funding, to the next level.
          </p>
          <p className="md:w-[60%] w-[80%] md:text-2xl text-sm mt-[1%]">
            Thank you for your generous support!
          </p>
        </div>
        <div className="flex justify-center items-center md:mt-[4%] mt-[6%] lg:pb-[5%] pb-[20%]">
          <div className="grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:gap-5 gap-2 justify-items-center w-[80%]">
            <div className="flex items-center cursor-pointer object-cover">
              <a href="https://www.turkiyefinans.com.tr/tr-tr/Sayfalar/default.aspx" target="_blank"><img loading="lazy" className="rounded-2xl" src={TurkiyeFinans}/></a>
            </div>
            <div className="flex items-center cursor-pointer object-cover">
              <a href="https://www.turcom.com.tr/" target="_blank"><img loading="lazy" src={Turcom}/></a>
            </div>
            <div className="flex items-center cursor-pointer object-cover">
              <a href="https://tersanshipyard.com/en/" target="_blank"><img loading="lazy" src={Tersan}/></a>
            </div>
            <div className="flex items-center cursor-pointer object-cover">
              <a href="https://integralteknoloji.com/" target="_blank"><img loading="lazy" src={Integral}/></a>
            </div>
            <div className="flex items-center cursor-pointer object-cover">
              <a href="https://www.endasistem.com/" target="_blank"><img loading="lazy" src={Enda}/></a>
            </div>
            <div className="flex items-center cursor-pointer object-cover">
              <a href="https://www.temsa.com/tr/tr" target="_blank"><img loading="lazy" src={Temsa}/></a>
            </div>
            <div className="flex items-center cursor-pointer object-cover">
              <a href="https://www.dow.com/en-us" target="_blank"><img loading="lazy" src={Dow}/></a>
            </div>
            <div className="flex items-center cursor-pointer object-cover">
              <a href="https://www.boeing.com/" target="_blank"><img loading="lazy" src={Boeing}/></a>
            </div>
            <div className="flex items-center cursor-pointer object-cover">
              <a href="https://www.3m.com/" target="_blank"><img loading="lazy" src={ThreeM}/></a>            
            </div>
            <div className="flex items-center cursor-pointer object-cover">
              <a href="https://store.metatechtr.com/" target="_blank"><img loading="lazy" src={MetaTech}/></a>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Sponsors;
