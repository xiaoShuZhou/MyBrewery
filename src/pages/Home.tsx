import React from 'react';
import ContactForm from '../components/ContactForm';
import { useFetch } from '../hooks/useFetch';
import { Data } from '../misc/type';
import BreweryList from '../components/BreweryList';

const url = "https://api.openbrewerydb.org/v1/breweries";

const Home = () => {
  const { data } = useFetch(url);


  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {data && <BreweryList data={data} />}
      


      <ContactForm />
    </div>
  );
};

export default Home;
