import React, {useState, useEffect} from 'react'
const style =  {
    modal : {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem',
        zIndex: '3',
    },
    body : {
        width: '600px',
        height: '600px',
        background: '#fff',
        padding: '2rem'
    },
    button_open : {
        width: '100%',
        height: '100%',
        background: 'transparent'
    },
    button_close : {
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        background: 'transparent',
        color: '#fff',
        fontSize: '2rem'
    }
}

const ModalPhoto = ({urlPhoto}) => {
    const [openModal, setOpenModal] = useState(false)
    useEffect(()=>{
        if(openModal)   document.getElementById('modal').focus()},
        [openModal])
    return <React.Fragment>
        <button style={style.button_open} onClick={()=>setOpenModal(true)}/>
        {openModal && <div style={style.modal}>
            <div id='modal' style={style.body} onBlur={()=>setOpenModal(false)} tabIndex={0}>
                <img  src={urlPhoto} alt='photo user' width='100%'/>
                <button style={style.button_close}  onClick={()=>setOpenModal(false)}>&times;</button>
            </div>

        </div>}


    </React.Fragment>
}

export default ModalPhoto