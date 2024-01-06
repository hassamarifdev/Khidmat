import { request, gql } from 'graphql-request'
import config from "../../config";

const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
`
const result = await request(config.API_KEY, query)

return result
}

export default{
    getSlider
}