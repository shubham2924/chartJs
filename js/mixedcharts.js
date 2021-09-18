
var employeeLabel = [],
employeeSalaryData = [],
employeeAgeData = [];

async function dummyChart() {
await getDummyData();

let ctx = document.getElementById("myChartr").getContext("2d");

let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: employeeLabel,
    datasets: [
      {
        barPercentage: 1.0,
        borderRadius: 5,
        tension: 0.5,
        label: "Employee Salary",
        backgroundColor: "#98BDFF",
        borderColor: "rgb(255, 99, 132)",
        data: employeeSalaryData,
      },
      {
        barPercentage: 1.0,
        borderRadius: 5,
        tension: 0.5,
        label: "Employee Age",
        backgroundColor: "#4B49AC",
        borderColor: "rgb(255, 99, 132)",
        data: employeeAgeData,
      },
      {
          type: 'line',
       barPercentage: 1.0,
       borderRadius: 5,
       tension: 0.5,
       label: "Employee Salary",
       backgroundColor: "#98BDFF",
       borderColor: "rgb(255, 99, 132)",
       data: employeeversion,
     },
    ],
  },

  // Configuration options go here
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
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
const apiUrl = "https://forbes400.herokuapp.com/api/forbes400?limit=10";
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
const version = barChatData.map((x) => x.archivedWorth);
employeeversion = version;

}
