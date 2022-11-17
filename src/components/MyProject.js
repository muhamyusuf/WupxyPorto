import { Card, Button } from "react-bootstrap";
import TodoImg from '../assets/img/TodoApp.jpeg';

const MyProject = () => {
    return (
        <div className="cardContainer" id="projects">
            <h1>What have I create</h1>

            <Card style={{ width: '20rem' }} className="text-center">
                <Card.Img src={TodoImg}/>
                <Card.Body>
                    <Card.Title className="cardTitle">
                        Todo-List App
                    </Card.Title>
                    <Card.Text className="cardDesc">
                        <p>Todo-List create to make life more EFFICIENT with time management</p> 
                    </Card.Text>
                    <Button className="cardButton" variant="dark"><a href="https://todolistapp.muhamyusuf1.repl.co">See the Project</a></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyProject;