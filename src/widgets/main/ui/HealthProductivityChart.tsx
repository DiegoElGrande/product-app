'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

interface GraphDataPoint {
    day: string;
    health: number;
    productivity: number;
    sleep: number;
}

interface HealthProductivityChartProps {
    data?: GraphDataPoint[];
    maxValue?: number;
    graphHeight?: number;
}

export const HealthProductivityChart = ({
    data = [
        { day: 'Mon', health: 35, productivity: 30, sleep: 78 },
        { day: 'Tue', health: 40, productivity: 35, sleep: 74 },
        { day: 'Wed', health: 38, productivity: 32, sleep: 68 },
        { day: 'Thu', health: 45, productivity: 40, sleep: 87 },
        { day: 'Fri', health: 50, productivity: 45, sleep: 58 },
        { day: 'Sat', health: 48, productivity: 42, sleep: 90 },
        { day: 'Sun', health: 55, productivity: 50, sleep: 63 },
    ],
    maxValue = 100,
}: HealthProductivityChartProps) => {
    const chartData = {
        labels: data.map((d) => d.day),
        datasets: [
            {
                label: 'Health',
                data: data.map((d) => d.health),
                borderColor: '#10b981',
                backgroundColor: 'transparent',
                borderWidth: 2.5,
                pointRadius: 4,
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#10b981',
                pointHoverRadius: 5,
                tension: 0,
                fill: false,
            },
            {
                label: 'Productivity',
                data: data.map((d) => d.productivity),
                borderColor: '#3b82f6',
                backgroundColor: 'transparent',
                borderWidth: 2.5,
                pointRadius: 4,
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#3b82f6',
                pointHoverRadius: 5,
                tension: 0,
                fill: false,
            },
            {
                label: 'Sleep',
                data: data.map((d) => d.sleep),
                borderColor: '#8b00ff',
                backgroundColor: 'transparent',
                borderWidth: 2.5,
                pointRadius: 4,
                pointBackgroundColor: '#8b00ff',
                pointBorderColor: '#8b00ff',
                pointHoverRadius: 5,
                tension: 0,
                fill: false,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                titleColor: '#9ca3af',
                bodyColor: '#ffffff',
                borderColor: '#374151',
                borderWidth: 1,
                padding: 8,
            },
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 12,
                    },
                },
                border: {
                    display: false,
                },
            },
            y: {
                display: true,
                min: 0,
                max: maxValue,
                ticks: {
                    stepSize: 20,
                    color: '#6b7280',
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    color: '#1f2937',
                },
                border: {
                    display: false,
                },
            },
        },
    };

    return (
        <section className="mb-6 max-h-full">
            <figure className="rounded-xl">
                <h2 className="text-md text-center font-semibold mb-4 text-white">
                    Health & Productivity Correlation
                </h2>
                <h3 className={`text-center`}>last 7 day</h3>
                <article className="h-70 py-2">
                    <Line data={chartData} options={options} />
                </article>
            </figure>
        </section>
    );
};
