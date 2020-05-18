$(document).ready(function() {
    let theme = "light";
    const htmlTag = document.getElementsByTagName("html")[0];
    const themeBtn = document.getElementById("theme-btn");
    var chartFontColor, chartGridColor;

    var hasChart = $("body").has("canvas");

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
            if (hasChart.length !== 0) {
                chartFontColor = '#11131f';
                chartGridColor = '#dddddd';
            }


        } else {
            htmlTag.setAttribute("data-theme", "dark");
            themeBtn.classList.remove("far", "fa-moon");
            themeBtn.classList.add("fas", "fa-sun");
            if (hasChart.length !== 0) {
                chartFontColor = '#ffffff';
                chartGridColor = '#acacac';
            }
        }

        // ******************************************
        // CHARTS AND GRAPHS
        // ******************************************
        if (hasChart.length !== 0) {
            Chart.defaults.global.defaultFontColor = chartFontColor;
            Chart.defaults.global.defaultFontFamily = "Roboto-light";
            if (document.getElementById('survey')) {
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
            }

            if (document.getElementById('slideLength')) {
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
            }

            if (document.getElementById('benchmark')) {
                const ctx03 = document.getElementById('benchmark');
                var benchmark = new Chart(ctx03, {
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

            if (document.getElementById('satQuestionnaire')) {
                const ctx04 = document.getElementById('satQuestionnaire');
                var satQuestionnaire = new Chart(ctx04, {
                    type: 'bar',
                    data: {
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        datasets: [{
                                label: "Round 1",
                                data: [1.9, 2.6, 3.5, 4],
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
                                label: "Round 2",
                                data: [1.75, 2.7, 3.3, 4],
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
                            },
                            {
                                label: "Round 3",
                                data: [1.75, 2, 3.8, 4.3],
                                backgroundColor: [
                                    'rgba(255, 206, 86, 0.9)',
                                    'rgba(255, 206, 86, 0.9)',
                                    'rgba(255, 206, 86, 0.9)',
                                    'rgba(255, 206, 86, 0.9)',
                                ],
                                borderColor: [
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(255, 206, 86, 1)',
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

            if (document.getElementById('successRates')) {
                const ctx05 = document.getElementById('successRates');
                var successRates = new Chart(ctx05, {
                    type: 'line',
                    data: {
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        datasets: [{
                            fill: false,    
                            label: "Round 1",
                                data: [100, 62.5, 75, 87.5],
                                backgroundColor: [
                                    'rgba(255, 99, 132,1)',
                                    'rgba(255, 99, 132,1)',
                                    'rgba(255, 99, 132,1)',
                                    'rgba(255, 99, 132,1)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                ],
                                borderWidth: 2
                            },
                            {
                                fill: false,
                                label: "Round 2",
                                data: [100, 87.5, 75, 75],
                                backgroundColor: [
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderColor: [
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 2
                            },
                            {
                                fill: false,
                                label: "Round 3",
                                data: [100, 87.5, 75, 100],
                                backgroundColor: [
                                    'rgba(255, 206, 86, 0.9)',
                                    'rgba(255, 206, 86, 0.9)',
                                    'rgba(255, 206, 86, 0.9)',
                                    'rgba(255, 206, 86, 0.9)',
                                ],
                                borderColor: [
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(255, 206, 86, 1)',
                                ],
                                borderWidth: 2
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: "Task Succes Rates",
                            fontFamily: "Roboto",
                            fontSize: 14
                        },
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: "Percentage"
                                },
                                gridLines: {
                                    color: chartGridColor,
                                    zeroLineColor: chartGridColor
                                },
                                ticks: {
                                    beginAtZero: false,
                                    stepSize: 25,
                                    suggestedMax: 100,
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

            if (document.getElementById('androidSatisfaction')) {
                const ctx05 = document.getElementById('androidSatisfaction');
                var androidSatisfaction = new Chart(ctx05, {
                    type: 'bar',
                    data: {
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        datasets: [{
                                label: "Round 1",
                                data: [3, 3.125, 3.375, 3.875],
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
                                label: "Round 2",
                                data: [3.375, 2.5, 4.125, 4.375],
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
                            },
                            {
                                label: "Round 3",
                                data: [2.75, 3.125, 4.25, 4.25],
                                backgroundColor: [
                                    'rgba(255, 206, 86, 0.9)',
                                    'rgba(255, 206, 86, 0.9)',
                                    'rgba(255, 206, 86, 0.9)',
                                    'rgba(255, 206, 86, 0.9)',
                                ],
                                borderColor: [
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(255, 206, 86, 1)',
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
                                scaleLabel: {
                                    display: true,
                                    labelString: "Average Difficulty Rating"
                                },
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
        }
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

    const accordion = $("#testObjectives");
    const icon = $("#accordion-icon");
    const linkText = $("#view-objective")
    $("#accordionLink").click(function() {
        if (accordion.is(":visible")) {
            linkText.text("View Testing Objectives");
            icon.html(`<i class="far fa-plus-square"></i>`);
        } else {
            linkText.text("Collapse Testing Objectives");
            icon.html(`<i class="far fa-minus-square"></i>`);
        };
    });


    init();
    $("#theme-btn").click(toggleTheme);
});