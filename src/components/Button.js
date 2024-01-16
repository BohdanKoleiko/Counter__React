import styles from "./Button.module.css";

const Button = function ({ children, onClick }) {
   return (
      <button onClick={onClick} className={styles.button}>
         {children}
      </button>
   );
};

export default Button;
