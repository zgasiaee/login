import React from 'react';
import {Link} from 'react-router-dom'

//style
import styles from '../styles/style.module.css'

const Button = ({link , button}) => {
    return (
        <>
            <div className={styles.button}>
                <Link to={'/'+link} className={styles.login}>{link}</Link>
                <button type='submit' className={styles.submit}>{button}</button>
            </div>
        </>
    );
};

export default Button;