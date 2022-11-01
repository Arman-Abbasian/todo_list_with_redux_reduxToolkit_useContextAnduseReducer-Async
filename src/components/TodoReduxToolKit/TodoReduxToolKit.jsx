import { useState } from "react";
import styles from './todoReduxToolKit.module.css';

const TodoReduxToolKit = ({title,onChengedCheck,removeHandler}) => {
    const [checkbox,setCheckBox]=useState(false);

    const changeHandler=(e)=>{
        console.log(e.target.checked);
        setCheckBox(e.target.checked);
        onChengedCheck(e.target.checked)
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.internalContainer}>
                <input type="checkbox" checked={checkbox} value={checkbox} onChange={changeHandler} />
                    <p>{title}</p>
            </div>
            <button className={styles.button} onClick={removeHandler}>Delete</button>
        </div>
     );
}
 
export default TodoReduxToolKit;