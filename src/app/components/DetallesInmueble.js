// components/DetallesInmueble.js
import React from 'react';
import styles from './inmueble/inmbuele.module.scss'

const DetallesInmueble = ({ data, onChange }) => (
    <div>
        <h2>Detalles del Inmueble</h2>
        <label>Área Construida:
            <input className={styles.input} type="number" value={data.areaConstruida} onChange={e => onChange('areaConstruida', e.target.value)} />
        </label>
        
        <label>Área del Terreno:
            <input className={styles.input} type="number" value={data.areaTerreno} onChange={e => onChange('areaTerreno', e.target.value)} />
        </label>
        
        <label>Antigüedad del Inmueble:
            <input className={styles.input} type="number" value={data.antiguedad} onChange={e => onChange('antiguedad', e.target.value)} />
        </label>
    </div>
);

export default DetallesInmueble;
