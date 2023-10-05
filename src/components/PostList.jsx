import Post from "./Post";
import styles from './PostList.module.css'

function PostList() {
  return (
    <ul className={styles.ul}>        
        <Post author='Adrien' message='React is awesome!'/>
        <Post author='Lionel' message='Java is also awesome!'/>
    </ul>
  )
}

export default PostList