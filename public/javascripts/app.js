let currentDT= new Date()
const table = document.getElementById("all-flights")

for (let row of table.rows){
    let date = Date(row.cells[3])
    console.log(date)
    if(date < currentDT) console.log("date passed")
}
