import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const PieChart = props => {
    const options = {
        responsive: true,
        cutoutPercentage: 50,
        height: '30px',
        tooltips: { enabled: false },
        legend: {
            display: false
        },
        title: {
            display: true,
            text: `${props.title}`,
            position: 'bottom'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };
    return <Doughnut data={props.data} options={options} />;
};

export default PieChart;
