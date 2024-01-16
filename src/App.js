import { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button";
import Title from "./components/Title";

function App() {
   const buttons = [
      { name: "decrease", sign: "-" },
      { name: "reset", sign: 0 },
      { name: "increase", sign: "+" },
   ];
   const [number, setNumber] = useState(0);

   const updateNumber = (sign) => {
      switch (sign) {
         case "+":
            setNumber((prevNumber) => prevNumber + 1);
            break;
         case "-":
            setNumber((prevNumber) => prevNumber - 1);
            break;
         default:
            setNumber(sign);
            break;
      }
   };

   const setNumberStyle = (num) => {
      if (num > 0) {
         return "increase";
      } else if (num < 0) {
         return "decrease";
      }

      return "default";
   };

   return (
      <div className={styles.app}>
         <div className={styles.appWrapper}>
            <Title text="Counter" />

            <div className={`${styles.number} ${styles[setNumberStyle(number)]}`}>{number}</div>

            <div className={styles.btnContainer}>
               {buttons.map((btn, index) => (
                  <Button onClick={() => updateNumber(btn.sign)} key={index}>
                     {btn.name}
                  </Button>
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
