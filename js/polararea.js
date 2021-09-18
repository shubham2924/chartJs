

var employeeLabel = [],
employeeSalaryData = [],
employeeAgeData = [];

async function dummyChart() {
await getDummyData();

let ctx = document.getElementById("myChartq").getContext("2d");

let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "polarArea",

  // The data for our dataset
  data: {
    labels: employeeLabel,
    datasets: [
      {
        barPercentage: 1.0,
        borderRadius: 3,
        tension: 0.5,
        label: "Employee Age",
        backgroundColor: ['#FFB1C1','#FFE6AA','#9AD0F5','#EBE0FF','#DBF2F2'],
        data: employeeSalaryData,
      },
    ],
  },

  // Configuration options go here
  options: {
      indexAxis:'y',
    scales: {
        x: {
            display: false,
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
          grid: {
            display: false,
          },
        },
    },
    cornerRadius: 5,
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
    },
  },
});
}

dummyChart();

//Fetch Data from API

async function getDummyData() {
//const apiUrl = "http://dummy.restapiexample.com/api/v1/employees"
const apiUrl = "https://forbes400.herokuapp.com/api/forbes400?limit=5";
const response = await fetch(apiUrl);
const barChatData = await response.json();
console.log(barChatData);
const name = barChatData.map((x) => x.personName);
console.log(name);
const networth = barChatData.map((x) => x.finalWorth);
console.log(networth);
const pvtworth = barChatData.map((x) => x.privateAssetsWorth);
employeeSalaryData = networth;
employeeAgeData = pvtworth;
employeeLabel = name;
}
