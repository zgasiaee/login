import React from 'react'

//styles
import styles from '../styles/style.module.css'

const Accept = ({error , touch , accept , change , focus }) => {
  return (
    <>
      <div className={styles.accept}>
        <label className={styles.label}>I accept term of privacy policy</label>
        <input
          className={(error && touch) ? styles.unComplete :styles.check}
          type="checkbox"
          name="accept"
          value={accept}
          onChange={change}
          onFocus={focus}
        />
         {error && touch && <span className={styles.error}>{error}</span>}
      </div>
    </>
  )
}

export default Accept
