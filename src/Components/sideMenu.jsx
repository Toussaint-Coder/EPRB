import { Link } from "react-router-dom"
import closeMenu from "../assets/closeIcon.svg"

export default function SlideMenu({ className, handlerCloseSideMenu }) {
  return (
    <>
      <div
        className={`w-full h-screen z-40 fixed duration-300 top-0 bg-white/50 flex items-end justify-end ${className}`}
      >
        <div className="2/4 h-full bg-secondary flex gap-4 flex-col p-8 absolute z-50">
          <div className="flex items-center justify-between">
            <h1 className="text-white font-semibold text-2xl">Menu</h1>
            <button
              className="px-4 py-1 text-sm text-white"
              onClick={handlerCloseSideMenu}
            >
              <img src={closeMenu} className="w-4" alt="Icon" />
            </button>
          </div>
          <ul className="flex flex-col gap-6">
            <li className="MenuUrls hover:ml-4">
              <Link to="/">Accueil</Link>
            </li>
            <li className="MenuUrls hover:ml-4">
              <Link to="/History">Histoire</Link>
            </li>
            <li className="MenuUrls hover:ml-4">
              <Link to="/Vision">Vision</Link>
            </li>
            <li className="MenuUrls hover:ml-4">
              <Link to="/Goal">But</Link>
            </li>
            <li className="MenuUrls hover:ml-4">
              <Link to="/Mission">Mission</Link>
            </li>

            <li className="MenuUrls hover:ml-4">
              <Link to="/Ministries">Ministères</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
