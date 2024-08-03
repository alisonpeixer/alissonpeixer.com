import Link from 'next/link'
import { useState } from 'react'

import { Bagded } from '../Bagded'
import texts from '../../config/texts.json' assert { type: 'json' }
import { Logos } from '../Svg/Logos'

type gitApi = {
  svn_url: string
  name: string
  id: string
  topics: []
}

type projectProps = {
  erro: boolean
  loading: boolean
  data: gitApi[]
}

export const Project = () => {

  const [isProtjects, setProtjects] = useState(texts[3].projects)

  return (
    <section
      id="project"
      className="snap-start min-h-screen flex items-center px-12 fade_class_header "
    >
      <div className="transition-all container xl:mx-auto  items-center  flex flex-col xl:flex-row fade_class mt-28 lg:mt-0">
        <div className="mt-14  gap-5 text-center flex flex-col justify-center xl:text-start xl:w-1/2 xl:pl-9 xl:mt-0">
          <Bagded label='Projetos' textSize='xl'/>
          <div className='space-y-3'>
            <h1 className="text-3xl xl:text-5xl font-bold text-shadow-xl">
              São {isProtjects?.length} projetos que tenho em deploy
            </h1>
            <h2 className="text-1xl xl:text-3xl">
              veja algum desles aqui!
            </h2>
          </div>
        </div>
        <div className="flex-1 flex flex-col pt-8 pb-8  justify-around xl:justify-start lg:flex-row g:items-center  gap-3 flex-wrap">
          {
            isProtjects?.map((item,index)=> (
              <a key={index} className='transition-all p-4 h-auto min-h-[250px]  space-y-5 border border-emerald-600/[0.1] rounded-2xl hover:border-emerald-600 lg:w-[40%]' href={item.url} target='_blank' rel="noreferrer">
                <span className='bg-radind p-1 rounded-2xl text-sm text-black w-auto'>{item.satack}</span>
                <div className=''>
                  <Logos width='130' height='100' logo={item.name.toLowerCase()}/>
                  <h2>{item.description}</h2>
                </div>

              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}
