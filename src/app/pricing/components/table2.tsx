import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

function createData(
  Features: string | React.ReactNode,
  Free: string | React.ReactNode,
  Plus: string | React.ReactNode,
  Pro: string | React.ReactNode,
  Team: string | React.ReactNode,
  Enterprise: string | React.ReactNode,
  
) {
  return { Features, Free, Plus, Pro, Team, Enterprise };
}

const rows = [
  createData('Messages and Interactions',	'Unlimited','Unlimited','Unlimited','Unlimited','Unlimited'),
  createData('Chat History','Unlimited','Unlimited','Unlimited','Unlimited','Unlimited'),
  createData('Access on Web, iOS, Android'	,<DoneOutlinedIcon/>,<DoneOutlinedIcon/>,<DoneOutlinedIcon/>,<DoneOutlinedIcon/>,<DoneOutlinedIcon/>),
  
];

export default function Table2() {
  return (
    <div className="mt-10 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 font-barlow">Compare Features Across Plans</h1>
    <TableContainer component={Paper} sx={{ borderBlockColor: 'gray-700'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow sx={{ backgroundColor: '#1a202c'}} className="p-4 border font-inter border-gray-700">
            <TableCell sx={{color:'#ffff' }} className="p-4 border font-inter border-gray-700">Features</TableCell>
            <TableCell sx={{color:'#ffff'}} align="right" className="p-4 border font-inter border-gray-700">Free</TableCell>
            <TableCell sx={{color:'#ffff'}} align="right" className="p-4 border font-inter border-gray-700">Plus</TableCell>
            <TableCell sx={{color:'#ffff' }} className="p-4 border font-inter border-gray-700">Pro</TableCell>
            <TableCell sx={{color:'#ffff'}} align="right" className="p-4 border font-inter border-gray-700">Team</TableCell>
            <TableCell sx={{color:'#ffff'}} align="right" className="p-4 border font-inter border-gray-700">Enterprise</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row, idx) => (
                        <TableRow key={idx} sx={{'&:last-child td, &:last-child th': { border: 0 },backgroundColor: idx % 2 === 0 ? '#1f2937' : '#111827', }} className={idx % 2 === 0 ? 'odd:bg-gray-800' : 'even:bg-gray-900'}>
                          <TableCell component="th" scope="row" className="p-4 border font-inter border-gray-700"sx={{ color: '#fff' }}>{row.Features}</TableCell>
                          <TableCell align="right" className="p-4 border font-inter border-gray-700" sx={{ color: '#fff' }}>{row.Free}</TableCell>
                          <TableCell align="right" className="p-4 border font-inter border-gray-700" sx={{ color: '#fff' }}>{row.Plus}</TableCell>
                          <TableCell align="right" className="p-4 border font-inter border-gray-700" sx={{ color: '#fff' }}>{row.Pro}</TableCell>
                          <TableCell align="right" className="p-4 border font-inter border-gray-700" sx={{ color: '#fff' }}>{row.Team}</TableCell>
                          <TableCell align="right" className="p-4 border font-inter border-gray-700" sx={{ color: '#fff' }}>{row.Enterprise}</TableCell>
                        </TableRow>
                        ))}
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
