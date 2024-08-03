import { useEffect, useState } from 'react'
import texts from '../../config/texts.json' assert { type: 'json' }
import Link from 'next/link'
import { Bagded } from '../Bagded'

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

export const GitHub = () => {
  const [projects, setProjects] = useState<projectProps>({
    erro: false,
    loading: true,
    data: [],
  })

  const [text, setText] = useState(texts[2].stack)
  useEffect(() => {
    fetchProject()
  }, [])

  const fetchProject = async () => {
    setProjects(prevOld => ({ ...prevOld, loading: true }))
    const res = await fetch('https://api.github.com/users/alissonpeixer/repos?direction=desc')
      .then(e => e.json())
      .then(data => {
        setProjects(prevOld => ({ ...prevOld, data }))
      })
      .catch(erro => {
        setProjects(prevOld => ({ ...prevOld, erro: true, loading: false }))
      })
  }

  return (
    <>
      {projects.loading && (
        <section
          id="github"
          className="snap-start min-h-screen flex items-center px-12 fade_class_header "
        >
          <div className="transition-all xl:container xl:mx-auto  items-center  flex flex-col xl:flex-row fade_class mt-14 mb-20 lg:m-0  ">
            <div className="gap-5 text-center flex flex-col justify-center xl:text-start xl:w-1/2 xl:pl-9">
              <Bagded label='GitHub' textSize='2xl'/>
              <div>
                <h1 className="text-2xl xl:text-5xl font-bold text-shadow-xl">
                  São mais de {projects?.data.length} projetos que tenho em meu
                  GitHub
                </h1>
                <h2 className="text-1xl xl:text-3xl">
                  veja alguns desles aqui:
                </h2>
              </div>
            </div>
            <div className="flex-1 flex pt-8 pb-8 items-center justify-center lg:justify-start  gap-3 flex-wrap ">
              {projects?.data.map((item, id): any => (
                id <= 6 ? (
                  <div
                  className="transition-all rounded-xl h-1/2 px-3 bg-radind  text-center hover:scale-110"
                  key={id}
                >
                  <Link
                    className="text-black"
                    href={item.svn_url}
                    target="_blank"
                  >
                    {item.name}
                  </Link>
                </div>
                ) : id === 7 && (
                  <div
                    className="transition-all rounded-xl h-1/2 px-3  text-center hover:scale-110 bg-emerald-200"
                    key={id}
                  >
                    <Link
                      className="text-black"
                      href="https://github.com/alissonpeixer?tab=repositories"
                      target="_blank"
                    >
                      Ver mais...
                    </Link>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
