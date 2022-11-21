export default function Sugestao(props) {
    return (
      <div class="sugestao">
        <div class="usuario">
          <img src={props.perfilSugestao} />
          <div class="texto">
            <div class="nome">{props.nomeSugestao}</div>
            <div class="razao">{props.razaoSugestao}</div>
          </div>
        </div>
  
        <div class="seguir">Seguir</div>
      </div>
    );
  }
  