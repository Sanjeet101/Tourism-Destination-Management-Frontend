import React, { Component, state, deletePlace } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class PlaceShowAll extends Component {
  state = {
    place: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };
  componentDidMount() {
    axios.get('http://localhost:90/place/fetch')
      .then((response) => {
        console.log(response);
        this.setState({
          place: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  deletePlace = (pid) => {
    axios.delete('http://localhost:90/place/delete/' + pid, this.state.config)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    return (
      <Container>

        <div className='PlaceUpdate'>
          <Row>
            {this.state.place.map((place) => {
              return (
                <Col md={4} sm={4} xs={1}>
                  <Card className='place-card'>
                    <Card.Img
                      variant='card-img-top'
                      src={'http://localhost:90/images/' + place.pimage}
                    />
                    <Card.Body>
                      <Card.Title>{place.placename}</Card.Title>
                      <Card.Subtitle>{place.placedesc}</Card.Subtitle>
                      <Card.Body>{place.placeprice}</Card.Body>
                      <a href={'/placeupdate/' + place._id} className="btn btn-danger">Update</a>
                      <button className="btn btn-danger" onClick={this.deletePlace.bind(this, place._id)}>Delete</button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    );
  }
}
export default PlaceShowAll;
