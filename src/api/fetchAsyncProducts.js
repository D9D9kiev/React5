import axios from 'axios'
import { setProducts } from '../store/actions'

export const fetchProducts = (url) => {
  return (dispatch) => {
    axios.get(url).then(({ data }) => {
      dispatch(setProducts(data.products))
    })
  }
}
