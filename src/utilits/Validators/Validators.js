import React from "react";


export const maxLengthCreator = maxlendth  => (value) => {
     if(value.length > maxlendth) return `Max length message ${maxlendth} symbols`
    return undefined
}

export const required =  (value) => {
    if(!value) return `This field dont empty`
    return undefined
}