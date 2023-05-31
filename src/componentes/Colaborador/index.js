import "./Colaborador.css"
import { TiUserDelete } from "react-icons/ti"
import { BsBalloonHeart, BsBalloonHeartFill } from "react-icons/bs"

const Colaborador = (props) => {
    const {nombre, puesto, foto, id, fav} = props.datos
    const { colorP, eliminarColab, like } = props
    //Condición ? (si es verdadero) seMuestra : noSeMuestra
    return <div className="colaborador">
        <TiUserDelete className="eliminar" onClick={()=> eliminarColab(id)} />
        <div className = "encabezado" style={{backgroundColor: colorP}}>
            <img src={foto} alt={nombre}  />
        </div>
        <div className = "info" >
            <h4> {nombre} </h4>
            <h5>{puesto}</h5>
            {fav ? <BsBalloonHeartFill color="red" onClick={() => like(id)} /> :  <BsBalloonHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador