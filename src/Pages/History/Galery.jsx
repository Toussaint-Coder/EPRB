import Container from "../../Components/Container"
import GPhoto1 from "../../assets/img1.jpg"
import GPhoto2 from "../../assets/img2.jpg"
import GPhoto3 from "../../assets/img3.jpg"
import GPhoto4 from "../../assets/img4.jpg"
import lightGallery from "lightgallery"
import "lightgallery/css/lightgallery.css"
import lgThumbnail from "lightgallery/plugins/thumbnail"
import "lightgallery/css/lg-thumbnail.css"
import lgZoom from "lightgallery/plugins/zoom"
import "lightgallery/css/lg-zoom.css"
import { useEffect, useRef } from "react"

export default function Gallery() {
  const galleryRef = useRef(null)
  const Photos = [
    {
      key: 0,
      src: GPhoto1,
    },
    {
      key: 1,
      src: GPhoto2,
    },
    {
      key: 2,
      src: GPhoto3,
    },
    {
      key: 3,
      src: GPhoto4,
    },
  ]
  useEffect(() => {
    const galleryInstance = lightGallery(galleryRef.current, {
      plugins: [lgThumbnail, lgZoom],
      speed: 500,
    })

    return () => {
      galleryInstance.destroy()
    }
  }, [])

  return (
    <Container>
      <div
        ref={galleryRef}
        className="gallery flex lg:justify-between lg:items-stretch xxs:flex-col lg:flex-row md:items-center md:justify-center gap-8 xs:px-0 xxs:justify-center xxs:items-center  xl:px-0"
      >
        {Photos.map((Photo) => {
          return (
            <div
              key={Photo.key}
              className="overflow-hidden h-48 shadow-xl shadow-black/15 p-2"
            >
              <a href={Photo.src}>
                <img src={Photo.src} alt="Image 1" />
              </a>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
