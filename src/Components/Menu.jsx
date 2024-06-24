import { Link, Outlet } from "react-router-dom"
import Container from "./Container"
export default function Menu() {
  return (
    <>
      <div className="py-4 bg-transparent absolute w-full z-10">
        <Container className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-white">Logo</h1>
          </div>
          <ul className="flex items-center gap-16 text-white text-sm">
            <li>
              <Link to="/">Accuel</Link>
            </li>
            <li className="text-sm">
              <Link to="/Vision">Vision</Link>
            </li>
            <li>
              <Link to="/Mission">Mission</Link>
            </li>
            <li className="text-sm">
              <Link to="/Goal">But</Link>
            </li>
            <li className="text-sm">
              <Link to="/History">Histoire</Link>
            </li>
            <li className="text-sm">
              <Link to="/Ministries">Ministères</Link>
            </li>
          </ul>
          <div>
            <button className="px-4 py-1 border border-white text-sm text-white">
              Faire un don
            </button>
          </div>
        </Container>
      </div>
      <Outlet />
    </>
  )
}
