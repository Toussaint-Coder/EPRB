import Video4 from "../../assets/videos/o4.mp4"
import Video5 from "../../assets/videos/5.mp4"
import Video1 from "../../assets/videos/1.mp4"
import Container from "../../Components/Container"
export default function Video() {
  const Videos = [
    {
      key: 0,
      VideoSrc: Video4,
      Date: "Croissade du 05 Mai 2023 à Bujumbura",
      Tittle: "Un Chemin vers le Bonheur - Par Pasteur Marc",
      Description: `Dans cette vidéo inspirante, Pasteur Marc de l'Église Protestante
              Réformée du Burundi (EPRB) partage un puissant message sur la
              manière dont Dieu utilise les obstacles dans nos vies pour nous
              guider vers le bon chemin. Découvrez comment les défis que nous
              rencontrons peuvent devenir des opportunités de croissance et de
              bénédiction, et apprenez à voir les épreuves sous un nouveau jour
              avec foi et espoir.`,
    },
    {
      key: 1,
      VideoSrc: Video1,
      Date: "Cérémonie du 14 Mars 2024 à Bujumbura, Kamenge",
      Tittle: "Cérémonie d'ordination et de bénédiction des nouveaux leaders",
      Description: `Cette video capture un moment solennel et sacré lors de la cérémonie d'ordination et de bénédiction des nouveaux leaders au sein de l'Église Protestante Réformée du Burundi (EPRB). Sous les lumières étincelantes, les membres de la communauté ecclésiastique entourent les futurs pasteurs en imposant les mains, un geste symbolique de bénédiction et de soutien spirituel. Le bâton de berger, tenu par l'un des dirigeants religieux, symbolise l'autorité et la guidance spirituelle que ces nouveaux leaders incarneront. Drapé dans les couleurs du drapeau national, cet événement souligne également l'engagement de l'église envers la nation burundaise et son rôle crucial dans la promotion des valeurs chrétiennes et communautaires. Un moment empreint de foi, de dévotion et d'espoir pour l'avenir de l'EPRB et de ses fidèles.`,
    },
    {
      key: 2,
      VideoSrc: Video5,
      Date: "Aide Humanitaire du 05 Mai 2023 à Bujumbura, Gatumba",
      Tittle: "Aide Humanitaire à Gatumba : L'EPRB en Action",
      Description: `Cette vidéo met en lumière les efforts courageux de l'Église Protestante Réformée du Burundi (EPRB) pour soutenir les habitants de Gatumba, victimes des récentes inondations dévastatrices. Face à cette catastrophe naturelle, l'EPRB s'est mobilisée rapidement pour fournir des abris temporaires, de la nourriture, de l'eau potable et des vêtements aux familles déplacées. En collaboration avec des partenaires locaux et internationaux, l'église a également mis en place des centres de soutien psychologique pour aider les personnes traumatisées par les inondations. Découvrez comment l'EPRB incarne les valeurs chrétiennes de solidarité et de compassion en apportant un secours indispensable et en œuvrant pour la reconstruction de cette communauté durement touchée.`,
    },
  ]
  /***/
  return (
    <>
      <Container className="flex flex-col gap-10 mb-10  xxs:px-4 lg:px-0">
        {Videos.map((Video) => (
          <div
            className={`xxs:flex-col-reverse items-center w-full flex flex-cols gap-4  ${
              Video.key === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
            key={Video.key}
          >
            <div className="flex flex-col gap-4">
              <p className="text-black/80 italic">{Video.Date}</p>
              <h1 className="text-2xl text-secondary font-semibold">
                {Video.Tittle}
              </h1>
              <p className="leading-8 text-base">{Video.Description}</p>
            </div>
            <video
              src={Video.VideoSrc}
              controls
              className="shadow-lg shadow-black/15"
            />
          </div>
        ))}
      </Container>
    </>
  )
}
