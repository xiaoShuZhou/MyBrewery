import axios, { AxiosError} from 'axios'
import { useEffect, useState } from 'react'
import { Data } from '../misc/type'
import { BASE_URL } from "../misc/constant";

export const useFetch = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<AxiosError | null>(null)

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setData(response.data)
      })
      .catch((error: AxiosError) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  })

  return { data, loading, error }
}

export const useFetchBreweryById = (id: string) => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL+`/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  return { data, loading, error };
}