import React, { useState } from 'react'
import Button from '@mui/material/Button';
import "./css/form.css"

const Form = ({ initialData, onSubmit, children, onClose }) => {
  const [data, setData] = useState(initialData)

  const handleChanged = (key, value) => setData(prev => ({ ...prev, [key]: value}))

  return (
    <div>
        <div>{children({ data, onChange: handleChanged })}</div>

        <div id="buttons">
          {onClose && (
            <Button  variant="outlined" onClick={onClose}>
              Zavrieť
            </Button>
          )}
          <Button  variant="outlined" onClick={()=> onSubmit(data)}>
            Potvrdiť
          </Button>
        </div>  
    </div>
    
  
    )
}

export default Form