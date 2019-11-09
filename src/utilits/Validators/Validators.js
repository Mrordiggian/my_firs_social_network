
export const maxLengthCreator = maxlength  => (value) => {
     if(value && value.length > maxlength) return `Max length message ${maxlength} symbols`
    return undefined
}

export const required =  (value) => {
    if(!value) return `This field dont empty`
    return undefined
}