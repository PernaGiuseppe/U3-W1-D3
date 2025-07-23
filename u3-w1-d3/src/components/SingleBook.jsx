import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  handleCardClick = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    const { book } = this.props

    return (
      <Card
        onClick={this.handleCardClick} // Questo è il pezzo mancante!
        className={this.state.selected ? 'selected-card' : ''}
        style={{ cursor: 'pointer' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
