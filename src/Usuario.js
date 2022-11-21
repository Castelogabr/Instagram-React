import React from "react";
import {useState}  from "react";

export default function Usuario() {

  const fotoInicial = "https://thumbs.dreamstime.com/z/imagen-masculina-an%C3%B3nima-del-perfil-32796656.jpg"

  const [nome, setNomeUsuario] = useState("Usuario") 
  const [foto, setFoto] = useState(fotoInicial)

  function trocarNome(){

      const Usuario = prompt("Digite o seu nome!")
      setNomeUsuario(Usuario) 
  }
  
  function trocarFoto(){
      const foto = prompt("Coloque o url de sua foto!")
      setFoto(foto)
  }

  return (
          <div data-test="user"  class="usuario">
              <img data-test="profile-image" src={foto} onClick={trocarFoto} />
              <div class="texto">
                  <strong atributo data-test="name" >{nome}</strong>
                  <div>
                      Trocar Nome
                      <ion-icon data-test="edit-name" name="pencil" onClick={trocarNome} ></ion-icon>
                  </div>
              </div>
          </div>


     
  )
}