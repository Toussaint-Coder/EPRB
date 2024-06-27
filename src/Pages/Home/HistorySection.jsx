import Container from "../../Components/Container"
import Button from "../../Components/Button"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export default function HistorySection() {
  const Buts = [
    {
      but: `L'Église Protestante du Burundi (EPRB) place au cœur de sa mission la promotion et le renforcement de la foi chrétienne parmi ses membres et dans la société burundaise. Son but premier est de diffuser l'Évangile de Jésus-Christ à travers des enseignements bibliques profonds et accessibles, des cultes réguliers imprégnés de louange et de prière, et des programmes de formation spirituelle. En formant des disciples engagés, l'EPRB aspire à voir ses membres vivre leur foi de manière tangible, influençant positivement leurs familles, leurs communautés et au-delà.`,
    },
    {
      but: `L'EPRB s'engage fermement à contribuer au développement social et économique des communautés burundaises. Son objectif est de répondre aux besoins urgents et fondamentaux des populations les plus vulnérables. Cela se concrétise par la création et la gestion de centres de santé communautaires, la mise en place de programmes de nutrition pour lutter contre la malnutrition, et la distribution de nourriture et de vêtements aux familles dans le besoin. En outre, l'Église joue un rôle crucial dans la réponse aux crises humanitaires en offrant un soutien vital aux déplacés internes et aux réfugiés, tout en plaidant activement pour la justice sociale et l'équité au sein de la société.`,
    },
    {
      but: `L'EPRB considère l'éducation comme un levier puissant pour le développement global et individuel. Son objectif est de fournir une éducation de qualité qui intègre des principes chrétiens dans le curriculum, aidant ainsi les jeunes à grandir dans la foi tout en acquérant les compétences nécessaires pour réussir dans la vie. L'Église établit et gère des écoles primaires et secondaires, offrant un environnement d'apprentissage sûr et enrichissant. De plus, elle soutient des centres de formation professionnelle où les jeunes et les adultes peuvent acquérir des compétences pratiques telles que la menuiserie, la couture et l'informatique. L'EPRB investit également dans des instituts théologiques pour former des leaders spirituels et des pasteurs qui guideront les futures générations. Par le biais de programmes de bourses et d'aides financières, l'Église rend l'éducation accessible aux enfants défavorisés, leur offrant ainsi une chance égale de réaliser leur potentiel et de contribuer positivement à la société.`,
    },
  ]
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className:
      "max-w-4xl w-full pl-4 border-l-2 border-l-white py-4 flex items-center ",
    pauseOnHover: true,
    arrows: false,
    rtl: true,
  }

  return (
    <>
      <div className="w-full min-h-80 flex flex-col gap-10">
        <Container className="flex justify-between items-center h-10 border-l-2 border-primary">
          <div className="pl-4">
            <h2 className="text-xl text-primary">Notre But</h2>
          </div>
          <div>
            <Button className="text-sm">En Savoir Plus</Button>
          </div>
        </Container>
        <Container className="butSection min-h-96 flex items-center justify-center">
          <div className="">
            <Slider {...settings}>
              {Buts.map((But) => (
                <div>
                  <p className="text-white italic leading-7">{But.but}</p>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  )
}
