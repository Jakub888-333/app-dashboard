const userKey = 'customers'

const defaultCustomers = [
    { id:1, meno: "Jožo Dilini", suma: "1000", createdDate: new Date().toISOString() },
    { id:2, meno: "Michal Čoťado", suma: "2000", createdDate: new Date().toISOString() },
    { id:3, meno: "Milan Esrtesto", suma: "1200", createdDate: new Date().toISOString() },
  ] 

export const getAllCustomers = () => {
    const customers = localStorage.getItem(userKey)
    return customers ? JSON.parse(customers) : defaultCustomers
} 

export const addCustomer = customer => {
    const customers = getAllCustomers()
    const newCustomer = { ...customer, id: customers.length ? customers[customers.length - 1].id + 1 : 1 }
    const newCustomers = [...customers, newCustomer]

    localStorage.setItem(userKey, JSON.stringify(newCustomers))
}

export const deleteCustomer = id => {
    const customers = getAllCustomers()
    const newCustomers = customers.filter(x => x.id !== id) 

    localStorage.setItem(userKey, JSON.stringify(newCustomers))
}
 
export const getCustomer = id => {
    const customers = getAllCustomers()
    return customers.find(x => x.id === id)
}

export const updateCustomer = customer => {
    const customers = getAllCustomers()
    const newCustomers = customers.map(x=>
        x.id === customer.id ? { ...x, ...customer, createdDate: x.createdDate } : x)

        localStorage.setItem(userKey, JSON.stringify(newCustomers))
}