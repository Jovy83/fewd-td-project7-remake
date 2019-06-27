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
    if (element.classList.contains("alert-banner-close")) {
        alert.hide();
    }
});

// ChartJS
const trafficChartCanvas = $('#traffic-chart');
const dailyChartCanvas = $('#daily-chart');
const mobileUsersChartCanvas = $('#mobile-users-chart');

// Traffic chart
const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: 0
    }]
};

const trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0 // to make chart more responsive
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

const trafficChart = new Chart(trafficChartCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Daily chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

const dailyChart = new Chart(dailyChartCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Mobile chart
const mobileUsersData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}

const mobileUsersChart = new Chart(mobileUsersChartCanvas, {
    type: 'doughnut',
    data: mobileUsersData,
    options: mobileOptions
}); 