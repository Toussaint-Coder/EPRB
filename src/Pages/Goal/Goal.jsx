import ButSection from "../Home/ButSection"
import GoalParagraph from "./GoalParagraph"

export default function Goal() {
  return (
    <div className="flex flex-col gap-10 my-10">
      <GoalParagraph />
      <ButSection />
    </div>
  )
}
