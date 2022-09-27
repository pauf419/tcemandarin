import { useState, useEffect, useRef } from 'react'
import cl from './index.module.sass'

export default function Inp({...props}) {

    const [content, setContent] = useState(null)
    const [type, setType] = useState(props.type)

    const preChange = (e) => {
        setContent(e.target.value)
        props.onChange(e)
    }

    const ref = useRef()

    useEffect(() => {
      ref.current.value = props.value
      if(props.value === '') return setContent(null)
    }, [props.value])

    return (
        <div className={`Input_container ${cl.Input_container} ${props.default ? cl.Default : cl.Margin}`}>
            <div className={cl.Padding_inner}>
                <label className={`${cl.Label} ${content ? cl.Active : ""}`}>
                    <span className={cl.Span}>{props.placeholder}</span>
                    <input
                        onChange={preChange}
                        className={cl.Input}
                        name={props.name}
                        type={type}
                        ref={ref}
                        required={props.required}
                    />
                </label>
                <div className={cl.Spacer}>
                    {
                        props.type === 'password' && content
                            &&
                            <span>
                                <button className={cl.Spacer_viewer} type="button" onClick={() => setType(type === 'password' ? 'text' : 'password')}>
                                    {
                                        type === 'password'
                                            ?
                                            'Показать'
                                            :
                                            'Скрыть'
                                    }
                                </button>
                            </span>
                    }
                </div>
            </div>
        </div>
    )
}
