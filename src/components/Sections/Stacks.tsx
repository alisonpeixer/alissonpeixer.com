import { useState } from 'react'
import { ContainerStack } from '../../components/Container/Stacks'
import texts from '../../config/texts.json' assert { type: 'json' }
const stacks = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Python',
  'NodeJS',
  'React',
  'React Native',
  'Prisma',
  'SQLite',
]

export const Stacks = () => {
  const [text, setText] = useState(texts[2].stack)

  return (
    <section
      className="bg-grip-particle bg-right bg-no-repeat  snap-start min-h-screen flex items-center px-12 fade_class_header backdrop-blur-xl  "
      id="stack"
    >
      <main className="transition-all lg:container lg:mx-auto  items-center  flex flex-col lg:flex-row fade_class">
        <div className="  gap-5 text-center flex flex-col justify-center lg:text-start lg:w-1/2 lg:pl-9">
          {/* <div className=" flex items-center justify-center h-12 lg:justify-start lg:w-1/2">
            <div className="rounded-xl h-1/2 px-3 bg-radind  text-center">
              <h4 className=" text-black text-shadow-lg">Stacks</h4>
            </div>
          </div> */}
          <div className=" flex items-center justify-center  h-16 lg:justify-start lg:w-1/2">
            <div className="rounded-xl  px-3 py-2 bg-radind  text-center">
              <h4 className=" text-black text-xl text-shadow-lg">{text?.h4}</h4>
            </div>
          </div>

          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-shadow-xl">
              {text?.h1}
            </h1>
            <h2 className="text-2xl lg:text-3xl">{text?.h2}</h2>
          </div>
        </div>

        <div className="flex-1 flex pt-8 pb-8 items-center justify-center lg:justify-end  gap-3 flex-wrap">
          {Object.keys(text?.listStacks || '').map((key, index) => (
            <ContainerStack key={index} id={index} body={text?.listStacks} />
          ))}
        </div>
      </main>
    </section>
  )
}
