import cl from './index.module.sass'

export default function Btn({children, variant = 'filled', ...props}) {
  return (
    <button {...props} className={`${cl.Btn} ${variant === 'filled' ? cl.Filled : cl.Rounded}`}>
      {children}
    </button>
  )
}
