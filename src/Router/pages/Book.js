import { useParams, useOutletContext } from 'react-router-dom'

export function Book() {
  // const params = useParams()
  const { id, img } = useParams()
  // console.log('####: params', params)
  console.log('####: id', id)
  console.log('####: img', img)

  const contextOutlet = useOutletContext()
  console.log('####: contextOutlet', contextOutlet)
  return (
    <h1>
      Book {id} {contextOutlet.name}
    </h1>
  )
}
