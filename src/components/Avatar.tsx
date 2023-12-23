type AvatarProps = {
    img: string
}

export const Avatar = ({img}: AvatarProps) => {
  return (
    <div className="flex items-center justify-center h-8 w-8 flex-col">
        {/* <span className="text-white font-bold text-lg">JD</span> */}
        <img src={img} alt="avatar" className="h-full w-full object-cover rounded-full" />
    </div>
  )
}
