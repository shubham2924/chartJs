
var employeeLabel = [],
employeeSalaryData = [],
employeeAgeData = [];

async function dummyChart() {
await getDummyData();

let ctx = document.getElementById("myChartc").getContext("2d");

let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: employeeLabel,
    datasets: [
    //   {
    //     fill: true,
    //      barPercentage: 1.0,
        
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
         fill: true,
        // categoryPercentage: 1.0,
        borderRadius: 5,
        tension: 0.5,
        label: "Employee Age",
        backgroundColor: "#FFB1C1",
        // borderColor: "#F09397",
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
