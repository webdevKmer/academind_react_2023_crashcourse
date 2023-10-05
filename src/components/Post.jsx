import styles from './Post.module.css'

function Post(props) {
    
  return (
    <li className={styles.li}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.message}>{props.message}</p>
    </li>
  )
}

export default Post