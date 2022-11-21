function Story(props) {
	return (
    <div class="story">
      <div class="imagem">
        <img src={props.FotoStory} />
      </div>
      <div class="usuario">{props.NomeStory}</div>
    </div>
	);
}

export default function Stories() {
  const items = [
    { FotoStory: "assets/img/9gag.svg", NomeStory: "9gag" },
    { FotoStory: "assets/img/meowed.svg", NomeStory: "meowed" },
    { FotoStory: "assets/img/barked.svg", NomeStory: "barked" },
    { FotoStory: "assets/img/nathanwpylestrangeplanet.svg",NomeStory: "nathanwpylestrangeplanet"},
    { FotoStory: "assets/img/wawawicomics.svg", NomeStory: "wawawicomics" },
    { FotoStory: "assets/img/respondeai.svg", NomeStory: "respondeai" },
    { FotoStory: "assets/img/filomoderna.svg", NomeStory: "filomoderna" },
    { FotoStory: "assets/img/memeriagourmet.svg", NomeStory: "memeriagourmet"}
  ];

  return (
    <div class="stories">
      {items.map((item) => (
        <Story FotoStory={item.FotoStory} NomeStory={item.NomeStory} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

