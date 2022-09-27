import cl from './index.module.sass'

export default function RoundBtn({children, ...props}) {
  return <button {...props} className={cl.RoundBtn}> { children } </button>
}
