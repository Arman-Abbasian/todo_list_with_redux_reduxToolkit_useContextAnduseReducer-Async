import { useState } from "react";
import styles from './todoContext.module.css';

const TodoContext = ({title,onChangedCheck,removeHandler,checked}) => {
    const [checkbox,setCheckBox]=useState(false);

    const changeHandler=(e)=>{
        setCheckBox(e.target.checked);
        console.log(e.target.checked)
        onChangedCheck(e.target.checked)
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.internalContainer}>
                <input type="checkbox" checked={checked} value={checkbox} onChange={changeHandler} />
                <p>{title}</p>
            </div>
            <button className={styles.button} onClick={removeHandler}>Delete</button>
        </div>
     );
}
 
export default TodoContext;