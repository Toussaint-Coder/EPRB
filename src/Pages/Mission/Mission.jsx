import MissionSection from "../Home/MissionSection"
import MissionParagraph from "./MissionParagraph"

export default function Vision() {
  return (
    <>
      <div className="flex flex-col gap-10 my-10">
        <MissionParagraph />
        <MissionSection />
      </div>
    </>
  )
}
