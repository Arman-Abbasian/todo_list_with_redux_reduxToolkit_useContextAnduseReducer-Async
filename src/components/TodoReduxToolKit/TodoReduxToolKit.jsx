import { useState } from "react";
import styles from './todoReduxToolKit.module.css';

const TodoReduxToolKit = ({title,onChengedCheck,removeHandler,checkboxx}) => {

    const changeHandler=(e)=>{
        console.log(e.target.checked);
        onChengedCheck(e.target.checked)
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.internalContainer}>
                <input type="checkbox" checked={checkboxx} value={checkboxx} onChange={changeHandler} />
                    <p>{title}</p>
            </div>
            <button className={styles.button} onClick={removeHandler}>Delete</button>
        </div>
     );
}
 
export default TodoReduxToolKit;