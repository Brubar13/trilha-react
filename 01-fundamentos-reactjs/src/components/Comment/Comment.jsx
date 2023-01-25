import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <img src= { props.image } alt="" />

            <div className={ styles.commentBox }>
                <div className={ styles.commentContent }>
                    <header>
                        <div className={ styles.authorAndTime } >
                            <strong>{ props.author }</strong>
                            <time title="24 de janeiro de 2023" dateTime="2023-01-24 00:13" >Cerca de 1h atras</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{ props.commentContent }</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}