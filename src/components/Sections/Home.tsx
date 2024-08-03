import Image from 'next/image'
import { useEffect, useState } from 'react'
import texts from '../../config/texts.json' assert { type: 'json' }

export const Home = () => {
  const [text, setText] = useState(texts[0].home)
  return (
    <section
      id="home"
      className="h-screen fade_class bg-grip-particle bg-right-top bg-no-repeat pt-40 shadow-2xl snap-start lg:pt-10"
    >
      <div className="transition-all gap-3 lg:container lg:mx-auto  min-h-[90vh]  items-center  justify-center flex flex-col lg:flex-row fade_class">
        <div className="xl:w-1/2  gap-9 text-center flex flex-col justify-center  lg:text-start lg:pl-9 h-full">
          <div className=" flex items-center justify-center h-12 lg:justify-start lg:w-1/2">
            <div className="rounded-xl h-1/2 px-3 bg-radind  text-center">
              <h4 className=" text-black text-shadow-lg">{text?.slack}</h4>
            </div>
          </div>

          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-shadow-xl">
              {text?.h1}
            </h1>
            <h2 className="text-2xl lg:text-3xl">{text?.h2}</h2>
          </div>
        </div>

        <div className="xl:flex-1 flex items-center justify-center">
          <div className="h-96 flex items-center">
            <Image
              width={320}
              height={160}
              className="lg:w-96  max-w-[400px]  drop-shadow-2xl"
              src={text?.picUrl || ''}
              alt={text?.picAlt || ''}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
