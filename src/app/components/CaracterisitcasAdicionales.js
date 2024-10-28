// components/CaracteristicasAdicionales.js
import React from 'react';
import styles from './inmueble/inmbuele.module.scss'

const CaracteristicasAdicionales = ({ data, onChange }) => {
    const handleCheckboxChange = (feature) => {
        let newFeatures = [...data.caracteristicas];
        if (newFeatures.includes(feature)) {
            newFeatures = newFeatures.filter(f => f !== feature);
        } else {
            newFeatures.push(feature);
        }
        onChange('caracteristicas', newFeatures);
    };
    return (
        <div>
            <h2>Características Adicionales</h2>
            {['Balcón', 'Jardín', 'Conjunto Cerrado', 'Amoblado'].map((feature) => (
                
                <div className={styles.radioGroup}>
                    <label key={feature} className={styles.radioLabel}>
                        <input
                            type="checkbox"
                            checked={data.caracteristicas.includes(feature)}
                            onChange={() => handleCheckboxChange(feature)}
                        />
                        {feature}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CaracteristicasAdicionales;
