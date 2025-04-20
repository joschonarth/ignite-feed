import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joschonarth.png',
      name: 'João Otávio',
      role: 'Software Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz durante a Formação ReactJS da Rocketseat. O nome do projeto é Ignite Feed 🚀',
      },
      { type: 'link', content: 'github.com/joschonarth/ignite-feed' },
    ],
    publishedAt: new Date('2025-04-19 22:15:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz durante a Formação ReactJS da Rocketseat. O nome do projeto é Ignite Feed 🚀',
      },
      { type: 'link', content: 'github.com/joschonarth/ignite-feed' },
    ],
    publishedAt: new Date('2025-04-20 18:05:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
