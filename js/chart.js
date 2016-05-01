$(document).ready(function() {
    // Load data from CSV
    $.get('data/EIpointsDate.csv', function(csv) {
        // Access container id and call highcharts function on it
        $('#container').highcharts({
            credits: {
                enabled: false
            },
            chart: {
                type: 'line'
            },
            data: {
                csv: csv
            },
            title: {
                text: 'My Data Arts Engagement Index',
                style: {
                    "fontSize": "30px"
                }
            },
            yAxis: {
                gridLineWidth: 0,
                title: {
                    text: 'Points',                    
                    style: {
                        "fontSize": "13px"
                    }
                },
                labels: {
                    style: {
                        "fontSize": "13px"
                    }
                }
            },
            xAxis: {
                labels: {
                    style: {
                        "fontSize": "13px"
                    }
                }
            },
            plotOptions: {
                series: {
                    linewidth: 4,
                    color: '#aaeeee'
                },
                pie: {
                    startAngle: -90,
                    endAngle: 90,
                }
            },
            series: [ // First series reserved for main chart
            {},
            {
                type: 'pie',
                name: '# of Occurrences',
                data: [
                {
                    name: 'Assignment Submitted',
                    y: 11,
                    color: Highcharts.getOptions().colors[0]
                },{
                    name: 'Asset Added',
                    y: 9,
                    color: Highcharts.getOptions().colors[1]
                },
                {
                    name: 'Like Given',
                    y: 472,
                    color: Highcharts.getOptions().colors[2]
                },
                {
                    name: 'Like Received',
                    y: 675,
                    color: Highcharts.getOptions().colors[3]
                }, {
                    name: 'Comment Given',
                    y: 182,
                    color: Highcharts.getOptions().colors[4]
                },
                {
                    name: 'Comment Received',
                    y: 159,
                    color: Highcharts.getOptions().colors[5]
                },
                {
                    name: 'Reply Received',
                    y: 43,
                    color: Highcharts.getOptions().colors[6]
                },
                {
                    name: 'Discussion Comment Given',
                    y: 5,
                    color: Highcharts.getOptions().colors[7]
                },
                {
                    name: 'Discussion Reply Received',
                    y: 2,
                    color: Highcharts.getOptions().colors[8]
                }],
                center: ['25%', '40%'],
                size: 250,
                showInLegend: false,
                dataLabels: {
                    enabled: true,
                    color: '#E0E0E3',
                    style: {
                        "fontSize": "13px"
                    }
                }
            }]
        });
    });
});

$(function () {
    $('#highscores').highcharts({
        credits: {
            enabled: false
        },
        chart: {
            type: 'column',
            backgroundColor: null
        },
        title: {
            text: 'Activity by Day of Week'
        },
        xAxis: {
            categories: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            max: 400,
            gridLineWidth: 0,
            title: {
                text: 'Activity'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Daily Activity',
            data: [407, 375, 301, 84, 185, 102, 104],
            color: "#f45b5b"

        }]
    });
});
