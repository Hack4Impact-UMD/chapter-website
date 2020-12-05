import React from 'react';
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap"
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.css';
import { SocialIcon } from 'react-social-icons';

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
                    <div style={{margin: '30px'}} >
                        <Container>
                            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >
                                <Col sm= {12} md={8} lg={6} xl={6} style={{color: 'white'}}>
                                    If you have any questions about how to get involved or what we do, 
                                    send us a message below. You can also connect with us via email at umd@hack4impact.org or on these platforms below: <br></br>
                                    <div style={{margin: '10px'}} > </div>
                                    
                                     <SocialIcon target="_blank" style={{marginLeft:10, marginRight: 10}} url="https://github.com/Hack4Impact-UMD" />
                                    <SocialIcon target="_blank" style={{margin: 4}} url="https://www.facebook.com/hack4impactumd" />
                                    <SocialIcon target="_blank" style={{marginLeft: 10}} url="https://www.instagram.com/hack4impactumd" />
                                </Col>
                            </Row>
                        </Container>
                    </div>  
                    
                    <Row style={{display: "flex", justifyContent: "center", alignItems: "center", margin: 10}}>
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

                
            </div>
        )
    }
}
export default ContactUs;