// let myChart = document.getElementById('Total_Impressions-chart').getContext('2d');
        
// Global options
// Chart.defaults.global.width = 20;

    // let chart = new Chart(myChart, {
    //     type: 'bar',  //type of chart 
    //     data:{
    //         labels:['','','','','','','','','','',' ' ],
    //         datasets: [{
    //             data: [46, 14, 106, 106, 280, 411, 133, 221, 683, 247, 560, 340],
    //             label: "",
    //             borderColor: "#458af7",
    //             backgroundColor: '#233A6C',
    //             fill: false
    //         },
    //     ]

    //     },
    //     options:{
    //         scales:{
    //             xAxes: [{
    //                 barThickness: 30,
                    
    //               }],
    //         },
    //         title:{
    //             display:true,
    //             text:'View the monthly impressions you get on Ad-Dekho website',
    //             fontSize:15,
                
    //         }
            
    //     }
    // });

    google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['','Impressions' ],
        [' ',46],
          [' ', 14],
          [' ', 106],
          [' ', 106],
          [' ', 280],
          [' ', 411],
          [' ', 133],
          [' ',221],
          [' ',683],
          [' ',227],
          [' ',560],
          [' ',340]
    ]);

    var options = {
        chart: {
            title: 'View the monthly impressions you get on Ad-Dekho website',
            // subtitle: '',
        },
        bar: 'vertical',
        vAxis: { format: 'decimal' },
        height: 300,
        width: 700,
        colors: ['#233A6C']
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));

    var btns = document.getElementById('btn-group');

    btns.onclick = function(e) {

        if (e.target.tagName === 'BUTTON') {
            options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    }
}

document.getElementById("period").innerHTML = document.getElementById("time-prd").innerHTML + ':';
document.getElementById('total').innerHTML = 'Total' + ':';