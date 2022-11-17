import { Container, Row, Col} from "react-bootstrap";

const About = () => {
    return (
        <Container fluid id="about" className="aboutMe">
            <Row>
                <Col>
                    <section className="myDescription">
                        <h1>About me...</h1>
                        <p>Saya adalah seorang mahasiswa yang sangat tertarik untuk mempelajari hal baru. Saya sangat menyukai bidang IT sejak saya kecil, saya ingin bercita-cita menjadi Fullstack-Developer dan ingin sekali memiliki karya dan karier di Youtube sebagi streamer dan content creator.</p>
                    </section> 
                </Col>
            </Row>
        </Container>
    );
}

export default About;