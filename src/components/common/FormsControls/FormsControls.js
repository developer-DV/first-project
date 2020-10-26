import React from 'react'
import styles from './formsControls.module.css'


export const Textarea = ({input, placeholder, meta:{touched, error}}) => {
    const hasError = touched && error
    return( <>
            <textarea className={styles.formControl + ' ' + (hasError ? styles.error : '')} {...input} placeholder={placeholder}></textarea>
            {touched && (error && <span className={styles.span}>{error}</span>)}
        </>
    )
}

export const Input = ({input, type, placeholder, meta:{touched, error}}) => {
    const hasError = touched && error
    return( <>
            <input className={styles.formControl + ' ' + (hasError ? styles.error : '')} {...input} type={type} placeholder={placeholder}/>
            {touched && (error && <span className={styles.input}>{error}</span>)}
        </>
    )
}