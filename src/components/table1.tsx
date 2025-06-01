import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  Subscription_Tier: string,
  Pricing_Model: string,
  Availability: string,
  
) {
  return { Subscription_Tier, Pricing_Model,Availability};
}

const rows = [
  createData('Free','Subscription-based','Yes'),
  createData('Basic','Subscription-based','Yes'),
  createData('Student Plan'	,'Special Discount',	'Yes (₹29/month)'),
  createData('Professional','Subscription-based','Yes'),
  createData('Enterprise','Contract-based','Yes'),
  createData('API Access','Pay-as-you-go','Yes'),
];

export default function BasicTable() {
  return (
    <div className="mt-10 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 font-barlow">Subscription Tiers Overview</h1>
    <TableContainer component={Paper} sx={{ borderBlockColor: 'gray-700'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow sx={{ backgroundColor: '#1a202c'}} className="p-4 border font-inter border-gray-700">
            <TableCell sx={{color:'#ffff' }} className="p-4 border font-inter border-gray-700">Subscription Tier</TableCell>
            <TableCell sx={{color:'#ffff'}} align="right" className="p-4 border font-inter border-gray-700">Pricing Model</TableCell>
            <TableCell sx={{color:'#ffff'}} align="right" className="p-4 border font-inter border-gray-700">Availability</TableCell>
           
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row, idx) => (
            <TableRow key={row.Subscription_Tier} sx={{'&:last-child td, &:last-child th': { border: 0 },backgroundColor: idx % 2 === 0 ? '#1f2937' : '#111827', }} className={idx % 2 === 0 ? 'odd:bg-gray-800' : 'even:bg-gray-900'}>
              <TableCell component="th" scope="row" className="p-4 border font-inter border-gray-700"sx={{ color: '#fff' }}>{row.Subscription_Tier}</TableCell>
              <TableCell align="right" className="p-4 border font-inter border-gray-700" sx={{ color: '#fff' }}>{row.Pricing_Model}</TableCell>
              <TableCell align="right" className="p-4 border font-inter border-gray-700" sx={{ color: '#fff' }}>{row.Availability}</TableCell>
            </TableRow>
            ))}
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
