import Registro from "./models/registro.js";

function revenues() {
    let revenues = [];

    const addRevenue = (date, description, amount) => {
        console.log("entro aqui")
        const revenue = new Registro(date, description, amount);
        revenues.push(revenue);
        UpdateRevenueTable();
        UpdateRevenueAmount();
    };

    const deleteRevenue = (index) => {
        revenues.splice(index, 1);
        UpdateRevenueTable();
        UpdateRevenueAmount();
    };

    const UpdateRevenueTable = () => {
        const tbody = document.querySelector("#revenue-table tbody");
        tbody.innerHTML = "";
        revenues.forEach((revenue, index) => {
            const row = `
                <tr>
                    <td>${revenue.date}</td>
                    <td>${revenue.description}</td>
                    <td>${revenue.amount}</td>
                    <td><button class="delete-revenue" data-index="${index}">Eliminar</button></td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    };

    const UpdateRevenueAmount = () => {
        const revenueValue = document.getElementById('revenue-value');
        const totalRevenues = revenues.reduce((total, revenue) => total + parseFloat(revenue.amount), 0);
        revenueValue.value = totalRevenues || 0; // Si totalRevenues es NaN, establece el valor como 0
    };

    const addRevenueBtn = document.querySelector(".revenue-btn");
    addRevenueBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const date = document.getElementById("date-revenue").value;
        const description = document.getElementById("description-revenue").value;
        const amount = document.getElementById("amount-revenue").value;
        if (!date || !description || !amount) {
            return;
        }
        addRevenue(date, description, amount);
        document.getElementById("date-revenue").value = "";
        document.getElementById("description-revenue").value = "";
        document.getElementById("amount-revenue").value = "";
    });

    // Asignar evento para eliminar ingresos
    const revenueTable = document.querySelector("#revenue-table");
    revenueTable.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-revenue")) {
            const index = parseInt(e.target.getAttribute("data-index"));
            deleteRevenue(index);
        }
    });
};

export default revenues;
