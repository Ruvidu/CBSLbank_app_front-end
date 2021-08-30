import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@material-ui/data-grid';
import {Link, useHistory} from 'react-router-dom'

export default function BankList() {

    const [tdata, settdata] = useState([])
    const history = useHistory()

    useEffect(()=>{
        axios.get('http://localhost:8080/api/bank/getbanks').then(res=>{
            console.log(res.data)
            settdata(res.data)
        }).catch(err=>{
            console.log(err)
        })

    } , [])


    const columns = [
        { field: 'id', headerName: 'Bank ID', width: 250 },
        { field: 'name', headerName: 'Bank Name', width: 300 }
       
    ];
    return (
        <div>
             <Link to="/createbank" className="btn btn-primary">Add Bank</Link>
            <DataGrid rows={tdata} disableSelectionOnClick
             columns={columns}
             getRowId={(row) => row.id}
              pageSize={9} checkboxSelection 
              autoHeight/>
            
        </div>
    )
}
