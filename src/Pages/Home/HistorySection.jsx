import Container from "../../Components/Container"
import Button from "../../Components/Button"
export default function HistorySection() {
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
        <Container className="heroSection min-h-96">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            asperiores aspernatur, sapiente laudantium nemo hic quas porro
            aliquid mollitia voluptatem temporibus et, incidunt qui est fuga
            dolorum fugit rem illum dolore voluptas. A, quo repellat rem
            nesciunt porro saepe sit suscipit vitae in quaerat eum cupiditate
            beatae officia velit corrupti eligendi esse fuga sunt quis, facilis
            numquam recusandae corporis dolorem magnam? Distinctio saepe
            molestiae rerum sit deleniti excepturi.
          </p>
        </Container>
      </div>
    </>
  )
}
