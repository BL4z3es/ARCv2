import Footer from "../components/footer";
import Navbar from "../components/navbar";

import ASB from "../assets/Other_Images/Download On App Store Button.webp"
import ADB from "../assets/Other_Images/Android Download Button.webp"

import AMM1 from "../assets/Anatolian_Maker_Movement_Photos/AMM1.webp"
import AMM2 from "../assets/Anatolian_Maker_Movement_Photos/AMM2.webp"
import AMM3 from "../assets/Anatolian_Maker_Movement_Photos/AMM3.webp"
import AMM4 from "../assets/Anatolian_Maker_Movement_Photos/AMM4.webp"
import AMM5 from "../assets/Anatolian_Maker_Movement_Photos/AMM5.webp"
import AMM6 from "../assets/Anatolian_Maker_Movement_Photos/AMM6.webp"
import AMM7 from "../assets/Anatolian_Maker_Movement_Photos/AMM7.webp"
import AMM8 from "../assets/Anatolian_Maker_Movement_Photos/AMM8.webp"

import OG1 from "../assets/Our_Games_Photos/OG1.webp"
import OG3 from "../assets/Our_Games_Photos/OG3.webp"
import OG4 from "../assets/Our_Games_Photos/OG4.webp"

import DragonScout from "../assets/ARC_Logo_Projects_Logo/Dragon Scout Logo.webp";
import Arcopolis from "../assets/ARC_Logo_Projects_Logo/Arcopolis.webp";
import ArcinatorLogo from "../assets/ARC_Logo_Projects_Logo/Arcinator Logo.webp";
import AquarcLogo from "../assets/ARC_Logo_Projects_Logo/AquARC Logo.png";


import SmallRobotCover from "../assets/Book_Covers/Small Robot's Big Ideas' Cover.webp";
import BasitMakinelerCover from "../assets/Book_Covers/Basit Makinelerin Prensesi Cover.webp";
import UykusuzPrensesCover from "../assets/Book_Covers/Uykusuz Prenses Makinelerin Uzmanı Cover.webp";
import PamukPrensesCover from "../assets/Book_Covers/Pamuk Prenses ve Yedi Cüceler Cover.webp";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useEffect } from 'react';

