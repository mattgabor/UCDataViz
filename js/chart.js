$(document).ready(function() {
    // Load data from CSV
    $.get('data/EIpointsDate.csv', function(csv) {
        // Access container id and call highcharts function on it
        $('#container').highcharts({
            chart: {
                type: 'area'
            },
            data: {
                csv: csv
            },
            title: {
                text: 'My Data Arts Engagement Index'
            },
            yAxis: {
                title: {
                    text: 'Points'
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
            series: [{
            }, {
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
                // plotOptions: {
                //     pie: {
                //         startAngle: -90,
                //         endAngle: 90,
                //         center: ['50%', '75%']
                //     }
                // },
                center: [280, 160],
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
