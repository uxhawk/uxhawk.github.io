$(document).ready(function() {
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
        const ctx01 = document.getElementById('survey');
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
                    text: "Survey Responses | 1: Strongly Disagree; 5: Strongly Agree",
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

        const ctx02 = document.getElementById('slideLength');
        var slideLength = new Chart(ctx02, {
            type: 'bar',
            data: {
                labels: ['Three Slides', 'Four Slides', 'Five Slides', 'Six Slides'],
                datasets: [{
                    data: [2.3, 2.8, 4.1, 4.3],
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
                    text: "I think the onboarding process was too long | 1: Strongly Disagree; 5: Strongly Agree",
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

        datasets: [{
            label: "Africa",
            backgroundColor: "#3e95cd",
            data: [133, 221, 783, 2478]
        }, {
            label: "Europe",
            backgroundColor: "#8e5ea2",
            data: [408, 547, 675, 734]
        }]

        const ctx03 = document.getElementById('benchmark');
        var survey = new Chart(ctx03, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                        label: "Existing Customers",
                        data: [2.9, 3, 3.8, 3.5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.9)',
                            'rgba(255, 99, 132, 0.9)',
                            'rgba(255, 99, 132, 0.9)',
                            'rgba(255, 99, 132, 0.9)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    },
                    {
                        label: "New Designs",
                        data: [3.6, 4.2, 3, 3.4],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.9)',
                            'rgba(75, 192, 192, 0.9)',
                            'rgba(75, 192, 192, 0.9)',
                            'rgba(75, 192, 192, 0.9)',
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 192, 192, 1)',
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Survey Responses | 1: Strongly Disagree; 5: Strongly Agree",
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
                    display: true
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

});