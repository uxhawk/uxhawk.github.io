$(document).ready(function() {
    var chartFontColor, chartGridColor;
        Chart.defaults.global.defaultFontColor = chartFontColor;
        Chart.defaults.global.defaultFontFamily = "Roboto";
        const ctx01 = document.getElementById('success-rates');
        var survey = new Chart(ctx01, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    data: [2.9, 3, 3.8, 3.5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.9)',
                        'rgba(54, 162, 235, 0.9)',
                        'rgba(255, 206, 86, 0.9)',
                        'rgba(75, 192, 192, 0.9)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Success Rates",
                    fontFamily: "Roboto",
                    fontSize: 14
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: chartGridColor,
                            zeroLineColor: chartGridColor
                        },
                        ticks: {
                            beginAtZero: false,
                            stepSize: 1,
                            suggestedMax: 5,
                            suggestedMin: 1
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });

    
});