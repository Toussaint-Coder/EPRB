import { useState } from "react"
import Button from "../../Components/Button"
import Container from "../../Components/Container"
import RotatedContainer from "../../Components/RotatedContainer"
export default function VisionSection() {
  const VisionsData = [
    {
      key: 0,
      Title: `Renforcement de la Foi et de la Vie Spirituelle.`,
      Description: `L'EPRB vise à renforcer la foi chrétienne parmi ses membres et à promouvoir une vie spirituelle profonde et authentique. Elle s'engage à enseigner les principes bibliques, à encourager la prière et à favoriser une relation personnelle avec Dieu. Les cultes, les études bibliques, et les activités de prière collective sont des piliers essentiels pour atteindre cette vision.`,
      className: `photo0`,
    },
    {
      key: 1,
      Title: `Développement Communautaire et Solidarité`,
      Description: `L'Église s'efforce de contribuer activement au développement de la société burundaise. Elle soutient des initiatives sociales telles que l'éducation, les soins de santé, et le soutien aux plus démunis. Par le biais de projets communautaires, l'EPRB travaille à améliorer les conditions de vie et à promouvoir la justice sociale, l'équité, et la solidarité parmi les communautés locales.`,
      className: `photo1`,
    },
    {
      key: 2,
      Title: ` Expansion de l'Évangile et Mission Globale`,
      Description: `L'EPRB est engagée dans la mission d'annoncer l'Évangile de Jésus-Christ à travers le pays et au-delà. Elle encourage ses membres à être des témoins de leur foi dans leurs environnements quotidiens et soutient des missions nationales et internationales. Des programmes d'évangélisation, des formations missionnaires et des partenariats avec d'autres églises et organisations chrétiennes font partie intégrante de cette vision.`,
      className: `photo2`,
    },
  ]
  const [Hovered, setHovered] = useState(false)
  function handlerHovered() {
    setHovered(true)
  }
  function removeHover() {
    setHovered(false)
  }
  return (
    <>
      <div className="w-full min-h-80 flex flex-col gap-10 xxs:px-4 xl:px-0">
        <Container className="flex justify-between items-center h-10 border-l-2 border-primary">
          <div className="pl-4">
            <h2 className="text-xl text-primary">Notre Vision</h2>
          </div>
          <div>
            <Button className="text-sm">En Savoir Plus</Button>
          </div>
        </Container>
        <Container className="flex lg:justify-between lg:items-stretch xxs:flex-col lg:flex-row md:items-center md:justify-center gap-8 xs:px-0 xxs:justify-center xxs:items-center  xl:px-0">
          {VisionsData.map((Vision) => {
            return (
              <div
                className="flex-1 relative flex flex-col border border-secondary"
                key={Vision.key}
                onMouseEnter={handlerHovered}
                onMouseLeave={removeHover}
              >
                <div
                  className={`h-80 w-full overflow-hidden relative ${Vision.className}`}
                >
                  <RotatedContainer />
                  <div className="w-full h-full duration-100 bg-[#50281dd2]/50 hover:bg-[#50281d00]" />
                </div>
                <div className="w-full flex flex-col gap-2 px-4 pb-4">
                  <h2 className="text-xl font-medium text-secondary">
                    {Vision.Title}
                  </h2>
                  <p className="text-sm leading-6 text-black/85">
                    {Vision.Description}
                  </p>
                </div>
              </div>
            )
          })}
        </Container>
      </div>
    </>
  )
}
