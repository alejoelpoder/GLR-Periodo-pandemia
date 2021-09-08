$(document).ready(function () {
    
    var b = 1;
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawChartF);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Casos'],
        ['Mar 6',  1]
      ]);

      var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

      var chartArea = {
        width: '300px'
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
    }

    function drawChartF() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Fallecidos'],
        ['Mar 6',  0]
      ]);

      var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

      var chartArea = {
        width: '300px'
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));

      chart.draw(data, options);
    }
    

    $('.C-carousel-navigation-button--next').click(function () {
        b = b + 1;
        if(b == 2) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['Mar 15',  71]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['Mar 15',  0]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 3) {

          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['Mar 15',  71],
              ['Mar 19',  234]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['Mar 15',  0],
              ['Mar 19',  3]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 4) {

          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['Mar 15',  71],
              ['Mar 19',  234],
              ['Abr 8',  4342]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['Mar 15',  0],
              ['Mar 19',  3],
              ['Abr 8',  121]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 5) {

          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['Mar 15',  71],
              ['Mar 19',  234],
              ['Abr 8',  4342],
              ['Abr 13',  9784]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['Mar 15',  0],
              ['Mar 19',  3],
              ['Abr 8',  121],
              ['Abr 13',  216]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 6) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['',  71],
              ['',  234],
              ['',  4342],
              ['',  9784],
              ['May 4',  47372]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['',  0],
              ['',  3],
              ['',  121],
              ['',  216],
              ['May 4',  1344]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 7) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['',  71],
              ['',  234],
              ['',  4342],
              ['',  9784],
              ['',  47372],
              ['May 11',  68822]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['',  0],
              ['',  3],
              ['',  121],
              ['',  216],
              ['',  1344],
              ['May 11',  1961]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 8) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['',  71],
              ['',  234],
              ['',  4342],
              ['',  9784],
              ['',  47372],
              ['',  68822],
              ['Jun 4',  183198]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['',  0],
              ['',  3],
              ['',  121],
              ['',  216],
              ['',  1344],
              ['',  1961],
              ['Jun 4',  5031]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 9) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['',  71],
              ['',  234],
              ['',  4342],
              ['',  9784],
              ['',  47372],
              ['',  68822],
              ['',  183198],
              ['Jun 23',  260810]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['',  0],
              ['',  3],
              ['',  121],
              ['',  216],
              ['',  1344],
              ['',  1961],
              ['',  5031],
              ['Jun 23',  8404]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 10) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Abr 8',  4342],
              ['',  9784],
              ['',  47372],
              ['',  68822],
              ['',  183198],
              ['',  260810],
              ['Jul 13',  330123]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Abr 8',  121],
              ['',  216],
              ['',  1344],
              ['',  1961],
              ['',  5031],
              ['',  8404],
              ['Jul 13',  12054]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 11) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Abr 13',  9784],
              ['',  47372],
              ['',  68822],
              ['',  183198],
              ['',  260810],
              ['',  330123],
              ['Jul 19',  353590]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Abr 13',  216],
              ['',  1344],
              ['',  1961],
              ['',  5031],
              ['',  8404],
              ['',  12054],
              ['Jul 19',  13187]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 12) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['May 4',  47372],
              ['',  68822],
              ['',  183198],
              ['',  260810],
              ['',  330123],
              ['',  353590],
              ['Jul 22',  366550]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['May 4',  1344],
              ['',  1961],
              ['',  5031],
              ['',  8404],
              ['',  12054],
              ['',  13187],
              ['Jul 22',  17455]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 13) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['May 11',  68822],
              ['',  183198],
              ['',  260810],
              ['',  330123],
              ['',  353590],
              ['',  366550],
              ['Ago 21',  576067]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['May 11',  1961],
              ['',  5031],
              ['',  8404],
              ['',  12054],
              ['',  13187],
              ['',  17455],
              ['Ago 21',  27245]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 14) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Jun 4',  183198],
              ['',  260810],
              ['',  330123],
              ['',  353590],
              ['',  366550],
              ['',  576067],
              ['Ago 26',  613378]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Jun 4',  5031],
              ['',  8404],
              ['',  12054],
              ['',  13187],
              ['',  17455],
              ['',  27245],
              ['Ago 26',  28124]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 15) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Jun 23',  260810],
              ['',  330123],
              ['',  353590],
              ['',  366550],
              ['',  576067],
              ['',  613378],
              ['Ago 30',  647166]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Jun 23',  8404],
              ['',  12054],
              ['',  13187],
              ['',  17455],
              ['',  27245],
              ['',  28124],
              ['Ago 30',  28788]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 16) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Jul 13',  330123],
              ['',  353590],
              ['',  366550],
              ['',  576067],
              ['',  613378],
              ['',  647166],
              ['Set 15',  738020]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Jul 13',  12054],
              ['',  13187],
              ['',  17455],
              ['',  27245],
              ['',  28124],
              ['',  28788],
              ['Set 15',  30927]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 17) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Jul 19',  353590],
              ['',  366550],
              ['',  576067],
              ['',  613378],
              ['',  647166],
              ['',  738020],
              ['Set 16',  744400]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Jul 19',  13187],
              ['',  17455],
              ['',  27245],
              ['',  28124],
              ['',  28788],
              ['',  30927],
              ['Set 16',  31051]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 18) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Jul 22',  366550],
              ['',  576067],
              ['',  613378],
              ['',  647166],
              ['',  738020],
              ['',  744400],
              ['Oct 27',  892497]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Jul 22',  17455],
              ['',  27245],
              ['',  28124],
              ['',  28788],
              ['',  30927],
              ['',  31051],
              ['Oct 27',  34257]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 19) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Ago 21',  576067],
              ['',  613378],
              ['',  647166],
              ['',  738020],
              ['',  744400],
              ['',  892497],
              ['Nov 4',  911787]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Ago 21',  27245],
              ['',  28124],
              ['',  28788],
              ['',  30927],
              ['',  31051],
              ['',  34257],
              ['Nov 4',  34671]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 20) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Ago 26',  613378],
              ['',  647166],
              ['',  738020],
              ['',  744400],
              ['',  892497],
              ['',  911787],
              ['Nov 14',  934899]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Ago 26',  28124],
              ['',  28788],
              ['',  30927],
              ['',  31051],
              ['',  34257],
              ['',  34671],
              ['Nov 14',  35177]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 21) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Ago 30',  647166],
              ['',  738020],
              ['',  744400],
              ['',  892497],
              ['',  911787],
              ['',  934899],
              ['Dic 20',  997517]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Ago 30',  28788],
              ['',  30927],
              ['',  31051],
              ['',  34257],
              ['',  34671],
              ['',  35177],
              ['Dic 20',  37103]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 22) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Set 15',  738020],
              ['',  744400],
              ['',  892497],
              ['',  911787],
              ['',  934899],
              ['',  997517],
              ['Dic 22',  1000153]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Set 15',  30927],
              ['',  31051],
              ['',  34257],
              ['',  34671],
              ['',  35177],
              ['',  37103],
              ['Dic 22',  37218]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 23) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Set 16',  744400],
              ['',  892497],
              ['',  911787],
              ['',  934899],
              ['',  997517],
              ['',  1000153],
              ['Dic 26',  1006318]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Set 16',  31051],
              ['',  34257],
              ['',  34671],
              ['',  35177],
              ['',  37103],
              ['',  37218],
              ['Dic 26',  37414]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 24) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Oct 27',  892497],
              ['',  911787],
              ['',  934899],
              ['',  997517],
              ['',  1000153],
              ['',  1006318],
              ['Ene 17',  1064909]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Oct 27',  34257],
              ['',  34671],
              ['',  35177],
              ['',  37103],
              ['',  37218],
              ['',  37414],
              ['Ene 17',  38871]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 25) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Nov 11',  911787],
              ['',  934899],
              ['',  997517],
              ['',  1000153],
              ['',  1006318],
              ['',  1064909],
              ['Feb 7',  1186698]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Nov 11',  34671],
              ['',  35177],
              ['',  37103],
              ['',  37218],
              ['',  37414],
              ['',  38871],
              ['Feb 7',  42308]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 26) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Nov 14',  934899],
              ['',  997517],
              ['',  1000153],
              ['',  1006318],
              ['',  1064909],
              ['',  1186698],
              ['Feb 10',  1203502]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Nov 14',  35177],
              ['',  37103],
              ['',  37218],
              ['',  37414],
              ['',  38871],
              ['',  42308],
              ['Feb 10',  42859]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 27) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Dic 20',  997517],
              ['',  1000153],
              ['',  1006318],
              ['',  1064909],
              ['',  1186698],
              ['',  1203502],
              ['Feb 16',  1244729]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Dic 20',  37103],
              ['',  37218],
              ['',  37414],
              ['',  38871],
              ['',  42308],
              ['',  42859],
              ['Feb 16',  44056]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 28) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Dic 22',  1000153],
              ['',  1006318],
              ['',  1064909],
              ['',  1186698],
              ['',  1203502],
              ['',  1244729],
              ['Mar 8',  1374467]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Dic 22',  37218],
              ['',  37414],
              ['',  38871],
              ['',  42308],
              ['',  42859],
              ['',  44056],
              ['Mar 8',  47973]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 30) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

          b = 1;

        }

    });

    $('.C-carousel-navigation-button--prev').click(function () {
        b = b - 1;

        if(b == 0) {
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Dic 22',  1000153],
              ['',  1006318],
              ['',  1064909],
              ['',  1186698],
              ['',  1203502],
              ['',  1244729],
              ['Mar 8',  1374467]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Dic 22',  37218],
              ['',  37414],
              ['',  38871],
              ['',  42308],
              ['',  42859],
              ['',  44056],
              ['Mar 8',  47973]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

          b = 29;

        }

        if(b == 1) {
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }
    
        if(b == 2) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['Mar 15',  71]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['Mar 15',  0]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 3) {

          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['Mar 15',  71],
              ['Mar 19',  234]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['Mar 15',  0],
              ['Mar 19',  3]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 4) {

          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['Mar 15',  71],
              ['Mar 19',  234],
              ['Abr 8',  4342]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['Mar 15',  0],
              ['Mar 19',  3],
              ['Abr 8',  121]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 5) {

          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['Mar 15',  71],
              ['Mar 19',  234],
              ['Abr 8',  4342],
              ['Abr 13',  9784]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['Mar 15',  0],
              ['Mar 19',  3],
              ['Abr 8',  121],
              ['Abr 13',  216]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 6) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['',  1],
              ['',  71],
              ['Mar 19',  234],
              ['Abr 8',  4342],
              ['Abr 13',  9784],
              ['May 4',  47372]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['',  0],
              ['',  3],
              ['',  121],
              ['',  216],
              ['May 4',  1344]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }


        }

        if(b == 7) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['',  71],
              ['',  234],
              ['',  4342],
              ['',  9784],
              ['',  47372],
              ['May 11',  68822]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['',  0],
              ['',  3],
              ['',  121],
              ['',  216],
              ['',  1344],
              ['May 11',  1961]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 8) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['',  71],
              ['',  234],
              ['',  4342],
              ['',  9784],
              ['',  47372],
              ['',  68822],
              ['Jun 4',  183198]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['',  0],
              ['',  3],
              ['',  121],
              ['',  216],
              ['',  1344],
              ['',  1961],
              ['Jun 4',  5031]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 9) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Mar 6',  1],
              ['',  71],
              ['',  234],
              ['',  4342],
              ['',  9784],
              ['',  47372],
              ['',  68822],
              ['',  183198],
              ['Jun 23',  260810]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Mar 6',  0],
              ['',  0],
              ['',  3],
              ['',  121],
              ['',  216],
              ['',  1344],
              ['',  1961],
              ['',  5031],
              ['Jun 23',  8404]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 10) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Abr 8',  4342],
              ['',  9784],
              ['',  47372],
              ['',  68822],
              ['',  183198],
              ['',  260810],
              ['Jul 13',  330123]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Abr 8',  121],
              ['',  216],
              ['',  1344],
              ['',  1961],
              ['',  5031],
              ['',  8404],
              ['Jul 13',  12054]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 11) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Abr 13',  9784],
              ['',  47372],
              ['',  68822],
              ['',  183198],
              ['',  260810],
              ['',  330123],
              ['Jul 19',  353590]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Abr 13',  216],
              ['',  1344],
              ['',  1961],
              ['',  5031],
              ['',  8404],
              ['',  12054],
              ['Jul 19',  13187]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 12) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['May 4',  47372],
              ['',  68822],
              ['',  183198],
              ['',  260810],
              ['',  330123],
              ['',  353590],
              ['Jul 22',  366550]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['May 4',  1344],
              ['',  1961],
              ['',  5031],
              ['',  8404],
              ['',  12054],
              ['',  13187],
              ['Jul 22',  17455]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 13) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['May 11',  68822],
              ['',  183198],
              ['',  260810],
              ['',  330123],
              ['',  353590],
              ['',  366550],
              ['Ago 21',  576067]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['May 11',  1961],
              ['',  5031],
              ['',  8404],
              ['',  12054],
              ['',  13187],
              ['',  17455],
              ['Ago 21',  27245]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 14) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Jun 4',  183198],
              ['',  260810],
              ['',  330123],
              ['',  353590],
              ['',  366550],
              ['',  576067],
              ['Ago 26',  613378]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Jun 4',  5031],
              ['',  8404],
              ['',  12054],
              ['',  13187],
              ['',  17455],
              ['',  27245],
              ['Ago 26',  28124]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 15) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Jun 23',  260810],
              ['',  330123],
              ['',  353590],
              ['',  366550],
              ['',  576067],
              ['',  613378],
              ['Ago 30',  647166]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Jun 23',  8404],
              ['',  12054],
              ['',  13187],
              ['',  17455],
              ['',  27245],
              ['',  28124],
              ['Ago 30',  28788]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 16) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Jul 13',  330123],
              ['',  353590],
              ['',  366550],
              ['',  576067],
              ['',  613378],
              ['',  647166],
              ['Set 15',  738020]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Jul 13',  12054],
              ['',  13187],
              ['',  17455],
              ['',  27245],
              ['',  28124],
              ['',  28788],
              ['Set 15',  30927]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 17) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Jul 19',  353590],
              ['',  366550],
              ['',  576067],
              ['',  613378],
              ['',  647166],
              ['',  738020],
              ['Set 16',  744400]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Jul 19',  13187],
              ['',  17455],
              ['',  27245],
              ['',  28124],
              ['',  28788],
              ['',  30927],
              ['Set 16',  31051]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 18) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Jul 22',  366550],
              ['',  576067],
              ['',  613378],
              ['',  647166],
              ['',  738020],
              ['',  744400],
              ['Oct 27',  892497]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Jul 22',  17455],
              ['',  27245],
              ['',  28124],
              ['',  28788],
              ['',  30927],
              ['',  31051],
              ['Oct 27',  34257]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 19) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Ago 21',  576067],
              ['',  613378],
              ['',  647166],
              ['',  738020],
              ['',  744400],
              ['',  892497],
              ['Nov 4',  911787]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Ago 21',  27245],
              ['',  28124],
              ['',  28788],
              ['',  30927],
              ['',  31051],
              ['',  34257],
              ['Nov 4',  34671]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 20) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Ago 26',  613378],
              ['',  647166],
              ['',  738020],
              ['',  744400],
              ['',  892497],
              ['',  911787],
              ['Nov 14',  934899]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Ago 26',  28124],
              ['',  28788],
              ['',  30927],
              ['',  31051],
              ['',  34257],
              ['',  34671],
              ['Nov 14',  35177]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 21) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Ago 30',  647166],
              ['',  738020],
              ['',  744400],
              ['',  892497],
              ['',  911787],
              ['',  934899],
              ['Dic 20',  997517]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Ago 30',  28788],
              ['',  30927],
              ['',  31051],
              ['',  34257],
              ['',  34671],
              ['',  35177],
              ['Dic 20',  37103]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 22) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Set 15',  738020],
              ['',  744400],
              ['',  892497],
              ['',  911787],
              ['',  934899],
              ['',  997517],
              ['Dic 22',  1000153]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Set 15',  30927],
              ['',  31051],
              ['',  34257],
              ['',  34671],
              ['',  35177],
              ['',  37103],
              ['Dic 22',  37218]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 23) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Set 16',  744400],
              ['',  892497],
              ['',  911787],
              ['',  934899],
              ['',  997517],
              ['',  1000153],
              ['Dic 26',  1006318]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Set 16',  31051],
              ['',  34257],
              ['',  34671],
              ['',  35177],
              ['',  37103],
              ['',  37218],
              ['Dic 26',  37414]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 24) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Oct 27',  892497],
              ['',  911787],
              ['',  934899],
              ['',  997517],
              ['',  1000153],
              ['',  1006318],
              ['Ene 17',  1064909]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Oct 27',  34257],
              ['',  34671],
              ['',  35177],
              ['',  37103],
              ['',  37218],
              ['',  37414],
              ['Ene 17',  38871]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 25) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Nov 11',  911787],
              ['',  934899],
              ['',  997517],
              ['',  1000153],
              ['',  1006318],
              ['',  1064909],
              ['Feb 7',  1186698]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Nov 11',  34671],
              ['',  35177],
              ['',  37103],
              ['',  37218],
              ['',  37414],
              ['',  38871],
              ['Feb 7',  42308]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 26) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Nov 14',  934899],
              ['',  997517],
              ['',  1000153],
              ['',  1006318],
              ['',  1064909],
              ['',  1186698],
              ['Feb 10',  1203502]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Nov 14',  35177],
              ['',  37103],
              ['',  37218],
              ['',  37414],
              ['',  38871],
              ['',  42308],
              ['Feb 10',  42859]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

        if(b == 27) {
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
          google.charts.setOnLoadCallback(drawChartF);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Casos'],
              ['Dic 20',  997517],
              ['',  1000153],
              ['',  1006318],
              ['',  1064909],
              ['',  1186698],
              ['',  1203502],
              ['Feb 16',  1244729]
            ]);

            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };

            var chartArea = {
              width: '300px'
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
          }

          function drawChartF() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Fallecidos'],
              ['Dic 20',  37103],
              ['',  37218],
              ['',  37414],
              ['',  38871],
              ['',  42308],
              ['',  42859],
              ['Feb 16',  44056]
            ]);
      
            var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'none',
        colors:['yellow','#004411'],
        annotations: {
          colors:['white','#004411'],
        },
        legend: {position: 'top', textStyle: {color: 'white'}},
        hAxis: {
          textStyle: {
            color: 'white',
          }
        },
        vAxis: {
          textStyle: {
            color: 'white',
          }
        }
      };
      
            var chartArea = {
              width: '300px'
            };
      
            var chart = new google.visualization.LineChart(document.getElementById('curve_chart-f'));
      
            chart.draw(data, options);
          }

        }

    });

});