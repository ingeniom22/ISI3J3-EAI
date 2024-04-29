import React, { } from 'react';
import PneumoniaPredictionForm from '../components/PneumoniaPredictionForm';

const Pneumonia = () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    return (
        <PneumoniaPredictionForm inferenceAPI={apiUrl + "/pneumonia/predict"} reportAPI={apiUrl + "/pneuomania-report/create"} />
    );
};

export default Pneumonia;
