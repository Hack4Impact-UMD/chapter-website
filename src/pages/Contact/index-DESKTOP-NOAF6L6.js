import React from 'react';
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap"
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.css';

class ContactUs extends React.Component{
    sendEmail(e) {  
        e.preventDefault();

        emailjs.sendForm('service_ztx84gp', 'template_a86ebug', e.target, 'user_mct32srjavgHGGtUDXEfy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        
    }
    render() {
        return(
            <div>
                <div style={{marginTop: '50px', alignContent: 'center', textAlign: 'center', color: 'black'}} >
                    <h1 style={{color: 'black', alignSelf: 'center'}}>Contact Us</h1>
                    <div style={{margin: '20px'}} >
                        <Container>
                            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", color: 'gray'}} >
                                <Col sm= {12} md={8} lg={6} xl={6}>
                                    If you have any questions about how to get involved or what we do, 
                                    send us a message below or connect with us!
                                </Col>
                            </Row>
                        </Container>
                    </div>  
                    
                    <Row style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Col sm={11} md={8} lg={8} xl={7}>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={this.sendEmail}>
                                        <Form.Group>
                                            <Form.Control input type="text" placeholder="Name" name="name" />
                                        </Form.Group>
                                        
                                        <Form.Group>
                                            <Form.Control input type="email" placeholder="Email Address" type="email" name="email" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control input type="text" placeholder="Subject" name="subject" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control placeholder="Your message" as="textarea" rows="8" name="message" />
                                        </Form.Group>

                                        <Button input type="submit" className="btn btn-info">Send Message</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div style={{margin: '40px'}} />
            </div>
        )
    }
}
export default ContactUs;