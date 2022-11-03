import { useState } from "react";
import styles from './todoReduxToolKit.module.css';

const TodoReduxToolKit = ({title,onChengedCheck,removeHandler,checkboxx}) => {

    return ( 
        <div className={styles.container}>
            <div className={styles.internalContainer}>
                <input type="checkbox" checked={checkboxx} value={checkboxx} onChange={onChengedCheck} />  
                <p>{title}</p>
            </div>
            <button className={styles.button} onClick={removeHandler}>Delete</button>
        </div>
     );
}
 
export default TodoReduxToolKit;