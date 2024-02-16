import { useEffect, useState } from 'react'
import axios from 'axios'

export function useSearchBooks(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [books, setBooks] = useState([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setBooks([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prevState) => {
          return [
            ...new Set([...prevState, ...res.data.docs.map((b) => b.title)]),
          ]
        })
        setLoading(false)
        // console.log('####: res', res.data)
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return
        }
        setError(false)
        console.error(e)
      })

    return () => cancel()
  }, [query, pageNumber])

  return {
    loading,
    error,
    books,
    hasMore,
  }
}
