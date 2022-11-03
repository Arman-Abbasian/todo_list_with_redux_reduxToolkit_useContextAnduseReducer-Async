import { useState } from "react";
import styles from './todoRedux.module.css';

const TodoRedux = ({title,onChangedCheck,removeHandler,checkboxx}) => {

    return ( 
        <div className={styles.container}>
            <div className={styles.internalContainer}>
                <input type="checkbox" checked={checkboxx} value={checkboxx} onChange={onChangedCheck} />  
                <p>{title}</p>
            </div>
            <button className={styles.button} onClick={removeHandler}>Delete</button>
        </div>
     );
}
 
export default TodoRedux;