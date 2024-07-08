import Container from "../../Components/Container"

export default function OurHistory() {
  return (
    <>
      <Container className="flex flex-col gap-4 xxs:px-4 lg:px-0">
        <div>
          <h1 className="text-2xl font-semibold text-primary">
            Notre Histoire
          </h1>
        </div>
        <div>
          <p className="text-base leading-9 ">
            L'Église Protestante du Burundi (EPRB) trouve ses racines à la fin
            du XIXe siècle avec l'arrivée des premiers missionnaires protestants
            en Afrique centrale. Ces missionnaires, principalement européens et
            américains, introduisirent les enseignements de la Réforme
            protestante. Malgré les défis initiaux, tels que les maladies
            tropicales et les barrières culturelles, les missionnaires
            commencèrent à établir des écoles, des dispensaires et des églises
            locales. Dans les années 1920 et 1930, l'Église connut une expansion
            significative grâce à l'engagement des convertis locaux et à
            l'établissement de nouvelles congrégations. Après l'indépendance du
            Burundi en 1962, l'EPRB prit un rôle plus actif dans le
            développement social et éducatif du pays, créant des institutions
            pour répondre aux besoins croissants de la population. Aujourd'hui,
            l'EPRB continue de promouvoir la foi chrétienne, d'améliorer les
            conditions de vie des communautés et de soutenir l'éducation à
            travers le pays, restant fidèle à sa mission initiale tout en
            répondant aux défis contemporains.
          </p>
        </div>
      </Container>
    </>
  )
}
