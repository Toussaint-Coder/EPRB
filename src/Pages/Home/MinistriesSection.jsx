import Container from "../../Components/Container"
import Button from "../../Components/Button"
import "leaflet/dist/leaflet.css"
import { Suspense } from "react"

export default function Ministries() {
  return (
    <>
      <div className="w-full flex flex-col gap-10" id="Ministries">
        <div className="xxs:px-4 xl:px-0">
          <Container className="flex justify-between items-center h-10 border-l-2 border-primary ">
            <div className="pl-4">
              <h2 className="text-xl text-primary">Notre Ministeres</h2>
            </div>
            <div>
              <a
                href="https://en.wikipedia.org/wiki/%C3%89glise_Protestante_Reform%C3%A9e_du_Burundi"
                target="_blank"
                className="text-primary underline"
              >
                <Button className="text-xs">Voir Sur la Carte</Button>
              </a>
            </div>
          </Container>
        </div>
        <div className="w-full min-h-screen overflow-hidden border relative flex justify-center items-center">
          <Suspense
            fallback={<p className="font-semibold">Loadind the map...</p>}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.0308883079174!2d29.398860873856126!3d-3.3425306966322097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c183d53b9be527%3A0x21b5fcb94af5f4ff!2sEPRB%20Kamenge!5e0!3m2!1sfr!2sbi!4v1720155078478!5m2!1sfr!2sbi"
              className="w-full h-screen border-0"
              allowFullScreen="false"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Suspense>
        </div>
      </div>
    </>
  )
}
