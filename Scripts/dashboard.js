document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    let chart;

    function addEntry() {
        const regLearner = document.getElementById('regLearnerNo').value;
        const science = document.getElementById('Science').value;
        const technology = document.getElementById('Technology').value;
        const engineering = document.getElementById('Engineering').value;
        const math = document.getElementById('Math').value;
        const comment = document.getElementById('Comments').value;

        if (!regLearner || !science || !technology || !engineering || !math || !comment) {
            alert('Please fill out all fields.');
            return;
        }

        const tableBody = document.querySelector('#dataTable tbody');
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${regLearner}</td>
            <td>${science}</td>
            <td>${technology}</td>
            <td>${engineering}</td>
            <td>${math}</td>
            <td>${comment}</td>
        `;

        document.getElementById('regLearnerNo').value = '';
        document.getElementById('Science').value = '';
        document.getElementById('Technology').value = '';
        document.getElementById('Engineering').value = '';
        document.getElementById('Math').value = '';
        document.getElementById('Comments').value = '';

        updateChart();
    }

    function updateChart() {
        const tableBody = document.querySelector('#dataTable tbody');
        const rows = tableBody.rows;

        const regLearnerData = [];
        const scienceData = [];
        const technologyData = [];
        const engineeringData = [];
        const mathData = [];

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].cells;
            regLearnerData.push(parseInt(cells[0].textContent));
            scienceData.push(parseInt(cells[1].textContent));
            technologyData.push(parseInt(cells[2].textContent));
            engineeringData.push(parseInt(cells[3].textContent));
            mathData.push(parseInt(cells[4].textContent));
        }

        const data = {
            labels: ['Registered Learners', 'Science', 'Technology', 'Engineering', 'Math'],
            datasets: [{
                label: 'Number of Learners who attended per day',
                data: [regLearnerData.reduce((a, b) => a + b, 0),
                       scienceData.reduce((a, b) => a + b, 0),
                       technologyData.reduce((a, b) => a + b, 0),
                       engineeringData.reduce((a, b) => a + b, 0),
                       mathData.reduce((a, b) => a + b, 0)],
                borderWidth: 1
            }]
        };

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    document.querySelector('.upload-form-button button').addEventListener('click', addEntry);
});
