import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"
const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith('employee')) {
            const [, employeeID] = itemClicked.id.split('--')
            for(let employee of employees) {
                if(employee.id === parseInt(employeeID))
                window.alert(getOrderCount(employeeID,employee.name))
            }
        }
    }
)




//define a function that will take a employeeID parameter
export const getOrderCount = (SelectedEmployeeID,employeeName) => {
    //declare a starter point for the counter = 0
    let counter = 0
    let html = `${employeeName} `
    //iterate through the orders
    for(let order of orders) {
        //if there is a match with the employeeID
        if (order.employeeId === parseInt(SelectedEmployeeID))
            //then add 1++ to the counter
            counter ++
    }
    //outside of the forloop have the string interpolated
    //${employee.name} sold ${counter} products
   return html += `sold ${counter} products`
}

