import { useEffect } from 'react'
import axios from 'axios'

export function useSearchBooks(query, pageNumber) {
  useEffect(() => {
    let cancel
    axios({
      method: 'GET',
      url: 'https://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log('####: res', res.data)
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return
        }
        console.error(e)
      })

    return () => cancel()
  }, [query, pageNumber])

  return null
}
