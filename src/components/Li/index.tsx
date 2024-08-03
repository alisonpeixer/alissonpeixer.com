import Link, { LinkProps } from 'next/link'
import * as React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
interface Porps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  body: string
  customStyle?: string
}

export const Li = ({ body, customStyle, ...pres }: Porps) => {
  return (
    <li className={`transition-all hover:text-emerald-300 cursor-pointer `}>
      <button {...pres}>{body}</button>
    </li>
  )
}
