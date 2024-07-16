import Container from "../../Components/Container"
import GPhoto1 from "../../assets/img1.jpg"
import GPhoto2 from "../../assets/img2.jpg"
import GPhoto3 from "../../assets/img3.jpg"
import GPhoto4 from "../../assets/img4.jpg"
import { Suspense } from "react"
export default function VisionSlides() {
  const VisionsData = [
    {
      key: 0,
      Title: `Renforcement de la Foi et de la Vie Spirituelle.`,
      Description: `L'EPRB vise à renforcer la foi chrétienne parmi ses membres et à promouvoir une vie spirituelle profonde et authentique. Elle s'engage à enseigner les principes bibliques, à encourager la prière et à favoriser une relation personnelle avec Dieu. Les cultes, les études bibliques, et les activités de prière collective sont des piliers essentiels pour atteindre cette vision.`,
      Img: GPhoto1,
    },
    {
      key: 1,
      Title: `Développement Communautaire et Solidarité`,
      Description: `L'Église s'efforce de contribuer activement au développement de la société burundaise. Elle soutient des initiatives sociales telles que l'éducation, les soins de santé, et le soutien aux plus démunis. Par le biais de projets communautaires, l'EPRB travaille à améliorer les conditions de vie et à promouvoir la justice sociale, l'équité, et la solidarité parmi les communautés locales.`,
      Img: GPhoto2,
    },
    {
      key: 2,
      Title: ` Expansion de l'Évangile et Mission Globale`,
      Description: `L'EPRB est engagée dans la mission d'annoncer l'Évangile de Jésus-Christ à travers le pays et au-delà. Elle encourage ses membres à être des témoins de leur foi dans leurs environnements quotidiens et soutient des missions nationales et internationales. Des programmes d'évangélisation, des formations missionnaires et des partenariats avec d'autres églises et organisations chrétiennes font partie intégrante de cette vision.`,
      Img: GPhoto3,
    },
  ]
  return (
    <>
      <>
        <Container className="flex flex-col gap-24 mb-10  xxs:px-4 lg:px-0">
          {VisionsData.map((Vision) => (
            <div
              className={`xxs:flex-col-reverse items-center w-full flex flex-cols gap-4  ${
                Vision.key === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
              key={Vision.key}
            >
              <div className="flex flex-col gap-4">
                <p className="text-black/80 italic max-w-48">{Vision.Date}</p>
                <h1 className="text-2xl text-secondary font-semibold">
                  {Vision.Title}
                </h1>
                <p className="leading-8 text-base">{Vision.Description}</p>
              </div>
              <Suspense
                fallback={<p className="font-semibold">Loadind the map...</p>}
              >
                <img
                  src={Vision.Img}
                  className="shadow-lg shadow-black/15 max-w-72"
                />
              </Suspense>
            </div>
          ))}
        </Container>
      </>
    </>
  )
}
