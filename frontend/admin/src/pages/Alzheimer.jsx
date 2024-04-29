import React, {  } from 'react';

import AlzheimerPredictionForm from '../components/AlzheimerPredictionForm'

const Alzheimer = () => {
    const apiUrl = import.meta.env.VITE_API_URL

    return (
        <AlzheimerPredictionForm inferenceAPI={apiUrl + "/alzheimer/predict"} reportAPI={apiUrl+ "/alzheimer-report/create"} />
    );
};

export default Alzheimer;
