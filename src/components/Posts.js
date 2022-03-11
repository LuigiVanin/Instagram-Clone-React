export default function Posts() {
    const posts = [
        {
            name: "meowed",
            profileImg: "assets/img/meowed.svg",
            post: "assets/img/gato-telefone.svg",
            likedBy: "respondeai",
            likeCount: "101.503",
            likeImg: "assets/img/respondeai.svg",
        },
        {
            name: "barked",
            profileImg: "assets/img/barked.svg",
            post: "assets/img/dog.svg",
            likedBy: "adorable_animals",
            likeCount: "99.159",
            likeImg: "assets/img/adorable_animals.svg",
        },
    ];
    return (
        <div className="posts">
            {posts.map((item) => {
                return (
                    <Post
                        image={item.profileImg}
                        name={item.name}
                        post={item.post}
                        likedBy={item.likedBy}
                        likeCount={item.likeCount}
                        likeImg={item.likeImg}
                    />
                );
            })}
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
            <PostTop name={props.name} image={props.image} />

            <div className="conteudo">
                <img src={props.post} alt={props.name} />
            </div>

            <PostBottom
                likedBy={props.likedBy}
                likeImg={props.likeImg}
                likeCount={props.likeCount}
            />
        </div>
    );
}

function PostBottom(props) {
    return (
        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={props.likeImg} alt="" />
                <div className="texto">
                    Curtido por <strong>{props.likedBy}</strong> e{" "}
                    <strong>outras {props.likeCount} pessoas</strong>
                </div>
            </div>
        </div>
    );
}

function PostTop(props) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src={props.image} alt="" />
                {props.name}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}
