import { Comment } from "../Comment/Comment"
import styles from "./Post.module.css"

export function Post(props){
    return (
        <article className={ styles.post }>
            <header>
                <div className={ styles.author }>
                    <img  
                     className={ styles.avatar }
                     src={ props.avatar }
                    />
                    <div className={ styles.authorInfo }>
                        <strong>{ props.author }</strong>
                        <span>{ props.charge }</span>
                    </div>
                </div>

                <time title="24 de janeiro de 2023" dateTime="2023-01-24 00:13" >Publicado há 1h</time>
            </header>
            <div className={ styles.content }>
                <p> { props.content }</p>
            </div>

            <form className={ styles.commentForm }>
                <strong>Deixe seu feedback</strong>
                <textarea  placeholder="Deixe seu comentario"/>

            <footer>
                <button type="submit">Publicar</button>
            </footer>
                
            </form>

            <div className={ styles.commentList }>
                <Comment image="https://xesque.rocketseat.dev/users/avatar/profile-5dc907af-84c2-45c3-a96f-42afb8165112-1622418282074.jpg" author="Bruno Barbella" commentContent="Esse é bão" />
                <Comment image="https://pps.whatsapp.net/v/t61.24694-24/56770858_320622228646986_5172432146819710976_n.jpg?ccb=11-4&oh=01_AdTccp-20Xp3ktvGyw2fX3pM44cDShdJMDrsAty-JHwSCA&oe=63DD24D6" author="Leo Milos" commentContent="Atacado" />
            </div>
        </article>
    )
}