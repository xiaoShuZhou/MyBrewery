import axios, { AxiosError} from 'axios'
import { useEffect, useState } from 'react'
import { Data } from '../misc/type'

export const useFetch = (url: string) => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<AxiosError | null>(null)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error: AxiosError) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}