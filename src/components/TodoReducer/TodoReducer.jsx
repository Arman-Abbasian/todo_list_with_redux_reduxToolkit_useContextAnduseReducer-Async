import { useState } from "react";
import styles from './todoReducer.module.css';

const TodoReducer = ({title,onChangedCheck,removeHandler}) => {
    const [checkbox,setCheckBox]=useState(false);

    const changeHandler=(e)=>{
        setCheckBox(e.target.checked);
        onChangedCheck(e.target.checked)
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.internalContainer}>
                <input type="checkbox" value={checkbox} onChange={changeHandler} />
                    <p>{title}</p>
            </div>
            <button className={styles.button} onClick={removeHandler}>Delete</button>
        </div>
     );
}
 
export default TodoReducer;