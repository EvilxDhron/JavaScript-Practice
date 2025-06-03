/* Dynamic HTML Table Project */

const rows = 3;
const cols = 4;
const table = document.getElementById("myTable");
table.style.color = "white";
table.style.fontSize = "2rem";

for(let i = 1; i <= rows; i++){
    const tr = document.createElement("tr");
    for(let c = 1; c <= cols; c++){
        const td = document.createElement("td");
        td.textContent = `Row ${i} Col ${c}`;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}