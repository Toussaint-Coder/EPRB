import { Link, Outlet } from "react-router-dom"
import Container from "./Container"
import { useEffect, useRef, useState } from "react"
import Footer from "./Footer"
import MenuIcon from "../assets/menu.svg"
import SlideMenu from "./sideMenu"
export default function Menu() {
  const [ScreenResize, setScreenResize] = useState(false)
  const menuContainer = useRef(null)
  const [crtPage, setCrtPage] = useState(false)
  const [openMenu, setOpeMenu] = useState(false)

  function handlerSideMenu() {
    setOpeMenu((openMenu) => !openMenu)
    console.log(openMenu)
  }
  window.onscroll = () => {
    const ScreenHeight = window.scrollY
    const MenuSize = menuContainer.current.getBoundingClientRect().height
    const isGreater = ScreenHeight > MenuSize
    if (isGreater) {
      setScreenResize(true)
    }
    if (!isGreater) {
      setScreenResize(false)
    }
  }

  const currentPage = document.URL.split("/")

  useEffect(() => {
    function TogglePage() {
      switch (currentPage.at(-1)) {
        case "":
          setCrtPage("Home")
          break
        case "History":
          setCrtPage("History")
          break
        case "Vision":
          setCrtPage("Vision")
          break
        case "Mission":
          setCrtPage("Mission")
          break
        case "Goal":
          setCrtPage("Goal")
          break
        case "Ministries":
          setCrtPage("Ministries")
          break
        default:
          setCrtPage("Home")
      }
    }
    setInterval(TogglePage, 0)
  }, [crtPage])
  return (
    <>
      <SlideMenu
        handlerCloseSideMenu={handlerSideMenu}
        className={`${openMenu ? "right-0" : "-right-full"} ease-in-out`}
      />
      <div
        className={`py-4 duration-1000 z-30 xxs:px-4 xl:px-0 ${
          !ScreenResize
            ? "bg-primary/0 top-first0 absolute"
            : "bg-primary sticky top-0"
        } w-full z-10`}
        ref={menuContainer}
      >
        <Container className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-white">EPRB</h1>
          </div>
          <ul className="flex items-center gap-16 text-white text-sm xxs:hidden md:flex">
            <li
              className={`MenuUrls ${
                crtPage === "Home" ? "text-white border-b" : ""
              }`}
            >
              <Link to="/">Accueil</Link>
            </li>
            <li
              className={`MenuUrls ${
                crtPage === "History" ? "font-semibold text-white border-b" : ""
              }`}
            >
              <Link to="/History">Histoire</Link>
            </li>
            <li
              className={`MenuUrls ${
                crtPage === "Vision" ? "text-white border-b" : ""
              }`}
            >
              <Link to="/Vision">Vision</Link>
            </li>
            <li
              className={`MenuUrls ${
                crtPage === "Mission" ? "font-semibold text-white border-b" : ""
              }`}
            >
              <Link to="/Mission">Mission</Link>
            </li>

            <li
              className={`MenuUrls ${
                crtPage === "Goal" ? "font-semibold text-white border-b" : ""
              }`}
            >
              <Link to="/Goal">But</Link>
            </li>

            <li
              className={`MenuUrls ${
                crtPage === "Ministries"
                  ? "font-semibold text-white border-b"
                  : ""
              }`}
            >
              <Link to="/Ministries">Ministères</Link>
            </li>
          </ul>
          <div className="flex items-center">
            <button
              className="px-2 py-1 text-sm text-white xxs:block md:hidden cursor-pointer"
              onClick={handlerSideMenu}
            >
              <img src={MenuIcon} alt="Icon" className="w-6" />
            </button>
            <button className="px-4 py-1 border border-white text-sm text-white">
              Faire un don
            </button>
          </div>
        </Container>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}
