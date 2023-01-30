import { useState } from 'react'

//Components
import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import { SideBar } from './components/SideBar/SideBar'

//Styles
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author : {
      avatarUrl: "https://xesque.rocketseat.dev/users/avatar/profile-5dc907af-84c2-45c3-a96f-42afb8165112-1622418282074.jpg",
      name: "Bruno Barbella",
      role: "Web Developer"
    },
    content: "Eu sou atualmente um Full-Stack developer aprendendo a desenvolver em linguagem Python e sobre React JS"
  },
  {
    id: 2,
    author : {
      avatarUrl: "https://pps.whatsapp.net/v/t61.24694-24/56770858_320622228646986_5172432146819710976_n.jpg?ccb=11-4&oh=01_AdTccp-20Xp3ktvGyw2fX3pM44cDShdJMDrsAty-JHwSCA&oe=63DD24D6",
      name: "Leonardo Pilati Milos",
      role: "Bot Developer"
    },
    content: "Atualmente um desenvolvedor Python focado em BOT's para o mercado financeiro"
  }
]

function App() {

  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <aside>
          <SideBar />
        </aside>
        <main>
          { posts.map(post => {
            return <Post 
            author={ post.author }
            content={ post.content }
            />
          }) }
        </main>
      </div>
    </div>
  )
}

export default App
