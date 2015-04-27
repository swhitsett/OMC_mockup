$(function () {
    $('#graph1').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Monthly Sales'
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com'
        // },
        xAxis: [{
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Projected Sales',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Actual Sales',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '${value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }

        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Avg per week',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '${value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Actual Sales',
            type: 'column',
            yAxis: 1,
            data: [12056, 4000, 26000, 9000],
            tooltip: {
                valuePrefix: ' $'
            }

        }, {
            name: 'Avg Sales',
            type: 'spline',
            yAxis: 2,
            data: [1016, 1016, 1015.9, 1015.5],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valuePrefix: '$'
            }

        }, {
            name: 'Projected Sales',
            type: 'spline',
            data: [10000, 10000, 8000, 12000],
            tooltip: {
                valuePrefix: '$'
            }
        }]
    });
//------------------------------- Individual Rep graphs-------------------------------------------------    
    $('#graph2').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Individual Rep Sales'
        },
        xAxis: {
            categories: ["Billy Johnson", "Scarlet Johanson", "Sarah Jensen"],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Dollars $',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valuePrefix: '$'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Desired Sales',
            data: [107, 31, 635]
        }, {
            name: 'Prev Months Sales',
            data: [133, 156, 947]
        }, {
            name: 'Actual Sales',
            data: [973, 914, 533]
        }]
    });
//---------------------------------------------Yearly Sales---------------------------------------------
    $('#graph3').highcharts({
        title: {
            text: 'Yearly Sales'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        labels: {
            items: [{
                html: 'Total Yearly Sales',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Team Zoey',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'Ateam!',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Team Rob',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'column',
            name: 'Team Awesome',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total for Year',
            data: [{
                name: 'Jane',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'John',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Joe',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });

});
