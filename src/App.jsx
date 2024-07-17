import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Vision from "./Pages/Vision/Vision"
import Mission from "./Pages/Mission/Mission"
import Goal from "./Pages/Goal/Goal"
import History from "./Pages/History/History"
import Ministries from "./Pages/Ministrie/Ministrie"
import Menu from "./Components/Menu"
import DonationForm from "./Pages/Donate/DonationForm"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Home />} />
            <Route path="Vision" element={<Vision />} />
            <Route path="Mission" element={<Mission />} />
            <Route path="Goal" element={<Goal />} />
            <Route path="History" element={<History />} />
            <Route path="Ministries" element={<Ministries />} />
            <Route path="Donate" element={<DonationForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
