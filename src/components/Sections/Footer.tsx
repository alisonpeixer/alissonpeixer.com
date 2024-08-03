import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Logos } from "../Svg/Logos"

export const Footer = () => {

    const buttonStyle = "transition-all text-base cursor-pointer hover:bg-emerald-600 flex gap-2 items-center p-2 rounded-xl";

    return (
        <footer id="footer" className="snap-center bg-grad px-20 py-5  rounded-t-2xl border-t border-emerald-600">
            <div className="container space-y-8 flex  flex-col items-center text-center lg:block lg:text-start">
                <div className="space-y-2">
                    <a href="" >
                        <Logos width="200" height="70" logo="alissonpeixer" />
                        <h3 className="text-[12px] font-light">Desenvolverdor FullStack</h3>
                    </a>
                    <div className="space-x-6 font-light flex">
                        <a className={buttonStyle} href="https://br.linkedin.com/in/alissonpeixer" target="_blank" rel="noreferrer" > <FaLinkedin /> Linkedin</a>
                        <a className={buttonStyle} href="https://github.com/alissonpeixer" target="_blank" rel="noreferrer" > <FaGithub /> GitHub</a>
                    </div>
                </div>
                <div className="flex-1 flex items-center">
                    <h3 className="text-[12px] font-light">© {(new Date()).getFullYear()} Alisson Peixer. Todos os direitos reservados</h3>
                </div>
            </div>
        </footer>
    )
}