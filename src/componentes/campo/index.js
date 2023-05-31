//import { useState } from "react"
import "./campo.css"

const Campo = (props) => {

    const placeholderMod = `${props.placeholder}...`

    // Destructuración
    const { type = "text" } = props

    const manejarCambio = (e) => { 
        /* console.log('cambio', e.target.value); */
        props.setValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label> {props.titulo} </label>
        <input
            placeholder={placeholderMod}
            required={props.required}
            value={props.valor}
            onChange = {manejarCambio}
            type = {type}
        />
    </div>
}

export default Campo;