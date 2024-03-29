import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: 'About Page',
  description: 'About description',
}

const AboutPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>We create digital ideas that are bigger, bolder, brave and better.</h1>
          <p className={styles.desc}>
            We create digital ideas that are bigger, bolder, brave and better. We
            believe in good ideas flexibility and precision We&apos;re world&apos;s Our 
            Special Team best consulting & finance solution provider. Wide range of 
            web and software development services. 
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            src="/about.png"
            alt="About Image"
            fill
            className={styles.img}
          />
          {/* 
          <Image src="https://images.pexels.com/photos/5855579/pexels-photo-5855579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="text" fill/>
        */}
        </div>
        
      </div>
    );
  };
  
  export default AboutPage;