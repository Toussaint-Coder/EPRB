import RotatedContainer from "../../Components/RotatedContainer"

export default function HeroSection() {
  return (
    <>
      <div className="w-full min-h-[500px] flex justify-center items-center heroSection transform -translate-y-0 relative overflow-hidden duration-300">
        <div className="max-w-lg flex flex-col gap-10 xxs:px-4 sm:px-0">
          <div>
            <h1 className="text-white xs:text-3xl font-semibold duration-200 xxs:text-2xl ">
              SOYEZ LE BIENVENUE A L’EGLISE <br /> PROTESTANTE
              <b className="-tracking-[8px]">-------------</b>
              {"   "} EPRB
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-lg font-semibold">
              EGLISE PROTESTANTE REFORMEE DU BURUNDI
            </h2>
            <p className="text-white text-sm">
              Nous sommes une communauté de foi dédiée à l'amour et au soutien
              mutuel. Rejoignez-nous pour célébrer et grandir ensemble dans la
              grâce divine.
            </p>
          </div>
        </div>
        <RotatedContainer />
      </div>
    </>
  )
}
