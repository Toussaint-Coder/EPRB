import Container from "../../Components/Container"
import GoalsSection from "./GoalsSection"
import HeroSection from "./HeroSection"
import HistorySection from "./HistorySection"
import MissionSection from "./MissionSection"
import VisionSection from "./VisionSection"

export default function Home() {
  return (
    <>
      <div className="flex gap-14 flex-col">
        <HeroSection />
        <GoalsSection />
        <VisionSection />
        <MissionSection />
        <HistorySection />
      </div>
    </>
  )
}
