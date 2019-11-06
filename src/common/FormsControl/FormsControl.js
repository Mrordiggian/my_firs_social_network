import React from "react";
import style from './FormsControl.module.css'


const FormControl = (props) => {
    let {input, meta, ...restprops} = {...props}
    let eror = meta.touched && meta.error
    return <div>
        {props.children}
        <div className={style.eror}>
            {eror && <span>{meta.error}</span>}
        </div>
    </div>
}

export const Textarea = ({input, meta, ...props}) => {
    let error = meta.touched && meta.error
    let newprops = {input, meta, ...props}
    return <FormControl {...newprops}>
        <textarea  {...input} {...props} className={error && style.errorBlock + style.textarea ||  style.textarea } />
    </FormControl>
}
export const Input = ({input, meta, ...props}) => {
    let error = meta.touched && meta.error
    let newprops = {input, meta, ...props}
    return <FormControl {...newprops}>
        <input {...input} {...props} className={error && style.errorBlock || ' ' + style.input } />
    </FormControl>
}
