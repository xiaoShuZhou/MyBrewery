import axios, { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<AxiosError | null>(null)

  useEffect(() => {
    axios
      .get(url)
      .then((response: AxiosResponse<T>) => {
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