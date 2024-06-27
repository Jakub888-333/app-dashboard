import React, {} from 'react'
import { Title, Form } from '../components'
import TextField from '@mui/material/TextField';
import "./css/pridataAleboOdstranitZakaznika.css"    

const PridataAleboOdstranitZakaznika = ({customer, onSubmit, onClose}) => {
 
  const {id, meno, suma, createdDate } = customer
 
  return (
    <div>
      <Title text={id ? `Upraviť zákazníka: ${meno}` : `Pridať nového zákazníka`} />

      <Form 
        initialData={{ id, meno, suma, createdDate }} 
        onSubmit={onSubmit} 
        onClose={onClose}>

        {({ data, onChange})=> {

          return (
            <div id="textFields">
              <TextField
              className='textField'
              id="standard-basic"
              label="Meno"
              fullWidth
              value={data['meno']}
              onChange={e => onChange('meno', e.target.value)}
              />
      
              <TextField
              id="standard-basic"
              className='textField'
              label="Suma"
              fullWidth
              value={data['suma']}
              onChange={e => onChange('suma', e.target.value)}
              />

              <TextField
              id="standard-basic"
              className='textField'
              label="Dátum"
              disabled
              fullWidth
              value={data['createdDate']}
              onChange={()=> {}}
              />
            </div>
          )
        }}
        
      </Form>
    </div>
  )
}

export default PridataAleboOdstranitZakaznika