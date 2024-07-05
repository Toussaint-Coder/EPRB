import Container from "../../Components/Container"
import churchIcon from "../../assets/church.svg"
import CommuntyIcon from "../../assets/community.svg"
import NaionsIcon from "../../assets/globe.svg"
import WatchIcon from "../../assets/watch.svg"

export default function GoalsSection() {
  return (
    <>
      <div className="w-full bg-gray-100 xxs:min-h-40 sm:max-h-40">
        <Container className="flex justify-between items-center xxs:flex-col sm:flex-row xxs:gap-8 sm:gap-0">
          <div className="h-full flex flex-col items-center justify-center p-5 gap-2">
            <div>
              <img src={churchIcon} alt="Icon" />
            </div>
            <div className="text-center">
              <h1 className="text-lg font-medium">25 Milles</h1>
              <p className="text-base">Maison Eglises</p>
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center p-5 gap-2">
            <div>
              <img src={CommuntyIcon} alt="Icon" />
            </div>
            <div className="text-center">
              <h1 className="text-lg font-medium">2 Milliards</h1>
              <p className="text-base">Disciples</p>
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center p-5 gap-2">
            <div>
              <img src={NaionsIcon} alt="Icon" />
            </div>
            <div className="text-center">
              <h1 className="text-lg font-medium">194 </h1>
              <p className="text-base">Nations</p>
            </div>
          </div>

          <div className="h-full flex flex-col items-center justify-center p-5 gap-2">
            <div>
              <img src={WatchIcon} alt="Icon" />
            </div>
            <div className="text-center">
              <h1 className="text-lg font-medium">2100</h1>
              <p className="text-base">Chronoloies</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
