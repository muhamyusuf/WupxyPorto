import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const MyFooter = () => {
    return (
        <Container className="footer">
            <Row className="align-item-center">
                <Col sm={6} className="social-session">
                    <div class="social-icon Mysocial-media">
                        <a href="https://www.instagram.com/muhamyusuf_/?hl=id"><img src={navIcon3} alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100006930314992"><img src={navIcon2} alt="" /></a>
                        <a href="https://www.linkedin.com/in/muhammad-yusuf-28851a245/"><img src={navIcon1} alt="" /></a>
                    </div>
                    <p>
                        CopyRight 2022, All Right Reserved.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default MyFooter;