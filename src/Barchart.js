import React from 'react'
import { Bar } from 'react-chartjs-2'
function Barchart(p) {
    return (
        <div>
            <Bar data={{
                labels: ['Task 1', 'Task 2 ', 'Task 3'],
                datasets: [{
                    label: p.label,
                    data: [50, 30, 70],
                    backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
                    borderWidth: 1
                }]
            }}
                height={"50%"}
                width={"100%"} />
        </div>
    )
}

export default Barchart