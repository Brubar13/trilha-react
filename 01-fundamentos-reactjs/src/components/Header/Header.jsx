import styles from './Header.module.css'

import igniteSimbol from '../../assets/IgniteSimbol.svg'

export function Header() {
    return (
        <header className={ styles.header }>
            <img src={igniteSimbol} alt="Logotipo do Ignite" />
        </header>
    )
}