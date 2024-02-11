import React from 'react';
import ContactForm from '../components/ContactForm';
import { useFetch } from '../hooks/useFetch';
import BreweryList from '../components/BreweryList';


const Home = () => {
  const { data } = useFetch();


  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {data && <BreweryList data={data} />}
      


      <ContactForm />
    </div>
  );
};

export default Home;
