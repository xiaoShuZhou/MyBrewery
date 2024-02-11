import type { Data } from "../misc/type";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


type BreweryListProps = {
  data: Data[]; // Defines the type for the `data` prop expected to be an array of `Data`
};


const BreweryList = ({ data }: BreweryListProps) => {
  return (
    <TableContainer 
      component={Paper} 
      sx={{
        width: '80%', 
        margin: 'auto', // Centers the table container
        overflowX: 'auto' // Ensures the table is responsive and scrolls horizontally on smaller screens
      }}
    >
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Brewery name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Street</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">State/Province</TableCell>
              <TableCell align="right">Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((brewery) => (
              <TableRow key={brewery.id}>
                <TableCell component="th" scope="row">
                  <Link to={`/brewery/${brewery.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {brewery.name}
                  </Link>
                </TableCell>
                <TableCell align="right">{brewery.brewery_type}</TableCell>
                <TableCell align="right" >{brewery.street}</TableCell>
                <TableCell align="right">{brewery.city}</TableCell>
                <TableCell align="right">{brewery.state_province}</TableCell>
                <TableCell align="right">{brewery.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  

export default BreweryList;