import { Avatar } from "./Avatar"
import { SearchBar } from "./SearchBar"

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-500 h-10">
      <div className="flex gap-4 w-1/2 px-4">
        <p className="text-white w-1/4">TCG Tracker</p>
        <SearchBar />
      </div>
      <div className="flex flex-1 items-center gap-4 justify-end text-white pr-2">
        <p>Joey</p>
        <Avatar img="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/8d87bc26533fde7f-1200x675.jpg" />
      </div>
    </div>
  )
}
