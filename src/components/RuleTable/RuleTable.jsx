import * as React from 'react';
import "./RuleTable.scss";
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import RuleDialog from './RuleDialog/RuleDialog';


const columns = [
    { id: 'rule', label: 'Rule', width: 400 },
    { id: 'description', label: 'Description'},
  ];
  
function createData(rule, description, population, size) {
    const density = population / size;
    return { rule, description, population, size, density };
}
  
const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];
  
export default function RuleTable({ dialogVisible, setDialogVisible, searchText }) {
 
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleClick = (event) => {
      setDialogVisible(true);
    };

    const handleClose = () => {
      setDialogVisible(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    
    
    return (
      <Table stickyHeader aria-label="sticky table" className='rule-table'>
        {dialogVisible && <RuleDialog onClose={handleClose} />}
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ width: column.width }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .filter((row) => {
              return !searchText || row.rule.toLowerCase().indexOf(searchText) >= 0 || row.description.toLowerCase().indexOf(searchText) >= 0;
            })
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.description} onClick={handleClick}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    );
}