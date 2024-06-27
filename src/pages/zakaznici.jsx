import { useState } from 'react';
import { Title, Table } from '../components'
import "./css/zakaznici.css"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import { addCustomer, getAllCustomers, deleteCustomer, getCustomer, updateCustomer } from '../utils/storage';
import PridataAleboOdstranitZakaznika from './pridataAleboOdstranitZakaznika';


const columns = ["meno", "suma"]
 

const Zakaznici = () => {
  const [customers, setCustomers] = useState(getAllCustomers())
  const [addOrUpdateCustomer, setAddOrUpdateCustomer] = useState()
  const [totalSum, setTotalSum] = useState(0);

  const handleTotalSumChange = (newTotalSum) => {
    setTotalSum(newTotalSum);
  };
  
  const handleDeleteCustomer = id => {
    if (!window.confirm("Ste si istý že chcete zákažníka vymazať?")) return
    
    deleteCustomer(id)
    setCustomers(getAllCustomers())
  }

  const handleAddOrUpdateCustomer = customer => {
    if (customer.id) updateCustomer(customer)
    else addCustomer(customer)

    setCustomers(getAllCustomers())
    setAddOrUpdateCustomer(undefined)
  }

  const showpridataAleboOdstranitZakaznikaForm = id => {
    const emptyCustomer = { name: '', createdDate: new Date().toDateString()}

    if (!id) setAddOrUpdateCustomer(emptyCustomer)
    else setAddOrUpdateCustomer(getCustomer(id))

  }
  

  const commands = id => (
    <div>
      <ModeIcon color="action" onClick={()=>showpridataAleboOdstranitZakaznikaForm(id)}/>
      <DeleteIcon color="error" onClick={()=> handleDeleteCustomer(id)}/>
    </div>
  )

  if(addOrUpdateCustomer) 
    return (
      <PridataAleboOdstranitZakaznika 
        customer={addOrUpdateCustomer} 
        onSubmit={handleAddOrUpdateCustomer} 
        onClose={()=>setAddOrUpdateCustomer(undefined)}
      />
    )
 
  return (
    <div id="zakaznici-page">
      <Title text="Zákazníci" /> 
      <div id="totalSum">Celková suma: {totalSum} EUR</div>
      <div id="addIcon" onClick={()=>showpridataAleboOdstranitZakaznikaForm(undefined)}><PersonAddIcon /> <div>Pridať</div></div>
      <Table columns={columns}  data={customers} commands={commands} onTotalSumChange={handleTotalSumChange}/>
    </div>
  )
}

export default Zakaznici