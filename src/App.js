import NavbarComp from "./Components/Navbar/NavbarComp";
import Footer from "./Components/Footer";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Suspense, lazy, useEffect } from "react";
import ScrollTopBtn from "./Components/Others/ScrollTopBtn";
import { Route, Routes } from "react-router-dom";
// import FooterCountDown from "./Components/Footer/FooterCountDown";
import "./App.css"
import ContextProvider from "./assests/Contextprovider";
import { useState } from "react";
import { images_url } from "./assests/DataBase";
import LoadSpinner from "./Components/Loading/LoadSpinner";
import Admin from "./Components/Admin";

const About = lazy(() => import("./Components/About"))
const Symposium = lazy(() => import("./Components/Symposium"))
const NavbarCarousel = lazy(() => import("./Components/Navbar/NavbarCarousel"))
const Gallery = lazy(() => import("./Components/Gallery"))
const PreEvents = lazy(() => import("./Components/PreEvents"))
const Notification = lazy(() => import("./Components/Notification"))
const Team = lazy(() => import("./Components/Team"))
const Resources = lazy(() => import("./Components/Gdrive/resources"))
const NewsLetter = lazy(() => import("./Components/NewsLetter"))


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  function NavbarCountDown() {
    return (
      <div style={{ background: "url('../../../public/navbar images/countdownBackround.jpg');" }} className="d-flex justify-content-center align-items-center NavbarCountDown pt-3">
        {/* <FooterCountDown /> */}
      </div>
    )
  }


  const NavFooterComp = () => {
    let subdomain = window.location.hostname.split(".");;

    const [indconlogo, setIndconlogo] = useState(null)
    useEffect(() => {

      localStorage.getItem('theme') == 'dark' && document.querySelector('html').classList.add('dark-theme')
      localStorage.getItem('theme') == 'dark' ? setIndconlogo(images_url + 'navbar images/indcon logo dark.png') : setIndconlogo(images_url + 'navbar images/indcon logo.png')
    }, [])
    return (

      <ContextProvider.Provider value={{ indconlogo, setIndconlogo }}>
        <NavbarComp />
        <Suspense fallback={<LoadSpinner />}>
          <div className="ps-md-5 pe-md-5" style={{ backgroundColor: 'var(--brand-light-col)', position: 'relative' }}>
            <Routes>
              <Route path="/" element={<NavbarCarousel />} />
              <Route path="/sympo" element={<Symposium />} />
              <Route path="/events" element={<PreEvents />} />
              <Route path="/team" element={<Team />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:googId" element={<Resources />} />
              <Route path="/news" element={<NewsLetter />} />
              <Route path="/news/:googId" element={<NewsLetter />} />
              <Route path="/notification" element={<Notification />} />
              {/* <Route path="/test/*" element={<Test />} /> */}
              {/* <Route path="/paytm" element={<PaytmPay />} /> */}
              <Route path="*" element={<NavbarCarousel />} />
            </Routes>
          </div>
        </Suspense>
        <ScrollTopBtn />
        <Footer />
      </ContextProvider.Provider>
    )
  }

  return (
    <div className="AppClass">
      {document.readyState === 'interactive' &&
        <>
          <Routes>
            <Route path="/*" element={<NavFooterComp />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </>}

    </div>
  );
}

export default App;