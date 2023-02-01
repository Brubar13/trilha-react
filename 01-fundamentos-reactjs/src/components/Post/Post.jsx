import { useState } from "react"
import { Avatar } from "../Avatar/Avatar"
import { Comment } from "../Comment/Comment"
import styles from "./Post.module.css"

export function Post({ author, content }){

    const [comments, setComments] = useState([
        1,
        2
    ])

    function handleCrateNewComment() {
          
        setComments([...comments, comments.length + 1]);
    }
    

    return (
        <article className={ styles.post }>
            <header>
                <div className={ styles.author }>
                    <Avatar link={ author.avatarUrl } />
                    <div className={ styles.authorInfo }>
                        <strong>{ author.name }</strong>
                        <span>{ author.role }</span>
                    </div>
                </div>

                <time title="24 de janeiro de 2023" dateTime="2023-01-24 00:13" >Publicado há 1h</time>
            </header>
            <div className={ styles.content }>
                <p> { content }</p>
            </div>

            <form onSubmit={handleCrateNewComment()} className={ styles.commentForm }>
                <strong>Deixe seu feedback</strong>
                <textarea  placeholder="Deixe seu comentario"/>

            <footer>
                <button type="submit">Publicar</button>
            </footer>
                
            </form>

            <div className={ styles.commentList }>
                {
                    comments.map(comment => {
                        return <Comment author="Bruno Barbella" image="https://xesque.rocketseat.dev/users/avatar/profile-5dc907af-84c2-45c3-a96f-42afb8165112-1622418282074.jpg" commentContent="É isso ai"  />
                    })
                }
            </div>
        </article>
    )
}