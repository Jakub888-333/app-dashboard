import React, {useRef, useEffect, useState} from 'react';
import "./css/table.css"
import TablePagination from '@mui/material/TablePagination';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import Button from '@mui/material/Button';
import { getAllCustomers } from '../../utils/storage';
import * as XLSX from 'xlsx';
import { getSetting } from '../../utils/settingsStorage';
import _ from 'lodash';
 
 
const Table = ({ columns, data, commands, onTotalSumChange }) => {
    const maxTableRecords = getSetting('maxTableRecords')
  
    const tableRef = useRef(null);
    useEffect(() => {
      setCurrentData(data);
        if (data) {
          const sum = data.reduce((total, row) => total + parseInt(row.suma), 0);
          setTotalSum(sum);
          onTotalSumChange(sum); // Zavolejte callback funkci pro předání celkové sumy
        }
      }, [data, onTotalSumChange]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [, setTotalSum] = useState(0);
    const [currentData, setCurrentData] = useState(data);

    if (!data || !maxTableRecords) return null

    

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
     };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
      };

      const slicedData = _.take(data, maxTableRecords === 'Neobmedzené' ? data.length : maxTableRecords)
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

      const handleExportExcel = async () => {
        // Pridaj async k deklarácii funkcie
        const updatedData = await getAllCustomers();
        setCurrentData(updatedData);
      
        // Konvertuj dáta na formát xlsx
        const ws = XLSX.utils.json_to_sheet(updatedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'users');
      
        // Vytvor súbor a stiahni ho
        XLSX.writeFile(wb, 'users_table.xlsx');
      };
      

  return (
    <div>

    <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={tableRef.current}
    >

        <Button id="buttonExport" variant="contained" onClick={handleExportExcel}> Export excel </Button>

    </DownloadTableExcel>

    
    
    <table ref={tableRef}>
        <thead>
            <tr>
                {columns.map(column  => (
                    <th key={column}>{column.toUpperCase()}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {slicedData.map((row, index) => {
                
                return (
                    <tr key={index}>
                        {columns.map(column => {
                          return <td key={`${index}-${column}`}>{row[column]}</td>
                        })}

                        {commands && <td className='commands'>{commands(row['id'])}</td>}
                    </tr>
                )
            })}
        </tbody>
    </table>
        
    <TablePagination
      id="pagination"
      component="div"
      count={currentData.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
 
  </div>
  )
}

export default Table