function Projects() {
  useEffect(() => {
    document.title = 'ARC#6014 - Projects';
  }, []);

  const responsiveComponent = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex flex-grow justify-center lg:mt-[9%] mt-[20%]">
          <div className="flex md:flex-row flex-col items-center md:w-[80%] w-full">
            <div className="flex flex-col md:w-[60%] w-[80%] mr-[5%] ml-[5%] text-center"> 
              <div><p className="md:text-3xl text-base"><b>ARCINATOR</b></p></div>
              <div><p className="md:text-lg text-xs text-[10px] mt-[1%]">First universally accessible and free Chatbot for FRC! You can ask questions about the 2024 Game Manual in over 150 languages, get information about any FRC team, and access the Official FIRST Documentation. It is also accompanied by Song and Artwork of the day!</p></div>
              <div className="mt-[1%]">
                <a href="https://chat.arc6014.com/" target="_blank">
                  <button className="bg-[#D76198] text-white hover:opacity-80 active:opacity-60 
                    pr-4 pl-4 pt-1 pb-1 md:pr-6 md:pl-6 md:pt-2 md:pb-2 rounded-lg text-xs md:text-lg mt-[1%] md:mb-0 mb-[2%]">
                    Check It Out
                  </button>
                </a>
              </div>
            </div>
            <div className="md:w-[30%] w-[40%] md:mt-0 mt-[1%]">
              <img className="rounded-2xl" loading="lazy" src={ArcinatorLogo}/>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:mt-[4%] mt-[6%]">
          <div className="flex md:flex-row flex-col items-center md:w-[80%] w-full">
            <div className="flex flex-col md:w-[60%] w-[80%] mr-[5%] ml-[5%] text-center"> 
              <div>
                <p className="md:text-3xl text-base"><b>DragonScout</b></p>
              </div>
              <div>
                <p className="md:text-lg text-xs text-[10px] mt-[1%]">
                  Our scouting app DragonScout is now available for use for free!
                </p>
              </div>
              <div className="flex justify-center mt-[2%]">
                <div className="flex flex-row items-center gap-4">
                  <a className="flex items-center" target="_blank" href="https://apps.apple.com/tr/app/dragonscout/id6579583259">
                    <button className="md:w-44 w-24">
                      <img src={ASB} />
                    </button>
                  </a>
                  <a className="flex items-center" target="_blank" href="https://github.com/ARC6014/DragonScout-Issue-Board/releases">
                    <button className="md:w-44 w-24">
                      <img src={ADB} />
                    </button>
                  </a>
                  <a className="flex items-center" href="https://ds.arc6014.com/" target="_blank">
                    <button className="md:w-40 w-24 md:h-12 h-8 bg-[#D76198] text-white hover:opacity-80 active:opacity-60 rounded-lg text-xs md:text-lg">
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] w-[40%] md:mt-0 mt-[4%]">
              <img className="rounded-2xl" loading="lazy" src={DragonScout} />
            </div>
          </div>
        </div>
        <div className="flex flex-grow justify-center md:mt-[4%] mt-[6%]">
          <div className="flex md:flex-row flex-col items-center md:w-[80%] w-full">
            <div className="flex flex-col md:w-[60%] w-[80%] mr-[5%] ml-[5%] text-center"> 
              <div><p className="md:text-3xl text-base"><b>AquARC</b></p></div>
              <div><p className="md:text-lg text-xs text-[10px] mt-[1%]">As AquARC, we advocate for the indispensable role of water in human life and the belief that access to clean water is a fundamental human right. Our project was launched to test water quality, compare results across cities and districts, and raise awareness by sharing this data with the community.</p></div>
              <div className="mt-[1%]">
                <a href="https://aquarc.arc6014.com" target="_blank">
                  <button className="bg-[#D76198] text-white hover:opacity-80 active:opacity-60 
                    pr-4 pl-4 pt-1 pb-1 md:pr-6 md:pl-6 md:pt-2 md:pb-2 rounded-lg text-xs md:text-lg mt-[1%] md:mb-0 mb-[2%]">
                    Check It Out
                  </button>
                </a>
              </div>
            </div>
            <div className="md:w-[30%] w-[40%] h-[100%] md:mt-0 mt-[1%] flex justify-center items-center">
              <img className="rounded-2xl w-[50%] md:w-[60]" loading="lazy" src={AquarcLogo}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:mt-[4%] mt-[6%]">
          <b className="md:w-[60%] w-[80%] md:text-3xl text-lg">
            Anatolian Maker Movement
          </b>
          <p className="md:w-[60%] w-[80%] md:text-lg text-xs mt-[1%]">To reach out to Anatolia, we started the Anatolian Maker Movement (AMM) 4 years ago, visiting schools in 20 cities including Eskisehir, Mersin, Kars, Edirne, & Balikesir, reaching 3870 kids. In our projects, we provide Scratch, coding, & game design education to kids, and assist them to learn about STEM through the informative games that we created. While they have fun playing these games, they also learn about influential scientists, engineering tools, and robotics terminology in an effective way. So far, 400 children in 4 different projects have learned from these games, & they are all donated to each school we visit.</p>
        </div>
        <div className="flex justify-center w-full mt-[1%]">
          <div className="w-[80%] mr-[1%]">
            <ResponsiveMasonry
                  columnsCountBreakPoints={{350: 2, 900: 3}}
              >
                <Masonry>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={AMM1}/>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={AMM2}/>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={AMM3}/>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={AMM4}/>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={AMM5}/>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={AMM6}/>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={AMM7}/>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={AMM8}/>
                  </div>
                </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
        <div className="flex justify-center md:mt-[4%] mt-[6%]">
          <div className="flex md:flex-row flex-col items-center md:w-[80%] w-full">
            <div className="flex flex-col md:w-[70%] w-[80%] mr-[5%] text-center">
              <div><p className="md:text-3xl text-base]"><b>Arcopolis</b></p></div>
              <div><p className="md:text-lg text-xs mt-[1%]">Arcopolis is the first game we have designed and produced. This board game’s purpose is to teach children about engineering through fun facts, pictures, and terminology. The game involves questions about inventions, engineering and science in order to influence and motivate children through a fun challenge. We integrated Arcopolis to our 4-year-old Anatolian Maker Movement project, making it even more fun and effective, using it to inspire little children in rural areas.</p></div>
            </div>
            <div className="w-[40%] mt-[1%]">
              <img className="rounded-2xl" src={Arcopolis}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:mt-[4%] mt-[6%]">
          <b className="md:w-[60%] w-[80%] md:text-3xl text-base">
            Our Games
          </b>
          <p className="md:w-[60%] w-[80%] md:text-lg text-xs mt-[1%]">Motivated by the great impact of our game Arcopolis, we designed and produced another game: Arcards, our own “Top Trumps Card Game” about important scientific figures and their characteristics. The cards also include biographies of the scientists and have been very useful in informing children through a little bit of competition and a lot of fun during the Anatolian Maker Movement projects.</p>
        </div>
        <div className="flex justify-center w-full mt-[1%]">
          <div className="w-[80%] mr-[1%]">
            <ResponsiveMasonry
                  columnsCountBreakPoints={{900: 3}}
              >
                <Masonry>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] lg:p-[3%] p-0" loading="lazy" src={OG1}/>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] lg:p-[3%] p-0" loading="lazy" src={OG3}/>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] lg:p-[3%] p-0" loading="lazy" src={OG4}/>
                  </div>
                </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:mt-[4%] mt-[6%]">
          <b className="md:w-[60%] w-[80%] md:text-3xl text-base">
            Our Books
          </b>
        </div>
        <div className="flex justify-center w-full mt-[1%] lg:pb-[5%] pb-[20%]">
          <div className="w-[70%]">
            <Carousel responsive={responsiveComponent} infinite>
              <div className="flex justify-center items-center">
                <a className="flex justify-center" target="_blank" href="https://drive.google.com/file/d/17tzV49mAHZjZiAZqiGCWgKLV5kmzFPy1/view">
                  <div className="text-center w-[80%] cursor-pointer">
                    <img className="rounded-2xl" loading="lazy" src={SmallRobotCover}/>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a className="flex justify-center" target="_blank" href="https://drive.google.com/file/d/1qiWXtdli0hmnKXViZOmmpL8bg3vTDYbn/view">
                  <div className="text-center w-[80%] cursor-pointer">
                    <img className="rounded-2xl" loading="lazy" src={BasitMakinelerCover}/>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a className="flex justify-center" target="_blank" href="https://drive.google.com/file/d/1WT8ancHby47UgPiuxzheIuzynGqeoLOg/view">
                  <div className="text-center w-[80%] cursor-pointer">
                    <img className="rounded-2xl" loading="lazy" src={UykusuzPrensesCover}/>
                  </div>
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a className="flex justify-center" target="_blank" href="https://drive.google.com/file/d/1qfQO-zZWbvXPmBOpDeW1yqhrX_71zF9P/view">
                  <div className="text-center w-[80%] cursor-pointer">
                    <img className="rounded-2xl" loading="lazy" src={PamukPrensesCover}/>
                  </div>
                </a>
              </div>
            </Carousel>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Projects;
