import "./Equipo.css"
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    //Destructuración
    const { colorP, titulo, id } = props.datos
    const { colaboradores, eliminarColab, actualizarColor, like } = props

    const obj = {
        backgroundColor: hexToRgba(colorP, 0.2)
    }

    const objB = {
        borderColor: colorP
    }

    return <>
        {
            //Ternario (condición)
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={colorP}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id);
                        
                    }}
                />
                <h3 style={objB}> {titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorP = {colorP}
                            eliminarColab = {eliminarColab}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;