import Registro from "./models/registro.js";

function egreses () {
    let egresses = [];
    const addEgress = ( date, description, amount ) => {
        const egress = new Registro(date, description, amount);
        egresses.push(egress);
        UpdateEgressTable();
        UpdateEgressAmount();
    };
    const deleteEgress = ( index ) => {
        eggreses.splice(index, 1);
        UpdateEgressTable();
        UpdateEgressAmount();
    }

    const UpdateEgressTable = () => {
        const tbody = document.querySelector("#egress-table tbody");
        tbody.innerHTML = "";
        egresses.forEach((egress, index) => {
            const row = `
                <tr>
                    <td>${egress.date}</td>
                    <td>${egress.description}</td>
                    <td>${egress.amount}</td>
                    <td><button onclick="deleteEgress(${index})">Eliminar</button></td>
                </tr>
            `;
            tbody.innerHTML += row;
        });

    };
    const UpdateEgressAmount = () => {
        const totalEgresos = egresses.reduce((total, egreso) => total + egreso.monto, 0);
        document.getElementById('egress').value = totalEgresos;
    
    };

    const addEgressBtn = document.querySelector(".egress-btn");
    addEgressBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const date = document.getElementById("date-egress").value;
        const description = document.getElementById("description-egress").value;
        const amount = document.getElementById("amount-egress").value;
        if(!date || !description || !amount) {
            return;
        }
        addEgress(date, description, amount);
        document.getElementById("date-egress").value = "";
        document.getElementById("description-egress").value = "";
        document.getElementById("amount-egress").value = "";
    })

};
export default egreses;