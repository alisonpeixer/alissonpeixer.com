import { ProfileInlus } from './assets/profileInlus'
import texts from '../../config/texts.json' assert { type: 'json' }
import { useState } from 'react'
export const Bio = () => {
  const [text, setText] = useState(texts[1].bio);

  const fnGetYeats = (): string => {

    const dataReferencia = new Date('2018-01-19');
    const dataAtual = new Date();
    const diferencaEmMilissegundos = (dataAtual.getTime() - dataReferencia.getTime());
    const anosPassados = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);


    return anosPassados.toFixed(0);
  }



  return (
    <section
      id="bio"
      className="snap-center min-h-screen flex items-center px-12 shadow-2xl "
    >
      <main className="transition-all lg:container lg:mx-auto h-1/2   items-center  flex flex-col lg:flex-row fade_class">
        <div className="flex-1 hidden lg:flex items-center justify-center ">
          <ProfileInlus />
        </div>
        <div className="  gap-9 text-center flex flex-col justify-center lg:text-start lg:pl-9 lg:w-1/2">
          <div className=" flex items-center justify-center h-16 lg:justify-start lg:w-1/2">
            <div className="rounded-xl  px-3 py-2 bg-radind  text-center">
              <h4 className=" text-black text-xl text-shadow-lg">{text?.h4}</h4>
            </div>
          </div>

          <div className="text-start">
            <h1 className="text-3xl lg:text-5xl font-bold text-shadow-xl">
              {text?.h1}
            </h1>
            <p className=" lg:text-lg">{text?.p.replace("%YEARS%", fnGetYeats())}</p>
          </div>
        </div>
      </main>
    </section>
  )
}
