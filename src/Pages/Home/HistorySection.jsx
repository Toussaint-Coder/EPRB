import Container from "../../Components/Container"
import Button from "../../Components/Button"
export default function HistorySection() {
  return (
    <>
      <div className="w-full flex flex-col gap-10 xxs:px-4 xl:px-0">
        <Container className="flex justify-between items-center h-10 border-l-2 border-primary ">
          <div className="pl-4">
            <h2 className="text-xl text-primary">Notre Histoire</h2>
          </div>
          <div>
            <a
              href="https://en.wikipedia.org/wiki/%C3%89glise_Protestante_Reform%C3%A9e_du_Burundi"
              target="_blank"
              className="text-primary underline"
            >
              <Button className="text-xs">Voir Sur Wikipedia</Button>
            </a>
          </div>
        </Container>
        <Container>
          <p className="text-sm leading-6 text-black/85">
            L'Église Protestante du Burundi (EPRB) trouve ses racines à la fin
            du XIXe siècle avec l'arrivée des premiers missionnaires protestants
            en Afrique centrale. Ces missionnaires, principalement européens et
            américains, introduisirent les enseignements de la Réforme
            protestante. Malgré les défis initiaux, tels que les maladies
            tropicales et les barrières culturelles, les missionnaires
            commencèrent à établir des écoles, des dispensaires et des églises
            locales.
            <br />
            <br />
            Dans les années 1920 et 1930, l'Église connut une expansion
            significative grâce à l'engagement des convertis locaux et à
            l'établissement de nouvelles congrégations. Après l'indépendance du
            Burundi en 1962, l'EPRB prit un rôle plus actif dans le
            développement social et éducatif du pays, créant des institutions
            pour répondre aux besoins croissants de la population.
            <br />
            <br />
            Aujourd'hui, l'EPRB continue de promouvoir la foi chrétienne,
            d'améliorer les conditions de vie des communautés et de soutenir
            l'éducation à travers le pays, restant fidèle à sa mission initiale
            tout en répondant aux défis contemporains.
          </p>
        </Container>
      </div>
    </>
  )
}
