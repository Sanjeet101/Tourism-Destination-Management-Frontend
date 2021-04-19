import { Component, state, changeHandler, updateData } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class UpdatePlace extends Component {
    state = {
        placename: '',
        placedesc: '',
        placeprice: '',


        id: this.props.match.params.id,
        config: {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
        },
    };

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    componentDidMount() {
        axios
            .get('http://localhost:90/place/single/' + this.state.id)
            .then((response) => {
                this.setState({
                    placename: response.data.placename,
                    placedesc: response.data.placedesc,
                    placeprice: response.data.placeprice,
                    pimage: response.data.pimage,
                });
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    updateData = (e) => {
        e.preventDefault();
        axios
            .put('http://localhost:90/place/update', this.state, this.state.config)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    render() {
        return (
            <Row className='insert-place'>
                <Col className='i-place'>
                    <Form>
                        <h1>Update Here</h1>
                        <Form.Group controlId='formBasicName'>
                            <Form.Control
                                type='text'
                                placeholder='Enter Place Name'
                                value={this.state.placename}
                                name='placename'
                                onChange={this.changeHandler}
                            />
                        </Form.Group>
                        <Form.Group controlId='formBasicDescription'>
                            <Form.Control
                                type='text'
                                placeholder='Enter Place Description'
                                value={this.state.placedesc}
                                name='placedesc'
                                onChange={this.changeHandler}
                            />
                        </Form.Group>

                        <Form.Group controlId='formBasicPrice'>
                            <Form.Control
                                type='text'
                                placeholder='Enter Place Price'
                                value={this.state.placeprice}
                                name='placeprice'
                                onChange={this.changeHandler}
                            />
                        </Form.Group>


                        <Button variant='primary' type='submit' onClick={this.updateData}>
                            Update
            </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}
export default UpdatePlace;
