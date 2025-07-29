import Footer from "../components/footer";
import Navbar from "../components/navbar";

import ARC6014Photo from "../assets/ARC_Logo_Projects_Logo/ARC6014 Team Photo.webp";

import YoutubeLogo from "../assets/Social_Media_Logos/Youtube Logo.webp";
import InstagramLogo from "../assets/Social_Media_Logos/Instagram Logo.webp";
import GithubLogo from "../assets/Social_Media_Logos/Github Logo.webp";
import LinkedInLogo from "../assets/Social_Media_Logos/LinkedIn Logo.webp";

import RPL1 from "../assets/Robots_Passion_Love/RPL1.webp";
import RPL2 from "../assets/Robots_Passion_Love/RPL2.webp";
import RPL3 from "../assets/Robots_Passion_Love/RPL3.webp";
import RPL4 from "../assets/Robots_Passion_Love/RPL4.webp";
import RPL5 from "../assets/Robots_Passion_Love/RPL5.webp";
import RPL6 from "../assets/Robots_Passion_Love/RPL6.webp";
import RPL7 from "../assets/Robots_Passion_Love/RPL7.webp";

import AnatolianSlide from "../assets/Other_Images/Anatolian First Movement Slide Photo.webp";
import KızlarınSlide from "../assets/Other_Images/Kızların da Yeri Var Slide Photo.webp";
import IncluvisitySlide from "../assets/Other_Images/Inclusivity Slide Photo.webp";
import BoardGamesSlide from "../assets/ARC_Logo_Projects_Logo/Arcopolis.webp";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = 'ARC#6014 - Home';
  }, []);

  const responsiveComponent = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow flex-col items-center text-center lg:mt-[9%] mt-[20%]">
        <div>
          <p className="md:text-6xl text-2xl">
            <b>ARC#6014</b>
          </p>
        </div>
        <img className="md:w-[50%] w-[70%] h-auto rounded-lg mt-[1%]" loading="lazy" src={ARC6014Photo}/>
        <div className="flex flex-col items-center text-center mt-[1%]">
          <p className="md:w-[60%] w-[80%] md:text-xl text-xs">
            The <b>FIRST</b> Robotics Competition (FRC) team of Robert College is based in Istanbul, Turkey. The team is an active participant of FIRST programs since <b>2016</b>.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center md:gap-[5%] gap-[7%] md:mt-[4%] mt-[6%]">
        <a
          className="md:w-[7%] w-[13%] h-auto cursor-pointer"
          href="https://www.youtube.com/channel/UC0w6fZ6B1JiBYtjDN0xNdLQ"
          target="_blank"
        >
          <img src={YoutubeLogo} alt="Youtube Page" />
        </a>
        <a
          className="md:w-[5%] w-[9%] h-auto cursor-pointer"
          href="https://www.instagram.com/arc6014/"
          target="_blank"
        >
          <img src={InstagramLogo} alt="Instagram Page" />
        </a>
        <a
          className="md:w-[5%] w-[9%] h-auto cursor-pointer"
          href="https://www.linkedin.com/company/arc-robotics-club/mycompany/"
          target="_blank"
        >
          <img src={LinkedInLogo} alt="LinkedIn Page" />
        </a>
        <a
          className="md:w-[5%] w-[9%] h-auto cursor-pointer"
          href="https://github.com/ARC6014"
          target="_blank"
        >
          <img src={GithubLogo} alt="Github Page" />
        </a>
      </div>
      <div className="flex flex-col items-center text-center md:mt-[4%] mt-[6%]">
        <b className="md:w-[60%] w-[80%] md:text-3xl text-base">
          Robots. Passion. Love.
        </b>
        <p className="md:w-[60%] w-[80%] md:text-lg text-xs mt-[1%]">
          We truly enjoy building robots! Our team competed in Istanbul and Bosphorus Regional Events for the 2024 FRC season.
        </p>
      </div>
      <div className="flex justify-center w-full mt-[1%]">
        <div className="w-[80%] mr-[1%]">
          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 3, 900: 3}}
            >
              <Masonry>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={RPL1}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={RPL2}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={RPL3}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={RPL4}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={RPL5}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={RPL6}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={RPL7}/>
                </div>
              </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[90%] md:mt-[4%] mt-[6%] mb-0 border-solid border-[1px] border-black"/>
      </div>
      <div className="flex flex-col items-center text-center md:mt-[4%] mt-[6%]">
        <b className="md:w-[60%] w-[80%] md:text-3xl text-lg">
          "More than robots"
        </b>
        <p className="md:w-[60%] w-[80%] md:text-lg text-xs mt-[1%]">
          Inspired from the motto of FIRST, ARC is deeply involved in projects to spread STEM all over Turkey and beyond. The team's projects cover a broad area including sustainable development, education, and arts.
        </p>
      </div>
      <div className="flex justify-center w-full md:mt-[4%] mt-[6%] lg:pb-[5%] pb-[20%]">
        <div className="w-[70%]">
          <Carousel responsive={responsiveComponent} infinite>
            <div className="flex justify-center items-center">
              <div className="text-center w-[70%]">
                <p className="md:text-3xl text-base mb-[0.5%]"><b>Anatolian First Movement</b></p>
                <p className="md:text-base text-xs mb-[2%]">17 cities, 37 schools, and over 3700 students</p>
                <img className="rounded-2xl"  loading="lazy" src={AnatolianSlide}/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center w-[60%]">
                <p className="md:text-3xl text-base mb-[0.5%]"><b>Kızların da Yeri Var</b></p>
                <p className="md:text-base text-xs mb-[2%]">Gender equality awarness</p>
                <img className="rounded-2xl" loading="lazy" src={KızlarınSlide}/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center w-[70%]">
                <p className="md:text-3xl text-base mb-[0.5%]"><b>FRC For Inclusitivity</b></p>
                <p className="md:text-base text-xs mb-[2%]">Making FRC accessible for all through sign language training and audio books</p>
                <img className="rounded-2xl" loading="lazy" src={IncluvisitySlide}/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center w-[60%]">
                <p className="md:text-3xl text-base mb-[2%]"><b>Books, board games, and more!</b></p>
                <img className="rounded-2xl" loading="lazy" src={BoardGamesSlide}/>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
