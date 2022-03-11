export default function SideBar() {
    const users = [
        {
            name: "bad.vibes.memes",
            image: "assets/img/bad.vibes.memes.svg",
            status: "Segue você",
        },
        {
            name: "chibirdart",
            image: "assets/img/chibirdart.svg",
            status: "Segue você",
        },
        {
            name: "razoesparaacreditar",
            image: "assets/img/razoesparaacreditar.svg",
            status: "Novo no Instagram",
        },
        {
            name: "adorable_animals",
            image: "assets/img/adorable_animals.svg",
            status: "Segue você",
        },
        {
            name: "smallcutecats",
            image: "assets/img/smallcutecats.svg",
            status: "Segue você",
        },
    ];
    return (
        <div className="sidebar">
            <User nick="catanacomics" username="Catana" />

            <div className="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {users.map((item) => {
                    return (
                        <Suggestion
                            name={item.name}
                            image={item.image}
                            status={item.status}
                        />
                    );
                })}
                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                </div>

                <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
            </div>
        </div>
    );
}

function User(props) {
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt={props.nick} />
            <div class="texto">
                <strong>{props.nick}</strong>
                {props.username}
            </div>
        </div>
    );
}

function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} alt={props.name} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.status}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}
