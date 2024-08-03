interface props {
  body: any
  id: number
}

export const ContainerStack = ({ id, body }: props) => {
  return (
    <div className="rounded-xl h-1/2 px-3 bg-radind  text-center">
      <h4 className=" text-black text-shadow-lg">{body[id]}</h4>
    </div>
  )
}
