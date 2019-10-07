var testing =  [
  {
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16]
  }
]

var TESTER = document.getElementById("tester");
Plotly.plot(
  TESTER,
 testing,
  {
    margin: { t: 0 }
}
);


var xValue = ['Product A', 'Product B', 'Product C'];

var yValue = [20, 14, 23];
var yValue2 = [24, 16, 20];

var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  opacity: 0.5,
  marker: {
    color: 'rgb(158,202,225)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var trace2 = {
  x: xValue,
  y: yValue2,
  type: 'bar',
  text: yValue2.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var data = [trace1,trace2];

var layout = {
  title: 'January 2013 Sales Report'
};

Plotly.newPlot('myDiv', data, layout);