import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import './styles/content.css'

class FormsPage extends React.Component  {
  render() {
    return(
    <div className='main_register'>
        <Container className='register'>
            <Row>
            <Col md="12">
                <form>
                <p className="h5 text-center mb-4">Register</p>
                <div className="black-text">
                    <Input label="Nombre" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Confirma tu Email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                    <Input label="Contraseña" icon="lock" group type="password" validate/>
                </div>
                <div className="text-center">
                    <Button color="red accent-4">Register</Button>
                </div>
                </form>
            </Col>
            </Row>
        </Container>
    </div>
      
    );
  }
};

export default FormsPage;