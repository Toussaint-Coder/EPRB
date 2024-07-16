import Video from "./Video"
import Introduction from "./HeroSection"
import OurHistory from "./HistorySection"

export default function History() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <Introduction />
      <OurHistory />
      <Video />
      {/* <Gallery /> */}
    </div>
  )
}
