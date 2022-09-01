import './Rodape.css'
import React from 'react'

const Rodape = () => {
    return (
        <div className='rodape'>
            <div className='icons'>
                <img src='/images/fb.png' alt='Logo facebook' />
                <img src='/images/tw.png' alt='Logo twitter' />
                <img src='/images/ig.png' alt='Logo instagram' />
            </div>

            <img src='/images/logo.png' alt='Logo organo' />

            <p>Desenvolvido por Alura</p>
        </div>
    )
}

export default Rodape