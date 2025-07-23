import fantasy from '../data/fantasy.json'
import { Container, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'

const BookList = () => {
  return (
    <Container>
      <Row className="g-2">
        {fantasy.map((book) => (
          <Col key={book.asin} xs={12} md={6} lg={4}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BookList
