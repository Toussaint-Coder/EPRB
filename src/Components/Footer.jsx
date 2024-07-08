import Container from "./Container"
import { Link } from "react-router-dom"
import fbIcon from "../assets/fb.svg"
import ttIcon from "../assets/tiktok.svg"
import igIcon from "../assets/ig.svg"
import ytIcon from "../assets/yt.svg"
import phoneIcon from "../assets/phone.svg"
export default function Footer() {
  return (
    <>
      <div className="w-full min-h-80  bg-primary flex items-center justify-center gap-12 xxs:px-4 xl:px-0 flex-col py-5">
        <Container className="flex justify-between xxs:flex-col-reverse lg:flex-row xxs:gap-4 xxs:items-center sm:items-center">
          <div className="max-w-sm w-full text-white xxs:text-center sm:text-start">
            <div>
              <h1 className="font-bold text-2xl">EPBR</h1>
            </div>
            <div>
              MC42+XHM, Kamenge <br /> 15ème Avenue, Bujumbura
            </div>
          </div>
          <ul className="flex items-center text-white/80 text-sm xxs:gap-8 lg:gap-16 xxs:flex-col sm:flex-row xxs:items-center">
            <li className="MenuUrls">
              <Link to="/">Accueil</Link>
            </li>
            <li className="MenuUrls">
              <Link to="/History">Histoire</Link>
            </li>
            <li className="MenuUrls">
              <Link to="/Vision">Vision</Link>
            </li>
            <li className="MenuUrls">
              <Link to="/Goal">But</Link>
            </li>
            <li className="MenuUrls">
              <Link to="/Mission">Mission</Link>
            </li>

            <li className="MenuUrls">
              <Link to="/Ministries">Ministères</Link>
            </li>
          </ul>
        </Container>
        <Container className="border-b border-b-white/15" />
        <Container className="flex items-center justify-between xxs:flex-col sm:flex-row xxs: gap-8">
          <ul className="items-center justify-center flex gap-14">
            <li className="">
              <img
                src={fbIcon}
                alt="Icon"
                className="w-5 h-5 duration-200 hover:opacity-100"
              />
            </li>
            <li className="">
              <img
                src={ttIcon}
                alt="Icon"
                className="w-5 h-5 duration-200 hover:opacity-100"
              />
            </li>
            <li className="">
              <img
                src={igIcon}
                alt="Icon"
                className="w-5 h-5 duration-200 hover:opacity-100"
              />
            </li>
            <li className="">
              <img
                src={ytIcon}
                alt="Icon"
                className="w-5 h-5 duration-200 hover:opacity-100"
              />
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <img src={phoneIcon} alt="Icon" className="w-6" />
              <p className="text-white">+257 79 962 947</p>
            </div>
            <div className="flex items-center">
              <img src={phoneIcon} alt="Icon" className="w-6" />
              <p className="text-white">+257 69 962 947</p>
            </div>
          </div>
        </Container>
        <div className="w-full text-center">
          <p className="text-white/50 text-sm">copyright © 2024 </p>
        </div>
      </div>
    </>
  )
}
