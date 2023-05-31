import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)

  const [colaboradores, actualizarColab] = useState([{
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])

  const [equipos,actualizarEquipos] = useState([
    {
      id:uuid(),
      titulo: "Programación",
      colorP:"#57C278",
      colorS: "#D9F7E9"
    },
    
    {
      id:uuid(),
      titulo: "Front End",
      colorP:"#82CFFA",
      colorS: "#E8F8FF"
    },

    {
      id:uuid(),
      titulo: "Data Science",
      colorP:"#A6D157",
      colorS: "#F0F8E2"
    },

    {
      id:uuid(),
      titulo: "Devops",
      colorP:"#E06B69",
      colorS: "#FDE7E8"
    },

    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorP:"#DB6EBF",
      colorS: "#FAE9F5"
    },

    {
      id:uuid(),
      titulo: "Móvil",
      colorP:"#FFBA05",
      colorS: "#FFF5D9"
    },

    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorP:"#FF8A29",
      colorS: "#FFEEDF"
    }
])

  /* Ternario --> Condición ? (si es verdadero) seMuestra : noSeMuestra */
  /* condicion && seMuestra */

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador
  const registrarColab = (colaborador) => {
    //Spread operator -> Es una copia a la que se le agreg algún valor
    actualizarColab([...colaboradores, colaborador])
  }

  // Eliminar colaborador
  const eliminarColab = (id) => {
    /* console.log('Eliminar colaborador',id); */
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColab(nuevosColaboradores);
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log('Actualizar: ', color, id);
    const equiposActualizados = equipos.map((equipo) => {
        if(equipo.id === id){
          equipo.colorP = color;
        }
        return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  // Dar gustar
  const like = (id) =>{
    /* console.log("like", id); */
    const colabActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = ! colaborador.fav
      }
      return colaborador
    })
    actualizarColab(colabActualizados)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
        equipos = {equipos.map((equipo)=> equipo.titulo)} 
        registrarColab = {registrarColab} 
        crearEquipo = {crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo)=> <Equipo 
          datos ={equipo} 
          key={equipo.titulo} 
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColab = {eliminarColab}
          actualizarColor = {actualizarColor}
          like={like}
          /> 
        )
      }

      <Footer />
    </div>
  );
}

export default App;
