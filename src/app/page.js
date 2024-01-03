import NavBar from "./components/NavBar"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 cursor-custom hover:cursor-custom">
      <NavBar></NavBar>
      <Hero></Hero>
    </main>
  )
}
