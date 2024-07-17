import Container from "../../Components/Container"
import Button from "../../Components/Button"
import StudentsIcon from "../../assets/students.svg"
import ChartIcon from "../../assets/chart.svg"
import CrossIcon from "../../assets/cros.svg"

export default function MissionSection({ children }) {
  const Missions = [
    {
      key: 0,
      Icon: StudentsIcon,
      Tittle: `Partage de l'Évangile et Expansion de la Foi Chrétienne`,
      Description: `L'EPRB s'engage à partager l'Évangile de Jésus-Christ avec le plus grand nombre de personnes possible. Elle organise régulièrement des campagnes d'évangélisation dans les villes et villages, incluant des rassemblements publics et des séminaires. L'Église forme des missionnaires locaux et internationaux, leur fournissant les outils nécessaires pour prêcher efficacement, et collabore avec d'autres églises et organisations chrétiennes pour maximiser l'impact de ses efforts. En outre, l'EPRB utilise des médias modernes comme la radio, la télévision, et les plateformes en ligne pour diffuser des messages évangéliques à un public plus large.`,
    },
    {
      key: 1,
      Icon: ChartIcon,
      Tittle: `Soutien aux Communautés et Promotion du Bien-être Social`,
      Description: `L'EPRB œuvre pour améliorer les conditions de vie des communautés locales par divers projets sociaux et humanitaires. Elle établit et soutient des centres de santé et des cliniques, organise des programmes de nutrition et distribue de la nourriture aux familles nécessiteuses. En réponse aux crises, l'Église fournit une aide humanitaire aux personnes déplacées et aux réfugiés. De plus, l'EPRB promeut la justice sociale en soutenant des initiatives de défense des droits de l'homme et en luttant contre les discriminations.`,
    },
    {
      key: 2,
      Icon: CrossIcon,
      Tittle: `Développement de l'Éducation et Formation des Jeunes`,
      Description: `L'EPRB considère l'éducation comme un levier essentiel pour le développement. Elle crée et gère des écoles primaires et secondaires, offrant une éducation de qualité intégrant des valeurs chrétiennes. L'Église établit des centres de formation professionnelle pour aider les jeunes à acquérir des compétences pratiques et soutient des instituts théologiques pour former des leaders religieux. Pour garantir l'accès à l'éducation, l'EPRB offre des bourses et des aides financières aux étudiants défavorisés, leur permettant de poursuivre leurs études sans contraintes économiques.`,
    },
  ]
  return (
    <>
      <div className="w-full min-h-80 flex flex-col gap-10  xxs:px-4 xl:px-0">
        {children}
        {Missions.map((Mission) => (
          <Container className="flex flex-col" key={Mission.key}>
            <div className="w-full flex gap-5">
              <div className="w-16">
                <img
                  src={Mission.Icon}
                  alt="Icon"
                  className="xxs:w-12 sm:w-16"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-primary text-xl font-semibold">
                  {Mission.Tittle}
                </h2>
                <p className="text-sm leading-6 text-black/85">
                  {Mission.Description}
                </p>
              </div>
            </div>
          </Container>
        ))}
      </div>
    </>
  )
}
