import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  scales: {y: {
    suggestedMin: 50,
    suggestedMax: 500
  }},
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
    },
  },
};

const labels = ['Value'];

const IntervalExample = () => {
  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },

    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        labels: labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },

        ],
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Bar options={options} data={data} />;
};

export default IntervalExample;

