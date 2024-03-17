import Registro from "./models/registro.js";

function revenues(){
    let revenues = [];
    const addRevenue = ( date, description, amount ) => {
        const revenue = new Registro(date, description, amount);
        revenues.push(revenue);
        UpdateRevenueTable();
        UpdateRevenueAmount();
    };
    const deleteRevenue = ( index ) => {
        revenues.splice(index, 1);
        UpdateRevenueTable();
        UpdateRevenueAmount();
    };
    const UpdateRevenueTable = () => {
        
    }
    const UpdateRevenueAmount = () => {
        
    }

    const addRevenueBtn = document.querySelector(".revenue-btn");
    addRevenueBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const date = document.getElementById("date-revenue").value;
        const description = document.getElementById("description-revenue").value;
        const amount = document.getElementById("amount-revenue").value;
        if(!date || !description || !amount) {
            return;
        }
        addRevenue(date, description, amount);
        document.getElementById("date-revenue").value = "";
        document.getElementById("description-revenue").value = "";
        document.getElementById("amount-revenue").value = "";
    });
};
export default revenues;