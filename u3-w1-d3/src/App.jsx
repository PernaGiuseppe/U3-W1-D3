import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'

function App() {
  return (
    <>
      <MyNav />

      <Container>
        <Welcome />
        <BookList />
        {/* <AllTheBooks /> */}
      </Container>
      <MyFooter />
    </>
  )
}

export default App
