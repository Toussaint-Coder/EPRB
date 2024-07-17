import Container from "../../Components/Container"
import ButSection from "./ButSection"
import GoalsSection from "./GoalsSection"
import HeroSection from "./HeroSection"
import HistorySection from "./HistorySection"
import Ministries from "./MinistriesSection"
import Button from "../../Components/Button"
import MissionSection from "./MissionSection"
import VisionSection from "./VisionSection"

export default function Home() {
  return (
    <>
      <div className="flex gap-14 flex-col">
        <HeroSection />
        <GoalsSection />
        <HistorySection />
        <VisionSection />
        <ButSection>
          <Container className="flex justify-between items-center h-10 border-l-2 border-primary">
            <div className="pl-4">
              <h2 className="text-xl text-primary">Notre But</h2>
            </div>
            <div>
              <Button className="text-xs">En Savoir Plus</Button>
            </div>
          </Container>
        </ButSection>
        <MissionSection>
          <Container className="flex justify-between items-center h-10 border-l-2 border-primary">
            <div className="pl-4">
              <h2 className="text-xl text-primary">Notre Mission</h2>
            </div>
            <div>
              <Button className="text-sm">En Savoir Plus</Button>
            </div>
          </Container>
        </MissionSection>
        <Ministries />
      </div>
    </>
  )
}
