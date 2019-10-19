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
    let eror = meta.touched && meta.error
    let newprops = {input, meta, ...props}
    return <FormControl {...newprops}>
        <textarea {...input} {...props} className={eror && style.erorblock || ''} cols="30" rows="5"></textarea>
    </FormControl>
}
export const Input = ({input, meta, ...props}) => {
    let eror = meta.touched && meta.error
    let newprops = {input, meta, ...props}
    return <FormControl {...newprops}>
        <input {...input} {...props} className={eror && style.erorblock || ''} ></input>
    </FormControl>
}
/*
export const Textarea = ({input, meta, ...props}) => {
    let eror = meta.touched && meta.error
    let restprops = {...props}
    return <div>
        <textarea {...input} {...restprops} className={eror && style.erorblock || ''} cols="30" rows="5"></textarea>
        <div className={style.eror}>
            {eror && <span>{meta.error}</span>}
        </div>
    </div>
}

export const Input = ({input, meta, ...props}) => {
    let eror = meta.touched && meta.error
    let restprops = {...props}
    return <div>
        <input {...input} {...restprops} className={eror && style.erorblock || ''} ></input>
        <div className={style.eror}>
            {eror && <span>{meta.error}</span>}
        </div>
    </div>
}*/