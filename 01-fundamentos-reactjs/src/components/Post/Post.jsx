import { useState } from "react"
import { Avatar } from "../Avatar/Avatar"
import { Comment } from "../Comment/Comment"
import styles from "./Post.module.css"

export function Post({ author, content }){

    const [commentText, setCommentText] = useState([""])

    const [comments, setComments] = useState([
        {
            author: "Bruno Barbella",
            image: "https://xesque.rocketseat.dev/users/avatar/profile-5dc907af-84c2-45c3-a96f-42afb8165112-1622418282074.jpg",
            commentContent: "É isso ai"
        },
        {
            author: "Leonardo Pilate Milos",
            image: "https://pps.whatsapp.net/v/t61.24694-24/56770858_320622228646986_5172432146819710976_n.jpg?ccb=11-4&oh=01_AdTccp-20Xp3ktvGyw2fX3pM44cDShdJMDrsAty-JHwSCA&oe=63DD24D6",
            commentContent: "Atacado"
        }
    ])

    function handleCrateNewComment(event) {
        event.preventDefault()

        console.log(commentText)

        const newComment = {
            author: "Bruno Barbella",
            image: "https://xesque.rocketseat.dev/users/avatar/profile-5dc907af-84c2-45c3-a96f-42afb8165112-1622418282074.jpg",
            commentContent: commentText
        }
        
        setComments([...comments, newComment]);
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

            <form  className={ styles.commentForm }>
                <strong>Deixe seu feedback</strong>
                <textarea onChange={setCommentText} value={commentText} placeholder="Deixe seu comentario"/>

            <footer>
                <button onClick={handleCrateNewComment} type="submit">Publicar</button>
            </footer>
                
            </form>

            <div className={ styles.commentList }>
                {
                    comments.map(comment => {
                        return <Comment 
                        author={comment.author} 
                        image={comment.image} 
                        commentContent={comment.commentContent}  
                    />})
                }
            </div>
        </article>
    )
}