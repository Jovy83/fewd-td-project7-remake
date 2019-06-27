// Alert banner
const alert = $('#alert');
// create the html for the banner
alert.html(`
<div class="alert-banner">
            <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
            <p class="alert-banner-close">x</p>
        </div>
`)
alert.on('click', (event) => {
    //todo: continue here
    const element = event.target;
    if(element.classList.contains("alert-banner-close")) {
        alert.hide();
    }
});

// ChartJS
const trafficChartCanvas = $('#traffic-chart');
const dailyChartCanvas = $('#daily-chart');
const mobileUsersChartCanvas = $('#mobile-users-chart');

const trafficChart = new Chart(trafficChartCanvas, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: 'rgba(226, 227, 244, 0.5)',
            borderColor: 'rgba(115, 121, 186, 1)',
            pointBackgroundColor: '#fff',
            borderWidth: 1,
            lineTension: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
    }
});

const dailyChart = new Chart(dailyChartCanvas, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(104, 108, 183, 1)',
            borderColor: 'rgba(115, 121, 186, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
    }
});

const mobileUsersChart = new Chart(mobileUsersChartCanvas, {
    type: 'doughnut',
    data: {
        labels: ['Phone', 'Tablet', 'Desktop'],
        datasets: [{
            data: [25, 10, 65],
            backgroundColor: ['rgba(103, 168, 183, 1)', 'rgba(118, 194, 132, 1)', 'rgba(104, 108, 183, 1)'],
            borderWidth: 1
        }]
    },
    options: {

    }
}); 