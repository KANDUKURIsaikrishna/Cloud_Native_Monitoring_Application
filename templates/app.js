
// Create CPU Gauge
var cpuGauge = {
  type: "indicator",
  mode: "gauge+number",
  value: cpuMetric,
  title: { text: "CPU Utilization" },
  gauge: {
    axis: { range: [0, 100] },
    bar: { color: "darkred" },
    steps: [
      { range: [0, 50], color: "green" },
      { range: [50, 80], color: "yellow" },
      { range: [80, 100], color: "red" }
    ],
    threshold: {
      line: { color: "black", width: 4 },
      thickness: 0.75,
      value: 80
    }
  }
};

// Create Memory Gauge
var memGauge = {
  type: "indicator",
  mode: "gauge+number",
  value: memMetric,
  title: { text: "Memory Utilization" },
  gauge: {
    axis: { range: [0, 100] },
    bar: { color: "darkblue" },
    steps: [
      { range: [0, 50], color: "green" },
      { range: [50, 80], color: "yellow" },
      { range: [80, 100], color: "red" }
    ],
    threshold: {
      line: { color: "black", width: 4 },
      thickness: 0.75,
      value: 80
    }
  }
};

// Layout for both gauges
var layout = {
  width: 500,
  height: 300,
  margin: { t: 0, b: 0 }
};

// Plot the gauges
Plotly.newPlot("cpu-gauge", [cpuGauge], layout);
Plotly.newPlot("mem-gauge", [memGauge], layout);
