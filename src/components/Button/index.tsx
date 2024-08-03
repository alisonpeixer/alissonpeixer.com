export const Button = ({ body, icon, ...pres }: any) => {
  return (
    <a {...pres}>
      <button className="transition-all flex items-center h-full gap-2 border py-2 px-4 rounded-2xl shadow-2xl  border-zinc-300 opacity-60 hover:opacity-100">
        <div className="w-6 h-6">{icon}</div>
        {body}
      </button>
    </a>
  )
}
