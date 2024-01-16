import styles from "./Title.module.css";

const Title = function ({ text = "Title", HeadingType = "h1" }) {
   return <HeadingType className={styles.title}>{text}</HeadingType>;
};

export default Title;
