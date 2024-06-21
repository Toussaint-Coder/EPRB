import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Vision from "./Pages/Vision"
import Mission from "./Pages/Mission"
import Goal from "./Pages/Goal"
import History from "./Pages/History"
import Ministries from "./Pages/Ministries"
import Menu from "./Components/Menu"

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
