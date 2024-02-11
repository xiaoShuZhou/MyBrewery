import React, { useState } from 'react';
import { Container, Typography, TextField, Box } from '@mui/material';
import ContactForm from '../components/ContactForm';
import { useFetch } from '../hooks/useFetch';
import BreweryList from '../components/BreweryList';
import FilterByType from '../components/FilterByType';

const Home = () => {
  const { data } = useFetch();
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data ? data.filter(brewery =>
    (filter === '' || brewery.brewery_type === filter) &&
    brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Welcome to the BreweryLand!
      </Typography>
      <Box display="flex" justifyContent="center" mb={2}>
        <TextField
          label="Search breweries by name"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
        />
      </Box>
      <FilterByType onChange={(value) => setFilter(value)} />
      {filteredData && <BreweryList data={filteredData} />}
      <ContactForm />
    </Container>
  );
};

export default Home;
