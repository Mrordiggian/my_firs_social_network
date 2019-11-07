import React from "react";
import style from './FormsControl.module.css'


const FormControl = ({meta, ...props}) => {
    let error = meta.touched && meta.error
    return <div>
        {props.children}
        <div className={style.error}>
            {error && <span>{meta.error}</span>}
        </div>
    </div>
}

export const Textarea = ({input, meta, ...props}) => {
    let error = meta.touched && meta.error
    let newprops = {input, meta, ...props}
    return <FormControl {...newprops}>
        <textarea  {...input} {...props} className={error? style.errorBlock : ' '} />
    </FormControl>
}
export const Input = ({input, meta, ...props}) => {
    let error = meta.touched && meta.error
    let newprops = {input, meta, ...props}
    return <FormControl {...newprops}>
        <input {...input} {...props} className={error ? style.errorBlock: ' '} />
    </FormControl>
}
