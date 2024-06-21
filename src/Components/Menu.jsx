import { Link, Outlet } from "react-router-dom"
export default function Menu() {
  return (
    <>
      <ul className="bg-black">
        <li>
          <Link to="/">Accuel</Link>
        </li>
        <li>
          <Link to="/Vision">Vision</Link>
        </li>
        <li>
          <Link to="/Goal">But</Link>
        </li>
        <li>
          <Link to="/History">Histoire</Link>
        </li>
        <li>
          <Link to="/Ministries">Ministères</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}
