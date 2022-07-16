import { useState, useEffect } from 'react'
import { useParams, BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image'
import { FiStar, FiEye, FiGitBranch } from "react-icons/fi";
import { Link } from "react-router-dom";
import gitLogo from "../../img/github-logo.png"


function Repository({repos}) {
  const [repo, setRepo] = useState({})

  // get the repo name from url params
  const { repoName } = useParams();
  // Search for the repo selected into the collection of repos
  useEffect(() => {
    const result = repos.filter(r => r.full_name == repoName)
    setRepo(...result)
  }, [repo, repos]);

  // Format dates
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  if(repo && repo.id){
    return  (
        <Container className="py-3" fluid="md" data-testid="repository-page">
            <Row >
              <Col >
                <h1 className="h2">{repo.full_name}</h1> 
              </Col>
              <Col >
                <Link to="/"><Button variant="light">Back to list</Button></Link>
              </Col>
            </Row>
            <Row className="py-5">
              <Col >
                <Row>
                  <p className='small'>{repo.description}</p>
                </Row>
                <Row>
                  <p className='small'>Created: { formatDate(repo.created_at) }</p>
                </Row>
                <Row>
                  <p className='small'>Language: { repo.language }</p>
                </Row>
                <Row><Col><FiStar /> {repo.stargazers_count} Stars</Col></Row>
                <Row><Col><FiEye /> {repo.watchers} Watchers</Col></Row>
                <Row><Col><FiGitBranch /> {repo.forks} Forks</Col></Row>
                <Row>
                  <Col>
                    <Button className="mt-5" variant="dark" href={repo.html_url} target="_blank">
                    <img src={gitLogo} alt="Logo" width="24px" /> View in Github
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col >
                <h4>Owner</h4>
                <p className='display-6'>
                  <Image src={repo.owner.avatar_url} width="48px" roundedCircle={true} className='rounded me-2'/>
                  {repo.owner.login}
                </p>
              </Col>
            </Row>
        </Container>
    )
  } else {
    return (
        <Container className="py-3" fluid="md">
          <Row >
            <Col >
              <Alert key="danger" variant="danger">Plase select a valid repository</Alert>
              <Link to="/"><Button variant="light">Back to list</Button></Link>
            </Col>
          </Row>
        </Container>

    )
  }
}

export default Repository
