import { useParams } from 'react-router-dom'

export function Book() {
  // const params = useParams()
  const { id, img } = useParams()
  // console.log('####: params', params)
  console.log('####: id', id)
  console.log('####: img', img)
  return <h1>Book {id}</h1>
}
