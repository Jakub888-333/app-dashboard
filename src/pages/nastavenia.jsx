import React, { useState } from 'react'
import { Form, Title } from "../components"
import "./css/nastavenia.css"
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { getSettings, updateSettings } from '../utils/settingsStorage';

const possibleMaxTableRecords = ['Neobmedzené', 5, 10, 20 ]


const Nastavenia = () => {
 
  const [settings, setSettings] = useState(getSettings())
 
  const handleSubmit = values => {
    updateSettings(values)
    setSettings(values)
  }

  return (
    <div>
      <Title text="Nastavenia" />

      <Form initialData={settings} onSubmit={handleSubmit}>

        {({ data, onChange})=> {

          return (
            <div id="textFields">
              <div>
                <InputLabel id="maxTableRecords">Počet záznamov</InputLabel>
                <Select
                  className='textField'
                  labelId="maxTableRecords"
                  value={data['maxTableRecords']}
                  onChange={e => onChange('maxTableRecords', e.target.value)}
                  fullWidth
                >
                  {possibleMaxTableRecords.map(x => (
                    <MenuItem key={x} value={x}>
                      {x}
                    </MenuItem>
                  ))}
                </Select>
              </div>
      
              
            </div>
          )
        }}
        
      </Form>
    </div>
  )
}

export default Nastavenia