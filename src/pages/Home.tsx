import { Navbar } from "../components/Navbar"
import { SearchBar } from "../components/SearchBar"

export const Home = () => {
  return (<>
    <Navbar />
    <h1 className="my-8">TCG Tracker</h1>
    <div className="w-1/2 mx-auto">
      <SearchBar placeholder="Search for a card" />
    </div>
  </>)
}
