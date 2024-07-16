import Visions from "./VisionParagraph"
import VisionSlides from "./VisionsSlides"

export default function Vision() {
  return (
    <>
      <div className="flex flex-col gap-10 my-10">
        <Visions />
        <VisionSlides />
      </div>
    </>
  )
}
