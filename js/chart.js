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
                text: 'Matt Gabor Engagement Index'
            },
            yAxis: {
                title: {
                    text: 'Points'
                }
            },
            plotOptions: {
                series: {
                    linewidth: 2,
                    color: '#A3EDBA'
                }
            }
        });
    });
});


// $(function () {
//     $('#container').highcharts({
//         chart: {
//             type: 'bar'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruit eaten'
//             }
//         },
//         series: [{
//             name: 'Jane',
//             data: [1, 0, 4]
//         }, {
//             name: 'John',
//             data: [5, 7, 3]
//         }]
//     });
// });
