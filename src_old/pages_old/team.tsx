import Footer from "../components/footer";
import Navbar from "../components/navbar";

import OR1 from "../assets/Our_Robots/OR1.webp"
import OR2 from "../assets/Our_Robots/OR2.webp"
import OR3 from "../assets/Our_Robots/OR3.webp"
import OR4 from "../assets/Our_Robots/OR4.webp"
import OR5 from "../assets/Our_Robots/OR5.webp"
import OR6 from "../assets/Our_Robots/OR6.webp"
import OR7 from "../assets/Our_Robots/OR7.webp"
import OR8 from "../assets/Our_Robots/OR8.webp"
import OR9 from "../assets/Our_Robots/OR9.webp"
import OR10 from "../assets/Our_Robots/OR10.webp"
import OR11 from "../assets/Our_Robots/OR11.webp"

import RobertLogo from "../assets/Other_Images/Robert College Photo.webp"
import FirstPhoto from "../assets/Other_Images/FIRST Photo.webp"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useEffect } from 'react';

function Team() {
  useEffect(() => {
    document.title = 'ARC#6014 - Team';
  }, []);

  const mentors = {
    "Serap Yatağanbaba": "Head of Mathematics Department",
    "Kaan Tamer Yenideniz": "FIRST Alum",
    "Bora Kaymakçıoğlu": "FIRST Alum"
  };

  const teamMembers = {
    "Kaan Akan": "Team Captain",
    "Kerem Sancak": "Vice Captain",
    "Tuna Çakır": "Mechanics Lead",
    "Alp Yörük": "Member, Mechanics",
    "Beril Tokatlıoğlu": "Member, Mechanics",
    "Can Nalbantoğlu": "Member, Mechanics",
    "Eren Ersoy": "Member, Mechanics",
    "Hasan Mert Özarslan": "Member, Mechanics",
    "Yusuf Onat Tali": "Member, Mechanics",
    "Bartu Bakır": "Member, Mechanics",
    "Demir Yaparel": "Member, Mechanics",
    "Deniz Eren Mecit": "Member, Mechanics",
    "Ömer Yamak": "Member, Mechanics",
    "Tolga Tanrıbuyruğu": "Member, Mechanics",
    "Ulaş Ada Gözükeleş": "Member, Mechanics",
    "Can Toğran": "Programming Lead",
    "Ece Yurtseven": "Member, Programming",
    "Eren Kural": "Member, Programming",
    "Mehmet Reşat Halıcı": "Member, Programming",
    "Batuhan Mermer": "Member, Programming",
    "Efe Gönen": "Member, Programming",
    "Yusuf Ege Doğan": "Member, Programming",
    "Alya Kurt": "Electronics Lead",
    "Çağlar Ayyıldız": "Member, Electronics",
    "Efe Can Ünal": "Member, Electronics",
    "Defne Arslan": "Member, Electronics",
    "Aykun Antranik Nersesyan": "Member, Electronics",
    "Defne Kurt": "Public Relations Lead",
    "Eda Kaya": "Head of Outreach, Public Relations",
    "Kayra Berrak Akkaynak": "Media Manager, Public Relations",
    "Lara Özbal": "Member, Public Relations",
    "Melis Kekeç": "Product Manager, Public Relations",
    "Can Oğuz": "Member, Public Relations",
    "Elif Gökboyun": "Member, Public Relations",
    "Cemre Deren Kangallı": "Product Designer, Public Relations",
    "Ekin Ercihan": "Member, Public Relations",
    "Alisa Zeynep Eskiocak": "Member, Public Relations"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex flex-grow items-center justify-center lg:mt-[9%] mt-[20%]">
        <div className="flex md:flex-row flex-col justify-center items-center">
          <div className="flex flex-col md:w-[50%] w-[70%]">
            <div className="flex flex-col items-center text-center">
              <b className="w-[80%] md:text-4xl text-lg">
                FIRST Robotics Competition
              </b>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center text-center md:mt-[4%] mt-[6%]">
                <b className="md:w-[60%] w-[80%] md:text-lg text-sm">
                  What is FRC?
                </b>
                <p className="md:w-[60%] w-[80%] md:text-base text-xs mt-[1%]">
                  FIRST Robotics Competition (FRC) is an international robotics competition that pits teams of high school students against each other in a thrilling six-week engineering challenge. Teams are challenged to design, build, program and test a robot that can compete in specific game challenges. Students are encouraged to apply science, technology, engineering, and math (STEM) to solve the challenge and work together as a team to design and build a successful robot.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center text-center md:mt-[4%] mt-[6%]">
                <b className="md:w-[60%] w-[80%] md:text-lg text-sm">
                  Vision of FIRST
                </b>
                <p className="md:w-[60%] w-[80%] md:text-base text-xs mt-[1%]">
                  The vision of FIRST Robotics Competition (FRC) is to inspire young people to be science and technology leaders, by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:w-[30%] w-[50%] md:mt-0 mt-[6%]">
            <div className="flex flex-col items-center justify-center">
              <img className="rounded-2xl" loading="lazy" src={FirstPhoto}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center md:mt-[4%] mt-[6%]">
          <b className="md:w-[60%] w-[80%] md:text-3xl text-base">
            Our Robots
          </b>
          <p className="md:w-[60%] w-[80%] md:text-lg text-xs mt-[1%]">
            Our robots over the years represent the spirit of our team: they are resilient, dependable, and determined to push beyond their limits.
          </p>
        </div>
      <div className="flex justify-center w-full mt-[1%]">
        <div className="w-[80%]">
          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 900: 3}}
            >
              <Masonry>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR1}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR2}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR3}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR4}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR5}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR6}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR7}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR8}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR9}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR10}/>
                </div>
                <div className="flex justify-center items-center">
                  <img className="rounded-xl md:rounded-[30px] lg:w-full w-[80%] p-[3%]" loading="lazy" src={OR11}/>
                </div>
              </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      <div className="flex flex-col items-center text-center md:mt-[4%] mt-[6%]">
        <b className="md:w-[60%] w-[80%] md:text-3xl text-base">
          Members
        </b>
        <p className="md:w-[60%] w-[80%] md:text-lg text-xs mt-[1%]">
          As a school team, Robert College students from 9th to 12th grades take part in our robotics journey. From brainstorming to building, preparing projects to fundraising, many aspects of our involvement is mainly student-led.        
        </p>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 md:text-base text-xs justify-items-center w-[80%] mt-[1%]">
          {Object.entries(teamMembers).map(([member, role]) => (
            <div key={member} className="text-center object-cover">
              <b>{member}</b>
              <p>{role}</p>
            </div>
          ))}
        </div>
        <b className="md:w-[60%] w-[80%] md:text-3xl text-base md:mt-[4%] mt-[6%]">
          Mentors
        </b>
        <p className="md:w-[60%] w-[80%] md:text-lg text-xs mt-[1%]">
          Team mentors provide an invaluable guidance and support throughout the year. Their dedication and enthusiasm is essential in allowing us to reach our goals.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 md:text-base text-xs justify-items-center w-[80%] mt-[1%]">
          {Object.entries(mentors).map(([member, role]) => (
            <div key={member} className="text-center object-cover">
              <b>{member}</b>
              <p>{role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center md:mt-[4%] mt-[6%] lg:pb-[5%] pb-[20%]">
        <div className="flex md:flex-row flex-col items-center justify-center md:w-[80%] w-full">
          <div className="flex flex-col md:w-[60%] w-[80%] ml-[5%] mr-[5%] text-center">
              <div><p className="md:text-3xl text-lg mb-[2%]"><b>Robert College</b></p></div>
              <div><p className="md:text-lg text-xs text-[10px] mb-[2%]">Robert College is a prestigious high school located in Istanbul. Founded as an American college in 1863, it is the oldest American-style school in the country. Robert College provides a unique educational experience, combining a strong curriculum with a multicultural environment, allowing students to develop their knowledge and skills in a diverse cultural and educational environment.</p></div>
              <div className="mt-[1%]">
                <a href="https://website.robcol.k12.tr/en/home-page" target="_blank">
                  <button className="bg-[#D76198] text-white hover:opacity-80 active:opacity-60 
                    pr-4 pl-4 pt-1 pb-1 md:pr-6 md:pl-6 md:pt-2 md:pb-2 rounded-lg text-xs md:text-base">
                    More Info
                  </button>
                </a>
            </div>
          </div>
          <div className="md:w-[40%] w-[60%] lg:mt-0 mt-[3%]">
            <img className="rounded-2xl" loading="lazy" src={RobertLogo}/>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Team;
