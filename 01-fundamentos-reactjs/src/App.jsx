import { useState } from 'react'

//Components
import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import { SideBar } from './components/SideBar/SideBar'

//Styles
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Post author="Bruno Barbella" charge="Web Developer" avatar="https://xesque.rocketseat.dev/users/avatar/profile-5dc907af-84c2-45c3-a96f-42afb8165112-1622418282074.jpg" content="Eu sou o Brunão" />
          <br/>
          <Post author="Leonardo Milos" charge="Bot Developer" avatar="https://pps.whatsapp.net/v/t61.24694-24/56770858_320622228646986_5172432146819710976_n.jpg?ccb=11-4&oh=01_AdTccp-20Xp3ktvGyw2fX3pM44cDShdJMDrsAty-JHwSCA&oe=63DD24D6" content="Eu ataco" />
        </main>
      </div>
    </div>
  )
}

export default App
