// components/InfoGeneral.js
import React from 'react';
import styles from './inmueble/inmbuele.module.scss'

const InfoGeneral = ({ data, onChange }) => (
    <div >
        <h2>Información General</h2>
        <label>Tipo de Inmueble:
            <select className={styles.select} value={data.tipoInmueble} onChange={e => onChange('tipoInmueble', e.target.value)}>
                <option value="">Seleccionar</option>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
                <option value="garaje">Garaje</option>
                <option value="local">Local Comercial</option>
            </select>
        </label>
        <label>Dirección Exacta:
            <input className={styles.input} type="text" value={data.direccion} onChange={e => onChange('direccion', e.target.value)} />
        </label>
        
        <label>Estrato:
            <input className={styles.input} type="number" value={data.estrato} onChange={e => onChange('estrato', e.target.value)} />
        </label>
    </div>
);

export default InfoGeneral;
