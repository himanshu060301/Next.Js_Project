import Image from 'next/image'
import styles from './singlePost.module.css'

const SingleBlogPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/19137460/pexels-photo-19137460/free-photo-of-turquoise-sea-off-the-coast-of-bali.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image className={styles.avatar}
              src="https://images.pexels.com/photos/19137460/pexels-photo-19137460/free-photo-of-turquoise-sea-off-the-coast-of-bali.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
              width={50} height={50}
            />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Himanshu</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio officiis error quidem eius, neque alias consequatur temporibus nemo excepturi, quisquam natus, doloribus tempore veniam. Natus, consequuntur doloremque. Officiis, cupiditate.</div>
        </div>
      </div>
    )
}
  
export default SingleBlogPage