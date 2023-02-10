import React from 'react'

//styles
import styles from '../styles/style.module.css'

const Item = ({name , val , change , focus , error , touch}) => {

  return (
    <>
      <div className={styles.formGroup}>
        <label className={styles.label}>{name}</label>
        <input
          className={(error && touch) ? styles.unComplete :styles.input}
          type="text"
          name={name}
          value={val}
          onChange={change}
          onFocus={focus}
        />
        {error && touch && <span className={styles.error}>{error}</span>}
      </div>
    </>
  )
}

export default Item