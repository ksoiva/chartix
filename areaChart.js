const ndata = document.getElementById("Ndatasets");

function setFocus() {
    ndata.focus();
}

let data = document.getElementById("Ndatasets").value;
let label = document.getElementById("Nlabels").value;

function buildTable() {
    console.log("onclick start")
    let nData = document.getElementById("Ndatasets").value;
    let nLabel = document.getElementById("Nlabels").value;
    if(nData===""||nLabel===""){
        alert("Please, fill starter info.");
        return;
    }
    let head = document.getElementById("headTable");
    head.insertCell(0).innerHTML = "labels\\points";
    for (let i = 0; i < nData; i++) {
        head.insertCell(i + 1).innerHTML = "D" + (i + 1);
    }

    let body = document.getElementById("bodyTable");

    let row;
    for (let i = 0; i < nLabel; i++) {
        row = body.insertRow(i);
    }
    console.log(body);
    console.log(nData)
    for (let j = 0; j < parseInt(nData) + 1; j++) {
        for (let i = 0; i < nLabel; i++) {
            body.rows[i].insertCell(j).innerHTML = "";
            console.log(body.toString());
        }
        console.log(j)
        console.log(row);
        console.log(row.cells.length);
    }
}

function buildChart() {
    let chart = document.getElementById("line-chart");
    let rows = document.getElementById("bodyTable").rows;
    let randomColor;
    let labels = [];
    let datasets = [];
    for (let i = 0; i < rows.length; i++) {
        labels.push(rows[i].cells[0].innerHTML);
    }
    console.log(labels);
    for (let i = 1; i < rows[0].cells.length; i++) {
        let dataT = [];
        for (let j = 0; j < labels.length; j++) {
            if(rows[j].cells[i].innerHTML===""){
                alert("Please, fill all cells in the table.")
                return;
            }
            dataT.push(parseInt(rows[j].cells[i].innerHTML));
        }
        console.log(dataT)
        randomColor = "#" +(Math.floor(Math.random()*16777215).toString(16));
        datasets.push({
            label: "Dataset " + i,
            data: dataT,
            borderColor: randomColor,
            backgroundColor: randomColor,
            fill: true
        })
        console.log(datasets)
    }
    const data = {
        labels: labels,
        datasets: datasets
    }
    chart.style.background = "#fff";

    let line_chart = new Chart(chart, {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    })
}