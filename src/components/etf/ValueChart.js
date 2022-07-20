import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: '수익률',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    //y1: {
    //  type: 'linear',
    //  display: true,
    //  position: 'right',
    //  grid: {
    //    drawOnChartArea: false,
    //  },
    //},
  },
};



export function ValueChart({etf}) {
  const labels = etf.date_idx;

  const data = {
    labels,
    datasets: [
      {
        borderWidth: 1,                
        pointRadius: 0,
        label: etf.etf_name,
        data: etf.etf_yield,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        borderWidth: 1,                
        pointRadius: 0,
        label: '나의 포트폴리오',
        data: etf.stock_yield,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        //yAxisID: 'y1',
      },
    ],
};
  return <Line options={options} data={data}  width={400} height={300} />;
}
