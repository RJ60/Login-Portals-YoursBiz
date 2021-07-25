// For Drawing Graphs

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

// Graph ends

// Code for selecting duration according to duration selected by the user in dropdown button

document.getElementById("period").innerHTML = document.getElementById("time-prd").innerHTML + ':';
document.getElementById('total').innerHTML = 'Total' + ':';