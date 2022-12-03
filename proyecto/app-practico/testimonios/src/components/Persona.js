import React from "react";
import Testimonio from "./Testimonios";


function Persona(){
  return (
    <>
      <div>
        <Testimonio
        nombre = 'Capitan America'
        pais = 'EEUU'
        imagen = 'cap-america'
        cargo = 'Lider'
        equipo = 'Avager'
        texto = 'Todo por la justicia, luchare aunque me cueste la vida, mi felicidad es el bien de la humanidad. Amor por el que quiere un mejor mañana'
        heroe = "foto capitan america" />
      </div>
      <div>
      <Testimonio
        nombre = 'Thor'
        pais = 'Asgard'
        imagen = 'thor'
        cargo = 'Dios del Trueno'
        equipo = 'Avager'
        texto = 'he perdido todo lo que he querido, he tenido que luchar infinas guerras. seguire hasta el ultimo dia y sere el mas fuerte si debo cerlo, por mi amada, y por todos aquellos que tienen esperanza'
        heroe= "foto thor" />
      </div>
      <div>
      <Testimonio
        nombre = 'wolverine'
        pais = 'Canada'
        imagen = 'wolverine'
        cargo = 'Miembro de X-men'
        equipo = 'X-men'
        texto = 'luchare con quien tenga que luchar, dare lo mejor de mi, he conocido el amor y el dolor. "no te metas en mi camino!"'
        heroe = 'foto wolverine' />
      </div>
    </>
)};

export default Persona;