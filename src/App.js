import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo:'UX y Diseño',
    foto:'https://github.com/LetyWood.png',
    nombre:'Lety Wood',
    puesto: 'Estudiante',
    fav:true
  },
  {
    id: uuid(),
    equipo:'Front End',
    foto:'https://github.com/harlandlohora.png',
    nombre:'Harland Lohora',
    puesto: 'Dev. FullStack',
    fav:false
  }
  ,
  {
    id: uuid(),
    equipo:'Innovación y Gestión',
    foto:'https://github.com/JoseDarioGonzalezCha.png',
    nombre:'Jose Gonzalez',
    puesto: 'Instructor',
    fav:true
  },
  {
    id: uuid(),
    equipo:'Programación',
    foto:'https://github.com/christianpva.png',
    nombre:'Christian Velasco',
    puesto: 'Instructor',
    fav:false
  },
  {
    id: uuid(),
    equipo:'Móvil',
    foto:'https://github.com/JeanmarieAluraLatam.png',
    nombre:'Jeanmarie Quijada',
    puesto: 'Instructora en Alura Latam',
    fav:false
  }
])

const [equipos, actualizarEquipos] = useState ([

  {
    id: uuid(),
    titulo: 'Programación',
    colorSecundario: 'var(--Color-Fondo-Programacion)',
    colorPrimario: 'var(--Color-Destaques-Programacion)'
  },
  {
    id: uuid(),
    titulo:'Front End',
    colorSecundario  :'var(--Color-Fondo-FrontEnd)',
    colorPrimario :'var(--Color-Destaques-FrontEnd)'
  },
  {
    id: uuid(),
    titulo:'Data Science',
    colorSecundario :'var(--Color-Fondo-DataScience)',
    colorPrimario :'var(--Color-Destaques-DataScience)'
  },
  {
    id: uuid(),
    titulo:'Devops',
    colorSecundario :'var(--Color-Fondo-Devops)',
    colorPrimario :'var(--Color-Destaques-Devops)'
  },
  {
    id: uuid(),
    titulo:'UX y Diseño',
    colorSecundario  :'var(--Color-Fondo-UXyDiseño)',
    colorPrimario :'var(--Color-Destaques-UXyDiseño)'
  },
  {
    id: uuid(),
    titulo:'Móvil',
    colorSecundario :'var(--Color-Fondo-Móvil)',
    colorPrimario :'var(--Color-Destaques-Móvil)'
  },
  {
    id: uuid(),
    titulo:'Innovación y Gestión',
    colorSecundario   :'var(--Color-Fondo-InnovaciónyGestión)',
    colorPrimario :'var(--Color-Destaques-InnovaciónyGestión)'
  }   
  
])


  //Ternario --> condicion ? seMuestra : noSeMuestra
  //const manejarClick = () => actualizarMostrar(!mostrarFormulario)
  const cambiarMostrar = () => 
  {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registar Colaborador

    const registrarColaborador = (colaborador) => {
        console.log('Nuevo colaborador', colaborador)
        //Spread Operator
        actualizarColaboradores([...colaboradores, colaborador])
    }

    //Eliminar colaborador
    const eliminarColaborador = (id) => {
      console.log('Eliminar colaborador', id)
      const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
      actualizarColaboradores(nuevosColaboradores)
    }

    //Actualizar color de equipo
      const actualizarColor = (color, id) => {
        console.log('Actualizar ', color, id)
        const equiposActualizados = equipos.map((equipo) => {
          if (equipo.id === id){
            equipo.colorPrimario = color
          }
          return equipo
        })

        actualizarEquipos(equiposActualizados)
      }

      //Crear equipo
      const crearEquipo = (nuevoEquipo) => {
        console.log(nuevoEquipo)
        actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
      }

      const like = (id) => {
        console.log('like', id)
        const colaboradoresActualizados = colaboradores.map((colaborador) =>{
            if(colaborador.id === id){
              colaborador.fav = !colaborador.fav
            }
            return colaborador
        })
        actualizarColaboradores(colaboradoresActualizados)
      }

return (
    <div>
      <Header />
      {/* { mostrarFormulario ? <Formulario /> : <></> }  */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
         colaboradores={colaboradores.filter (colaborador => colaborador.equipo ===equipo.titulo) } 
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }

      <Footer />

      </div>
  );
}

export default App;
