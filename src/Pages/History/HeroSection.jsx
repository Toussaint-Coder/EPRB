import CustomBackground from "../../Components/CustomBackground"
import RotatedContainer from "../../Components/RotatedContainer"
import { settings } from "../../Components/SlideSettings"
import Photo1 from "../../assets/photo1.png"
import Photo2 from "../../assets/photo4.jpeg"
import Photo3 from "../../assets/photo6.jpeg"
import Slider from "react-slick"

export default function HeroSection() {
  settings.className = "w-full h-full flex items-center justify-center"

  const HistoryData = [
    {
      key: 0,
      description:
        "Établie en 1928, l'Église Protestante Réformée du Burundi trouve ses racines dans la mission chrétienne et la foi évangélique. Fondée par des missionnaires engagés, elle a rapidement pris racine dans la société burundaise, apportant la lumière de l'Évangile à travers le pays.",
      className: "Picture1-History",
    },
    {
      key: 1,
      description:
        "Depuis ses modestes débuts, l'EPRB a connu une croissance impressionnante, élargissant son influence à travers le Burundi. À travers les décennies, de nouvelles paroisses ont été établies, des écoles ont ouvert leurs portes, et des initiatives communautaires ont transformé des vies.",
      className: "Picture2-History",
    },
    {
      key: 2,
      description:
        "L'EPRB a laissé un impact profond sur la nation burundaise, non seulement en nourrissant la foi spirituelle de ses membres, mais aussi en répondant aux besoins sociaux à travers des programmes éducatifs, médicaux et de développement. Son engagement continue à inspirer et à enrichir la vie de nombreuses générations.",
      className: "Picture3-History",
    },
  ]
  return (
    <>
      <div className="w-full min-h-[500px] flex justify-center items-center transform -translate-y-0 relative overflow-hidden duration-300">
        <Slider {...settings}>
          {HistoryData.map((History) => (
            <div
              key={History.key}
              className={`w-full h-[500px] ${History.className} !flex !justify-center !items-center`}
            >
              <div className="max-w-4xl xxs:px-4 sm:px-0">
                <p className="text-white font-semibold text-center">
                  {History.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        <RotatedContainer />
      </div>
    </>
  )
}
