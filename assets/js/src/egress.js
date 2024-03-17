import Registro from "./models/registro.js";

function egreses() {
    let egresses = [];

    const addEgress = (date, description, amount) => {
        const egress = new Registro(date, description, amount);
        egresses.push(egress);
        UpdateEgressTable();
        UpdateEgressAmount();
    };

    const deleteEgress = (index) => {
        egresses.splice(index, 1);
        UpdateEgressTable();
        UpdateEgressAmount();
    };

    const UpdateEgressTable = () => {
        const tbody = document.querySelector("#egress-table tbody");
        tbody.innerHTML = "";
        egresses.forEach((egress, index) => {
            const row = `
                <tr>
                    <td>${egress.date}</td>
                    <td>${egress.description}</td>
                    <td>${egress.amount}</td>
                    <td><button class="delete-egress" value="${index}">Eliminar</button></td>
                </tr>
            `;
            tbody.innerHTML += row;
        });

        const deleteBtn = document.querySelectorAll(".delete-egress");
        deleteBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const index = e.target.value;
                deleteEgress(index);
            });
        });
    };

    const UpdateEgressAmount = () => {
        const egressValue = document.getElementById('egress-value');
        const totalEgresos = egresses.reduce((total, egreso) => total + parseFloat(egreso.amount), 0);
        egressValue.value = totalEgresos || 0;
    };

    const addEgressBtn = document.querySelector(".egress-btn");
    addEgressBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const date = document.getElementById("date-egress").value;
        const description = document.getElementById("description-egress").value;
        const amount = document.getElementById("amount-egress").value;
        if (!date || !description || !amount) {
            return;
        }
        addEgress(date, description, amount);
        document.getElementById("date-egress").value = "";
        document.getElementById("description-egress").value = "";
        document.getElementById("amount-egress").value = "";
    });
}

export default egreses;
