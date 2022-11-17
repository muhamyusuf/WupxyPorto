import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import headerimg from "../assets/img/header-img.svg"

const Home = ()=>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Genshin Impact Player", "Ur Boyfriend Haha" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Wupxy Portfolio</span>
                        <h1>{`Let's get to know me deeper as a `}<span className="wrap">{text}</span></h1>
                        <p>Hello i am a student who is interested in web developer</p>
                        <a href="https://wa.me/6281717403694" className="contactMe">Contact Me</a>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <img src={headerimg} alt="Headerimg"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;


