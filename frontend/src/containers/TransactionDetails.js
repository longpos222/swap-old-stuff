import { Button, Col, Image, ListGroup, Row, Table } from 'react-bootstrap'
import { Rating } from '../components'

const product = []

export default function TransactionDetails() {
  return (
    <>
      <Button className='my-2' variant='warning'>
        Quay Lại
      </Button>
      <h3>GIAO DỊCH - SỐ #666888</h3>

      <h4>MÓN ĐỒ BẠN NHẬN ĐƯỢC</h4>
      <Row>
        <Col lg={4} md={4}>
          <Image
            style={{ borderRadius: '1.1em' }}
            src='mouse.jpg'
            alt={product.name}
            fluid
          ></Image>
        </Col>
        <Col lg={8} md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item className='py-0'>
              <h4>{product.title}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              {`Langdon được đánh giá `}
              <Rating value='4' text={` 4/5`} />
            </ListGroup.Item>
            <ListGroup.Item>{` Nhận được 12 phản hồi từ 23 giao dịch thành công.`}</ListGroup.Item>
            <ListGroup.Item>
              <strong>Chi tiết : </strong>
              {product.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Địa điểm: TP HCM</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Đang có 66 người yêu cầu đổi</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <h4 className='my-3'>MÓN BẠN TRAO ĐỔI</h4>
      <Table responsive striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Người nhận</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product._id}</td>
            <td>{product.title}</td>
            <td>{product.image}</td>
            <td>{`nguyen van A`}</td>
            <td>{`0888666888`}</td>
            <td>{`Ha noi Ha noi Ha noi Ha noi Ha noi Ha noi`}</td>
          </tr>
        </tbody>
      </Table>
      <Button className='my-2' variant='warning'>
        ĐỒNG Ý TRAO ĐỔI
      </Button>
    </>
  )
}
