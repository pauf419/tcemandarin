import cl from './index.module.sass'

export default function SvgBtn({ children, ...props }) {
  return <button className={cl.SvgBtn}> <a href={props ? props.href : '#'}> { children } </a> </button>
}
