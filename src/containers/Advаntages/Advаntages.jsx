import styles from './Advаntages.module.scss'
import { advantages } from '../../constants/advantages'

export const Advantages = () => {
  return (
    <div className={styles.advantages}>
      {advantages &&
        advantages.map((adv) => (
          <div key={adv.id} className={styles.item}>
            <svg className={styles.icon}>
              <use xlinkHref={`/symbol-defs.svg#${adv.icon}`}></use>
            </svg>
            <h3>{adv.title}</h3>
            <p>{adv.text}</p>
          </div>
        ))
      }
    </div>
  )
}
