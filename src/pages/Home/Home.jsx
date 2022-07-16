
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import ReposTable from '../../Components/ReposTable';

function Home({repos}) {
  return (
    <Container className="py-3" fluid="md" data-testid="home-container">
        <Row >
            <Col >
                <h2 className="text-bold">Welcome to Godaddy's Repositories!</h2>
                <p>Please choose one to get more details</p>
                {   
                    repos.length === 0 ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <ReposTable repos={repos}/>
                } 
            </Col>
        </Row>
    </Container>
  )
}

export default Home
