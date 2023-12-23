
type SearchBarProps = {
    placeholder?: string
}

export const SearchBar = ({placeholder}: SearchBarProps) => {
  return (
    <span className="flex grow">
      <input type="text" placeholder={placeholder} className="rounded grow px-2" />
    </span>
  )
}
