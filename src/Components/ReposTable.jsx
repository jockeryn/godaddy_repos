import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import { FiStar, FiEye, FiGitBranch } from "react-icons/fi";

function ReposTable({repos}) {
    return ( 
        <>  
            {/* create a custom style for godaddy button */}
            <style type="text/css">
            {`
                .btn-godaddy {
                    background-color: #00838C;
                    color: white;
                }
            `}
            </style>
            <Table striped responsive="sm" data-testid="repos-table">
                <thead>
                <tr>
                    <th>About</th>
                    <th>Stars</th>
                    <th>Watching</th>
                    <th>Forks</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {repos.map(({id, full_name, description, html_url, watchers, forks, stargazers_count}) => {
                    return (
                        <tr key={id}>
                            <td>
                                <h3 className="h5">{full_name}</h3>
                                <p className='small'>{description}</p>
                            </td>
                            <td><FiStar /> {stargazers_count} </td>
                            <td><FiEye /> {watchers} </td>
                            <td><FiGitBranch /> {forks}</td>
                            <td> 
                                <ButtonGroup>
                                    <Button variant="light" href={html_url} target="_blank">Github</Button>
                                    <Link to={`repository/${encodeURIComponent(full_name)}`}>
                                        <Button variant="godaddy">Details</Button> 
                                    </Link>
                                </ButtonGroup>
                            </td>
                        </tr>
                    )
                })}
                
                </tbody>
            </Table>
        </>
    );
}

export default ReposTable;