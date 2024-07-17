import Container from "../../Components/Container"

export default function MissionParagraph() {
  return (
    <Container className="flex flex-col gap-4 xxs:px-4 lg:px-0">
      <div>
        <h1 className="text-2xl font-semibold text-primary">Notre Mission</h1>
      </div>
      <div>
        <p className="text-base leading-9 ">
          La mission de l'Église Protestante Réformée du Burundi (EPRB) est de
          proclamer l'Évangile de Jésus-Christ et de témoigner de l'amour de
          Dieu à travers des actions concrètes de compassion et de justice.
          L'EPRB s'engage à promouvoir l'éducation chrétienne et la formation
          théologique, offrant des programmes éducatifs pour toutes les tranches
          d'âge et formant des leaders capables de servir efficacement dans
          l'église et la société. L'église œuvre pour le développement intégral
          des communautés en initiant des projets visant à améliorer la qualité
          de vie, tels que des programmes de santé, des initiatives agricoles et
          des projets de développement économique. Elle apporte un soutien
          matériel et spirituel aux personnes vulnérables et marginalisées,
          fournissant une aide humanitaire en temps de crise et défendant les
          droits des opprimés. En partageant la Bonne Nouvelle de l'Évangile,
          l'EPRB encourage la croissance spirituelle des fidèles et envoie des
          missionnaires pour étendre l'influence de l'Évangile au-delà des
          frontières locales. L'église promeut également l'unité au sein de la
          communauté chrétienne et travaille en collaboration avec d'autres
          églises et organisations pour renforcer l'impact de son ministère et
          réaliser des objectifs communs. En poursuivant ces objectifs, l'EPRB
          cherche à incarner les valeurs de compassion, de justice et
          d'intégrité, et à contribuer à la transformation spirituelle et
          sociale du Burundi et du monde entier.
        </p>
      </div>
    </Container>
  )
}
