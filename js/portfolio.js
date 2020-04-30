// $(document).ready(function() {


// });

let theme = "light";
const htmlTag = document.getElementsByTagName("html")[0];
const themeBtn = document.getElementById("theme-btn");
var chartFontColor, chartGridColor;

function init() {
    var storedTheme = localStorage.getItem("theme");

    if (storedTheme !== null) {
        theme = storedTheme;
    }
    setStyle();
}

function storeTheme() {
    localStorage.setItem("theme", theme);
}

function setStyle() {
    if (theme === "light") {
        htmlTag.removeAttribute("data-theme");
        themeBtn.classList.add("far", "fa-moon");
        themeBtn.classList.remove("fas", "fa-sun");
        chartFontColor = '#11131f';
        chartGridColor = '#dddddd';

    } else {
        htmlTag.setAttribute("data-theme", "dark");
        themeBtn.classList.remove("far", "fa-moon");
        themeBtn.classList.add("fas", "fa-sun");
        chartFontColor = '#ffffff';
        chartGridColor = '#acacac';
    }

    // ******************************************
    // CHARTS AND GRAPHS
    // ******************************************
    Chart.defaults.global.defaultFontColor = chartFontColor;
    Chart.defaults.global.defaultFontFamily = "Roboto-light";
    const ctx = document.getElementById('survey');
    var survey = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    gridLines: {
                        color: chartGridColor,
                        zeroLineColor: chartGridColor
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });
}

function toggleTheme() {
    if (theme === "light") {
        theme = "dark";

        storeTheme();
        setStyle();
    } else {
        theme = "light"

        storeTheme();
        setStyle();
    }
}

init();
$("#theme-btn").click(toggleTheme);