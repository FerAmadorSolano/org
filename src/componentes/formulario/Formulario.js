import { useState } from "react";
import "./Formulario.css"
import Campo from "../campo";
import ListaOpciones from "../listaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
    const [nombre, setNombre] = useState('')
    const [puesto, setPuesto] = useState('')
    const [foto, setFoto] = useState('')
    const [equipo, setEquipo] = useState('')

    const [titulo, setTitulo] = useState('')
    const [color, setColor] = useState('')

    const { registrarColab, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColab(datosAEnviar);

    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorP: color})
        
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>

            <h2> Rellena el formulario para crear el colaborador. </h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                setValor={setNombre}
            />

            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                setValor={setPuesto}
            />

            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                setValor={setFoto}
            />

            <ListaOpciones
                valor={equipo}
                setEquipo={setEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>

            <h2> Rellena el formulario para crear el equipo </h2>
            <Campo
                titulo="Título"
                placeholder="Ingresar título"
                required
                valor={titulo}
                setValor={setTitulo}
            />

            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                setValor={setColor}
                type = "color"
            />

            <Boton> Registrar equipo </Boton>
        </form>
    </section>
}

export default Formulario;