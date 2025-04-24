'use client'
import { useRouter } from 'next/navigation'

//export const metadata = {
//  title: 'Los Reales',
//}

function AboutPage() {
  const router = useRouter()
  return (
    <section>
      <h1>AboutPage</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus nobis
        ratione magni accusamus minima, quidem quae laudantium ab vel. A ratione
        architecto quisquam officiis est, ipsum accusantium ipsam hic cumque
        eius esse voluptate ex corrupti ipsa asperiores? Pariatur nemo fuga nisi
        sed sint perspiciatis sunt autem incidunt aut, harum veritatis inventore
        nostrum iusto molestiae! Consequatur, et dicta obcaecati vero quibusdam
        ut veritatis laboriosam repellat corrupti, possimus sunt labore. Ipsam
        odit pariatur qui. Suscipit voluptatem nostrum expedita perferendis!
        Consequuntur, dolorum autem. Consectetur magnam incidunt labore saepe
        numquam dignissimos architecto sapiente eaque quos veritatis corrupti
        voluptatibus non doloremque beatae quaerat, ab delectus?
      </p>

      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert('Executing Code')
          router.push('/')
        }}
      >
        Click
      </button>
    </section>
  )
}

export default AboutPage
