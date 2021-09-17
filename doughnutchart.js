
var employeeLabel = [],
employeeSalaryData = [],
employeeAgeData = [];

async function dummyChart() {
await getDummyData();

let ctx = document.getElementById("myChartb").getContext("2d");

let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "doughnut",

  // The data for our dataset
  data: {
    labels: employeeLabel,
    datasets: [
    //   {
    //      barPercentage: 1.0,
    //      fill: false,
    //     // categoryPercentage: 1.0,
    //     borderRadius: 5,
    //     tension: 0.5,
    //     label: "Employee Salary",
    //     backgroundColor: "#98BDFF",
    //     borderColor: "#4747A1",
    //     data: employeeSalaryData,
    //   },
      {
         barPercentage: 1.0,
         fill: false,
        // categoryPercentage: 1.0,
        borderRadius: 0,
        tension: 0.5,
        label: "Employee Age",
        backgroundColor: ['#FFB1C1','#FFE6AA','#9AD0F5','#EBE0FF','#DBF2F2'],
        borderColor: "#F09397",
        data: employeeAgeData,
      },
    ],
  },

  // Configuration options go here
  options: {
    elements: {
        point:{
            radius: 1.5
        }
    },
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
//   const salary = barChatData.data.map((x) => x.employee_salary)
//   console.log(salary)
//   const age = barChatData.data.map((x) => x.employee_age)
//   console.log(age)
//   const name = barChatData.data.map((x) => x.employee_name)
const name = barChatData.map((x) => x.personName);
console.log(name);
const networth = barChatData.map((x) => x.finalWorth);
console.log(networth);
const pvtworth = barChatData.map((x) => x.privateAssetsWorth);
employeeSalaryData = networth;
employeeAgeData = pvtworth;
employeeLabel = name;
}
