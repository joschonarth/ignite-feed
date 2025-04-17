import styles from './Comment.module.css'

import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/joschonarth.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Otávio</strong>
              <time
                title="17 de Abril às 16:42h"
                dateTime="2025-04-17 16:42:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
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
