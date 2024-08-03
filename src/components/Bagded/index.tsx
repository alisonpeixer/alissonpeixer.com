interface Props{
    label: string;
    textSize?:  'base' | 'sm' |  'lg' |  'xl' | '2xl' | '3xl' | '5xl' |'6xl' |'7xl' | '8xl'
}


export const Bagded = ({label, textSize}:Props) => {
    return (
        <div className=" flex items-center justify-center h-16 xl:justify-start xl:w-1/2">
        <div className="rounded-2xl  px-3 py-2 bg-radind  text-center">
          <h4 className={'text-black  text-shadow-lg ' + `text-${textSize || 'base'}` }>
            {label}
          </h4>
        </div>
      </div>

    )
}
