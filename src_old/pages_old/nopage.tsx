import Footer from "../components/footer";
import Navbar from "../components/navbar";

import Image404 from "../assets/Other_Images/Image 404.webp";

import { useEffect } from 'react';

function NoPage() {
  useEffect(() => {
    document.title = 'ARC#6014 - Error Page';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
          <div className="flex flex-grow justify-center items-center h-full cursor-pointer">
            <a href="/home"><img src={Image404} alt="404" /></a>
          </div>
        <Footer></Footer>
    </div>
  )
}

export default NoPage;
