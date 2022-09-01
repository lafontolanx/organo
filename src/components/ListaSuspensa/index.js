import './ListaSuspensa.css'
import React from 'react'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <div className='select-box'>
                <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                    <option value=""></option>
                    {props.itens.map((item, index) => {
                        return <option key={index}>{item}</option>
                    })}
                </select>                
            </div>
        </div>
    )
}

export default ListaSuspensa