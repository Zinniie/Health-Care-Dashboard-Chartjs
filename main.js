const ctx = document.getElementById("barChart").getContext("2d");
let delayed;
// Chart.defaults.font.size = 20;
// Chart.defaults.elements.bar.borderWidth= 15;

const labels = [
  "Oct 2019",
  "Nov 2019",
  "Dec 2019",
  "Jan 2020",
  "Feb 2020",
  "Mar 2020",
];
const data = {
  labels,
  datasets: [
    {
      data: [1200, 1900, 750, 1000, 1300, 800],
      // label: "Redwhale",
      fill: true,
      pointRadius: 1,
      backgroundColor: "#33d69f",
      borderColor: "#fff",
    },
    {
      data: [2800, 3100, 4300, 2700, 2900, 4000],
      // label: "Redwhale",
      fill: true,
      pointRadius: 1,
      backgroundColor: "#713bdb",
      borderColor: "#fff",
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    indexAxis: "x",
    categoryPercentage: 0.3,
    barPercentage: 0.6,
    hitRadius: 30,
    hoverRadius: 15,
    borderRadius: 0,
    // borderWidth: 20,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    // tension: 0.3,
    scales: {
      y: {
        min: 0,
        ticks: {
          stepSize: 1500,
          padding: 20,
          callback: function (value) {
            return value + " " + " ";
          },
        },
        stacked: true,
        grid: {
          drawBorder: false,
          borderDash: [8, 4],
        },
      },
      x: {
        ticks: {
          padding: 20,
        },
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);
console.log(myChart);

// Chart2
const ctx2 = document.getElementById("doughnutchart").getContext("2d");
// let delayed;
Chart.defaults.font.size = 20;

const labelsdoughnut = ["Inpatients", "Outpatients"];
const datadoughnut = {
  labelsdoughnut,
  datasets: [
    {
      data: [72, 28],
      // label: "Redwhale",
      fill: true,
      //   hoverOffset: 4,
      pointRadius: 1,
      backgroundColor: ["#713bdb", "#33d69f"],
      borderColor: "#fff",
      cutout: "83%",
    },
  ],
};

const config2 = {
  type: "doughnut",
  data: datadoughnut,
  options: {
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    tooltips: {
      // enabled: false
    },
    // borderRadius: 2,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        displayColors: false,
      },
    },
  },
};

const doughnutChart = new Chart(ctx2, config2);

// Chart3
const ctx3 = document.getElementById("doughnutchart2").getContext("2d");
// let delayed;

const labelsdoughnut2 = ["Female", "Male"];
const datadoughnut2 = {
  labelsdoughnut2,
  datasets: [
    {
      data: [55, 45],
      // label: "Redwhale",
      fill: true,
      //   hoverOffset: 4,
      pointRadius: 1,
      backgroundColor: ["#713bdb", "#fe8a55"],
      borderColor: "#fff",
    },
  ],
};

const config3 = {
  type: "doughnut",
  data: datadoughnut2,
  options: {
    cutout: "83%",
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return (
            data["labels"][tooltipItem["index"]] +
            ": " +
            data["datasets"][0]["data"][tooltipItem["index"]] +
            "%"
          );
        },
      },
    },
    plugins: {
      indexAxis: "y",
      legend: {
        position: "top",
      },
      tooltip: {
        displayColors: false,
      },
      scales: {
        x: {
          grid: {
            display: true,
          },
          stacked: true,
        },
        y: {
          grid: {
            display: true,
          },
          stacked: true,
        },
      },
    },
  },
};

const doughnutChart2 = new Chart(ctx3, config3);

const ctx4 = document.getElementById("line-chart").getContext("2d");
let delayed2;
Chart.defaults.font.size = 18;

let gradient = ctx4.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "rgb(221, 168, 146)");
// gradient.addColorStop(0, "rgb(255, 255, 255)");.

// function mouseHandler(mousemove){
//   // console.log(mousemove)
//     const points = lineChart.getElementsAtEventForMode(mousemove, 'nearest', {
//       intersect:true}, true);

//       const colorArray = ['red'];

//       if (points[0]){
//       const dataset = points[0].datasetIndex;
//       const datapoint = points[0].index;

//       const borderColors = lineChart.data.datasets[dataset].borderColor[datapoint]

//       for(let i = 0; i < lineChart.data.datasets[dataset].borderColor.length; i++){
//         if (datapoint === i){
//           colorArray.push(borderColor)
//         }else{
//           colorArray.push('#666');
//         }

//       }
//     };
//   lineChart.config.options.scales.x.ticks.color = colorArray;
// }

const labelsLine = [
  "",
  "07 am",
  "",
  "08 am",
  "",
  "09 am",
  "",
  "10 am",
  "",
  "11 am",
  "",
  "12 pm",
  "",
];
const dataLine = {
  labels: labelsLine,
  datasets: [
    {
      data: [40, 110, 80, 110, 70, 70, 135, 60, 65, 140, 120, 125, 125],
      fill: true,
      pointRadius: 1,
      backgroundColor: gradient,
      borderColor: "#dda892",
    },
  ],
};

const config4 = {
  type: "line",
  data: dataLine,
  options: {
    onHover: (context) => {
      context.chart.update();
    },
    hitRadius: 30,
    hoverRadius: 15,
    // borderRadius: 60,
    // borderWidth: 10,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
      },
    },
    animation: {
      onComplete: () => {
        delayed2 = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },

    tension: 0.3,
    scales: {
      y: {
        min: 0,

        ticks: {
          padding: 20,
          stepSize: 50,
          // callback: function (value) {
          //   return value + " " + " ";
          // },
        },
        grid: {
          drawBorder: false,
          borderDash: [8, 4],
        },
      },
      x: {
        ticks: {
          padding: 20,
          // color: ['blue'],
        },
        grid: {
          display: false,
        },
      },
    },
  },
};

const lineChart = new Chart(ctx4, config4);

const ctx5 = document.getElementById("line-chart2").getContext("2d");
let delayed3;
Chart.defaults.font.size = 16;
// Chart.defaults.global.defaultFontColor = 'green';
let gradient5 = ctx5.createLinearGradient(0, 0, 0, 400);
// gradient5.addColorStop(0, "white");
gradient5.addColorStop(0, "rgb(175, 145, 234)");
gradient5.addColorStop(1, "rgb(252, 252, 253)");

const labelsLinee = ["", 14, "", 15, "", 16, "", 17, "", 18, "", 19, ""];
const dataLinee = {
  labels: labelsLinee,
  datasets: [
    {
      data: [320, 250, 430, 300, 350, 340, 300, 250, 350, 232, 300, 370, 282],
      pointRadius: 1,
      // backgroundColor: gradient,
      borderColor: gradient5,
    },
  ],
};

const config5 = {
  type: "line",
  data: dataLinee,
  options: {
    hitRadius: 30,
    hoverRadius: 15,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        displayColors: false,
      },
    },
    animation: {
      onComplete: () => {
        delayed3 = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },

    tension: 0.4,
    scales: {
      y: {
        min: 0,

        ticks: {
          stepSize: 150,
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        ticks: {
          color: "#fcfbfd",
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  },
};

const lineChartt = new Chart(ctx5, config5);

// scales: {
//     y: {
//       min: 100,

//       ticks: {
//         stepSize: 100,
//         callback: function (value) {
//           return value + "k";
//         },
//       },
//     },
//   },
