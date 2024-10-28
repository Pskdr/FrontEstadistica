// components/InmuebleForm.js
"use client";
import React, { useState } from 'react';
import InfoGeneral from '../Infogeneral';
import styles from './inmbuele.module.scss';
import DetallesInmueble from '../DetallesInmueble';
import CaracteristicasAdicionales from '../CaracterisitcasAdicionales';
import CostosAdicionales from '../CostosAdicionales';

const InmuebleForm = () => {
    const [formData, setFormData] = useState({
        tipoInmueble: '',
        direccion: '',
        estrato: '',
        areaConstruida: '',
        areaTerreno: '',
        antiguedad: '',
        caracteristicas: [],
        incluyeAdministracion: false,
        valorAdministracion: ''
    });

    const handleInputChange = (name, value) => {
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí haríamos la llamada al backend
        console.log("Datos enviados: ", formData);
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h2>Calculadora de Precio de Arriendo</h2>
            <InfoGeneral data={formData} onChange={handleInputChange} />
            <DetallesInmueble data={formData} onChange={handleInputChange} />
            <CaracteristicasAdicionales data={formData} onChange={handleInputChange} />
            <CostosAdicionales data={formData} onChange={handleInputChange} />
            <button className={styles.button} type="submit" disabled={!formData.tipoInmueble}>Calcular Precio Estimado</button>
        </form>
    );
};

export default InmuebleForm;
