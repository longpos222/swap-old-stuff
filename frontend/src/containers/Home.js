import { Col, Row } from 'react-bootstrap'
import { Product } from '../components'
import { products } from '../dumpData'

export default function Home() {
  return (
    <>
      <h2>Old Stuff List</h2>
      <Row>
        {products.map((item, index) => (
          <Col xs={6} md={4} key={index}>
            <Product item={item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
