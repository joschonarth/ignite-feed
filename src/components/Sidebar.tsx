import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg"
        alt="Banner image"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/joschonarth.png" />

        <strong>João Otávio</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
