import React from 'react';

import styles from './inmueble/inmbuele.module.scss'

const CostosAdicionales = ({ data, onChange }) => (
    <div>
        <h2>Costos Adicionales</h2>
        <label>¿Incluye administración?
            <input
                className={styles.input}
                type="checkbox"
                checked={data.incluyeAdministracion}
                onChange={e => onChange('incluyeAdministracion', e.target.checked)}
            />
        </label>
        
        {data.incluyeAdministracion && (
            <label>Valor de la Administración:
                <input className={styles.input} type="number" value={data.valorAdministracion} onChange={e => onChange('valorAdministracion', e.target.value)} />
            </label>
        )}
    </div>
);

export default CostosAdicionales;
