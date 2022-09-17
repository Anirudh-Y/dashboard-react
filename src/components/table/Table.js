import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'

export const List = () => {

    function createData(name, calories, fat, carbs, protein,img) {
        return { name, calories, fat, carbs, protein ,img};
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0,"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3,"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=pexels-pixabay-461198.jpg&fm=jpg"),
        createData('Eclair', 262, 16.0, 24, 6.0,"https://images.pexels.com/photos/5335751/pexels-photo-5335751.jpeg?cs=srgb&dl=pexels-bam-awey-5335751.jpg&fm=jpg"),
        createData('Cupcake', 305, 3.7, 67, 4.3,"https://images.pexels.com/photos/2092897/pexels-photo-2092897.jpeg?cs=srgb&dl=pexels-anthony-leong-2092897.jpg&fm=jpg"),
        createData('Gingerbread', 356, 16.0, 49, 3.9,"https://images.pexels.com/photos/806361/pexels-photo-806361.jpeg?cs=srgb&dl=pexels-ronmar-lacamiento-806361.jpg&fm=jpg"),
    ];

    return (
        <TableContainer className='table' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Dessert (100g serving)</TableCell>
                        <TableCell className='tableCell' align="right">Calories</TableCell>
                        <TableCell className='tableCell' align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell className='tableCell' align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell className='tableCell' align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className='tableCell' component="th" scope="row">
                                <div className="cellWrapper">
                                    <img src={row.img} className='image' alt="" srcset="" />
                                    {row.name}
                                </div>
                            </TableCell>
                            <TableCell className='tableCell' align="right">{row.calories}</TableCell>
                            <TableCell className='tableCell' align="right">{row.fat}</TableCell>
                            <TableCell className='tableCell' align="right">{row.carbs}</TableCell>
                            <TableCell className='tableCell' align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
