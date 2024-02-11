import type { Data } from "../misc/type";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useState } from "react";
import Pagination from "./Pagination";

type BreweryListProps = {
  data: Data[]; 
};

const BreweryList = ({ data }: BreweryListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <TableContainer 
        component={Paper} 
        sx={{ width: '80%', margin: 'auto', overflowX: 'auto' }}
      >
        <Table aria-label="customized table">
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
            {currentItems.map((brewery) => (
              <TableRow key={brewery.id}>
                <TableCell component="th" scope="row">
                  <Link to={`/brewery/${brewery.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {brewery.name}
                  </Link>
                </TableCell>
                <TableCell align="right">{brewery.brewery_type}</TableCell>
                <TableCell align="right">{brewery.street}</TableCell>
                <TableCell align="right">{brewery.city}</TableCell>
                <TableCell align="right">{brewery.state_province}</TableCell>
                <TableCell align="right">{brewery.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination 
        totalItems={data.length} 
        itemsPerPage={itemsPerPage} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
    </>
  );
  }
  

export default BreweryList;