import Colaborador from '../Colaborador'
import './Time.css'
import React from 'react'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} corDeFundo={props.corPrimaria} cargo={colaborador.cargo} imagem={colaborador.imagem} key={colaborador.nome} /> )}
            </div>
        </section>
        : ''
    )
}

export default Time