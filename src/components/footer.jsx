import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

function footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                <p>ProShop &copy;</p>
                </Col>
            </Row>
        </Container>
    </footer>
      )
}
export default footer