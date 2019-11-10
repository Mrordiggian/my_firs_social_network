import React, {useState, useEffect} from 'react'
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {style} from 'glamor';

const styles = {
    modal: {
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
    body: {
        width: '600px',
        height: '600px',
        background: '#fff',
    },
    button_open: style({
                width: '100%',
                height: '100%',
                background: 'transparent',
                color: 'transparent',
                ":hover": {
                    fontSize: '20px',
                    color: "inherit",
                    background: 'transparent',
                }}),
    button_close: {
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
    useEffect(() => {
            if (openModal) document.getElementById('modal').focus()
        },
        [openModal])
    return <React.Fragment>
        <button {...styles.button_open} onClick={() => setOpenModal(true)}>
            <FontAwesomeIcon  icon={faSearchPlus} size="lg"/>
        </button>
        {openModal && <div style={styles.modal}>
            <div id='modal' style={styles.body} onBlur={() => setOpenModal(false)} tabIndex={0}>
                <img style={{borderRadius: '0.5rem'}} src={urlPhoto} alt='photo user' width='100%'/>
                <button style={styles.button_close} onClick={() => setOpenModal(false)}>&times;</button>
            </div>

        </div>}


    </React.Fragment>
}

export default ModalPhoto