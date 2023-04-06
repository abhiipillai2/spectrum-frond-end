//graph section

//local variables
let left = 20;
let right = 30;
let topp = 20;
let bottom = 180;

//for graph responceve
if (width <= 600) {
    left = 10
    right = 15
    topp = 10
    bottom = -21
} else if (width > 600) {
    left = 20
    right = 30
    topp = 20
    bottom = 180
}

//power-grph
const powerGraphMaster = () => {
    var ctx = document.getElementById('powerGraph').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: labelMaster,
            datasets: [{
                label: 'time period power in Kwh',
                backgroundColor: '#7bd7c7',
                borderColor: 'rgb(255, 99, 132)',
                data: dataMaster
            }]
        },
        // Configuration options go here

        options: {
            layout: {
                padding: {
                    left: left,
                    right: right,
                    top: topp,
                    bottom: bottom
                }
            }
        }
    });
};

//power graph
powerGraphMaster()

//vi-graph
const viGraphGenerator = () => {
        var ctx = document.getElementById('viGraph').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: viLabelMaster,
                datasets: [{
                    label: 'V-I graph',
                    borderColor: ' #7bd7c7',
                    color: '#7bd7c7',
                    data: viMaster
                }]
            },

            // Configuration options go here
            options: {
                layout: {
                    padding: {
                        left: 10,
                        right: 20,
                        top: 0,
                        bottom: 10 //70
                    }
                }
            }
        });
    }
    //vi graph
viGraphGenerator()

//pf-graph
const ppGraphGenerator = () => {
    var ctx = document.getElementById('ppGraph').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ppLebelMaster,
            datasets: [{
                label: 'p-p graph',
                borderColor: ' #7bd7c7',
                color: '#7bd7c7',
                data: ppMaster
            }]
        },

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: 10,
                    right: 20,
                    top: 0,
                    bottom: 10 //70
                }
            }
        }
    });
}
ppGraphGenerator()

//pf-graph
const loadCurveGraphGenerator = () => {
    var ctx = document.getElementById('LoadCurve1').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: loadCurveLabel,
            datasets: [{
                label: 'load curve daily',
                borderColor: ' #7bd7c7',
                color: '#7bd7c7',
                data: loadCurveData
            }]
        },

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: 10,
                    right: 20,
                    top: 0,
                    bottom: 10 //70
                }
            }
        }
    });
}
loadCurveGraphGenerator()


//pf-graph
const loadCurveMonthGraphGenerator = () => {
    var ctx = document.getElementById('LoadCurve2').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: loadCurveMothLabel,
            datasets: [{
                label: 'load curve this month',
                borderColor: ' #7bd7c7',
                color: '#7bd7c7',
                data: loadCurveMonthData.reverse()
            }]
        },

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: 10,
                    right: 20,
                    top: 0,
                    bottom: 10 //70
                }
            }
        }
    });
}
loadCurveMonthGraphGenerator()


//pf-graph
const peakValueGraphGenerator = () => {
    var ctx = document.getElementById('peakValue').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: peakValueLabel,
            datasets: [{
                label: 'peak Value',
                borderColor: ' #7bd7c7',
                color: '#7bd7c7',
                data: peakValueData
            }]
        },

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: 10,
                    right: 20,
                    top: 0,
                    bottom: 10 //70
                }
            }
        }
    });
}
peakValueGraphGenerator()

//comapreMode chart-1
const compareModeOneGraphGenerator = () => {
    var ctx = document.getElementById('graphSideOne').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: loadCurveLabelOne,
            datasets: [{
                label: 'peak Value',
                borderColor: ' #7bd7c7',
                color: '#7bd7c7',
                data: loadCurveDataOne
            }]
        },

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: 10,
                    right: 20,
                    top: 0,
                    bottom: 10 //70
                }
            }
        }
    });
}
compareModeOneGraphGenerator()

//comapreMode chart-1
const compareModeTwoGraphGenerator = () => {
    var ctx = document.getElementById('graphSideTwo').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: loadCurveLabeTwo,
            datasets: [{
                label: 'peak Value',
                borderColor: ' #7bd7c7',
                color: '#7bd7c7',
                data: loadCurveDataTwo
            }]
        },

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: 10,
                    right: 20,
                    top: 0,
                    bottom: 10 //70
                }
            }
        }
    });
}
compareModeTwoGraphGenerator()



//comapreMode chart-1
const loadCurve = () => {
    var ctx = document.getElementById('LoadCurve5').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: label,
            datasets: [{
                label: 'peak Value',
                borderColor: ' #7bd7c7',
                color: '#7bd7c7',
                data: data
            }]
        },

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: 10,
                    right: 20,
                    top: 0,
                    bottom: 10 //70
                }
            }
        }
    });
}
loadCurve()