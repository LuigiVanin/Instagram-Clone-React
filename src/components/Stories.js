export default function Stories() {
    const stories = [
        { text: "9gag", image: "assets/img/9gag.svg" },
        { text: "meowed", image: "assets/img/meowed.svg" },
        { text: "barked", image: "assets/img/barked.svg" },
        {
            text: "nathanwpylestrangeplanet",
            image: "assets/img/nathanwpylestrangeplanet.svg",
        },
        { text: "wawawicomics", image: "assets/img/wawawicomics.svg" },
        { text: "respondeai", image: "assets/img/respondeai.svg" },
        { text: "filomoderna", image: "assets/img/filomoderna.svg" },
        { text: "memeriagourmet", image: "assets/img/memeriagourmet.svg" },
    ];
    return (
        <div className="stories">
            {stories.map((item) => {
                return <Story text={item.text} image={item.image} />;
            })}
        </div>
    );
}

function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.image} alt={props.text} />
            </div>
            <div className="usuario">{props.text}</div>
        </div>
    );
}
