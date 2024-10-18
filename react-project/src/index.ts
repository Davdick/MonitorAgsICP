// Importamos Chart.js
import { Chart, registerables } from 'chart.js';

// Registramos los componentes de Chart.js
Chart.register(...registerables);

// Selección del canvas donde se va a renderizar el gráfico
const ctx = document.getElementById('incidentsChart') as HTMLCanvasElement;

// Verificamos que el contexto 2D existe en el canvas antes de continuar
if (ctx) {
    const incidentsChart = new Chart(ctx.getContext('2d')!, {
        type: 'bar', // Tipo de gráfico: barras
        data: {
            labels: ['0-2 AM', '2-4 AM', '4-6 AM', '6-8 AM', '8-10 AM', '10-12 PM', '12-2 PM', '2-4 PM', '4-6 PM', '6-8 PM', '8-10 PM', '10-12 AM'],
            datasets: [{
                label: 'Incidentes reportados',
                data: [5, 7, 3, 4, 8, 10, 12, 9, 6, 11, 15, 7], // Datos de ejemplo
                backgroundColor: 'rgba(60, 141, 188, 0.8)',
                borderColor: 'rgba(60, 141, 188, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // El eje Y comienza desde 0
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}
