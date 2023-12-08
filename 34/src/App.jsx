import Navbar from "./componets/Navbar"
import Hero from "./componets/Hero"

export default function App() {
  return (
    <main className>
      <section className="bg-pitch-blk">
        <Navbar/>
      </section>
      <section className="bg-pitch-blk">
        <Hero/>
      </section>
    </main>
  )
}