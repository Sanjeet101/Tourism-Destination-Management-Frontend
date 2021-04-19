import { Component, state, inputHandler } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class PlaceSingleData extends Component {
  state = {
    placename: '',
    pimage: '',

    placedesc: '',
    placeprice: '',

    pid: '',
    id: this.props.match.params.id,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };
  componentDidMount() {
    axios
      .get('http://localhost:90/place/single/' + this.state.id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          placename: response.data.placename,
          pimage: response.data.pimage,

          placedesc: response.data.placedesc,
          placeprice: response.data.placeprice,

        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  render() {
    return (
      <Container>
        <div className='singleplacedata'>
          <Row>
            <Col md={4} sm={4} xs={1}>
              <Card className='place-card'>
                <Card.Img
                  variant='top'
                  src={'http://localhost:90/images/' + this.state.pimage}
                />
                <Card.Body className='singleMCardbody'>
                  <Card.Title>{this.state.placename}</Card.Title>
                  <Card.Subtitle>{this.state.placedesc}</Card.Subtitle>
                  <Card.Body>{this.state.placeprice}</Card.Body>
                  <div class="card-footer">
                    <a href="/book" class="btn btn-primary">Book Now</a>
                  </div>
                </Card.Body>
              </Card>

            </Col>
            <Col md={3} sm={4} xs={12} className='place-data'>


              {/* <h2>{this.state.pname}</h2>


              <p>{this.state.placedesc}</p>


              <h5 className='place-price'>{this.state.placeprice}</h5> */}


            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default PlaceSingleData;
