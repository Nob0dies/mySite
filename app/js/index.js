/**
 * Created by Nobodies on 20.05.2016.
 */

var navItems = document.querySelectorAll("nav > menu > li");
var sectionItems = document.querySelectorAll(".container > section");

for (var i = 0; i < navItems.length; i++) {
    navItems[i].onclick = (function(i) {
        return function() {
            setActive(i, navItems);
            setActive(i, sectionItems);
        }
    })(i);
}

function setActive(index, array) {
    for (var i = 0; i < array.length; i++) {
        array[i].classList.remove('active');
    }
    array[index].classList.add('active');
}



/*-----------------------------------------------------
 Screen flipper 
 -----------------------------------------------------*/












    /*-----------------------------------------------------
     END of Screen flipper 
     -----------------------------------------------------*/

    /*
     JS Class Manipulation Cheat Sheet
     document.body.classList.contains('thatClass');
     document.body.classList.add('thisClass');
     document.body.classList.remove('thatClass');
     document.body.classList.toggle('anotherClass');
     TODO: Look at classie
     */


//CHART SKILL
    google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawCharts);
function drawCharts() {

    // BEGIN BAR CHART

    // create zero data so the bars will 'grow'
    var barZeroData = google.visualization.arrayToDataTable([
        ['Day', 'Page Views', 'Unique Views'],
        ['One', 0, 0],
        ['Two', 0, 0],
        ['Three', 0, 0],
        ['Four', 0, 0],
        ['Fife', 0, 0],
        ['Six', 0, 0],
        ['Seven', 0, 0]
    ]);
    // actual bar chart data
    var barData = google.visualization.arrayToDataTable([
        ['One', 'Page Views', 'Unique Views'],
        ['Two', 105, 60],
        ['Three', 137, 91],
        ['Four', 66, 40],
        ['Fife', 103, 54],
        ['Six', 100, 48],
        ['Seven', 11, 96],
        ['Sat', 66, 32]
    ]);
    // set bar chart options
    var barOptions = {
        focusTarget: 'category',
        backgroundColor: 'transparent',
        colors: ['yellow', 'pink'],
        fontName: 'Open Sans',
        chartArea: {
            left: 25,
            top: 0,
            width: '100%',
            height: '40%'
        },
        bar: {
            groupWidth: '80%'
        },
        hAxis: {
            textStyle: {
                fontSize: 8
            }
        },
        vAxis: {
            minValue: 0,
            maxValue: 1500,
            baselineColor: '#DDD',
            gridlines: {
                color: 'white',
                count: 0
            },
            textStyle: {
                fontSize: 11
            }
        },
        legend: {
            position: 'bottom',
            textStyle: {
                fontSize: 8
            }
        },
        animation: {
            duration: 1200,
            easing: 'out'
        }
    };
    // draw bar chart twice so it animates
    var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
    barChart.draw(barZeroData, barOptions);
    barChart.draw(barData, barOptions);


    // BEGIN PIE CHART

    // pie chart data
    var pieData = google.visualization.arrayToDataTable([
        ['Tehnologi', 'Procent'],
        ['HTML', 72],
        ['CSS', 456],
        ['JS', 134],
        ['JQuery', 94],
        ['Bootstrap', 215]
    ]);
    // pie chart options
    var pieOptions = {
        backgroundColor: 'transparent',
        pieHole: 0.4,
        colors: ["blueviolet",
            "yellow",
            "orange",
            "pink",
            "darkmagenta",
            "deeppink",
            "lightcoral",
            "forestgreen",
            "navy",
            "gray"],
        pieSliceText: 'value',

        tooltip: {
            text: 'percentage'
        },
        fontName: 'Open Sans',
        fontSize: 7,
        chartArea: {
            width: '100%',
            height: '80%'
        },
        legend: {
            textStyle: {
                fontSize: 8
            }
        }
    };
    // draw pie chart
    var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    pieChart.draw(pieData, pieOptions);
}