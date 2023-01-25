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
        </article>
    )
}