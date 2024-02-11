import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchBreweryById } from '../hooks/useFetch';
import googleMapsUrl from '../misc/utils';
import { Typography, Paper, Link, CircularProgress, Box } from '@mui/material';

const BreweryDetail = () => {
  const { id } = useParams();
  const { data, loading } = useFetchBreweryById(id || "");

  if (loading) return <Box display="flex" justifyContent="center"><CircularProgress /></Box>;

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Brewery Detail
      </Typography>
      {data && (
        <>
          <Typography variant="subtitle1">Brewery name: {data.name}</Typography>
          <Typography variant="subtitle1">Brewery type: {data.brewery_type}</Typography>
          <Typography variant="subtitle1">Street: {data.street}</Typography>
          <Typography variant="subtitle1">City: {data.city}</Typography>
          <Typography variant="subtitle1">State/Province: {data.state_province}</Typography>
          <Typography variant="subtitle1">Country: {data.country}</Typography>
          <Typography variant="subtitle1">
            Website: {data.website_url ? <Link href={data.website_url} target="_blank" rel="noopener noreferrer">{data.website_url}</Link> : 'N/A'}
          </Typography>
          {data.latitude && data.longitude && (
            <Link
              href={googleMapsUrl(data.latitude, data.longitude)}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Typography variant="h6" color="secondary">
                View On Google Map
              </Typography>
            </Link>
          )}
        </>
      )}
    </Paper>
  );
};

export default BreweryDetail;
