import React from "react";
import {useState}  from "react";


function Post(props) {
  const [save, setSave] = useState("bookmark-outline");
  const [button, setButton] = useState("heart-outline");
  const [likes, setLike] = useState(Number(props.numeroCurtidas));

  function like() {
    if (button === "heart-outline") {
      setButton("heart");
      setLike(likes + 0.001);
    } else {
      setButton("heart-outline");
      setLike(likes - 0.001);
    }
}

  function salvo() {
    if (save === "bookmark-outline") {
        setSave("bookmark");
    } else {
        setSave("bookmark-outline");
    }
}


	return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.perfilPostou} />
          {props.nomePostou}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.fotoPostada} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
          <ion-icon data-test="like-post" onClick={like} name={button}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
          <ion-icon data-test="save-post" onClick={salvo} name={save}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.perfilCurtiu} />
          <div class="texto">
            Curtido por <strong>{props.nomeCurtiu}</strong> e{" "}
            <strong >outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
	);
}


export default function Posts() {
  const items = [
    {
      perfilPostou: "assets/img/meowed.svg",
      nomePostou: "meowed",
      fotoPostada: "assets/img/gato-telefone.svg",
      perfilCurtiu: "assets/img/respondeai.svg",
      nomeCurtiu: "respondeai",
      numeroCurtidas: "101.523"
    },
    {
      perfilPostou: "assets/img/barked.svg",
      nomePostou: "barked",
      fotoPostada: "assets/img/dog.svg",
      perfilCurtiu: "assets/img/adorable_animals.svg",
      nomeCurtiu: "adorable_animals",
      numeroCurtidas: "99.158"
    }
  ];
  return (
    <div data-test="post" class="posts">
      {items.map((item) => (
        <Post
          perfilPostou={item.perfilPostou}
          nomePostou={item.nomePostou}
          fotoPostada={item.fotoPostada}
          perfilCurtiu={item.perfilCurtiu}
          nomeCurtiu={item.nomeCurtiu}
          numeroCurtidas={item.numeroCurtidas}
        />
      ))}
    </div>
  );
}
