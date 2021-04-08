import React, {
    Component,
    state,
    addPlaceHandler,
    inputHandler,
    fileHandler,
} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Admin extends Component {
    state = {
        placename: '',
        placedesc: '',
        placeprice: '',
        pimage: '',

        // config: {
        //   headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
        // },
    };
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    fileHandler = (e) => {
        this.setState({
            pimage: e.target.files[0],
        });
    };

    addPlaceHandler = (e) => {
        e.preventDefault(); //By default from refreshes page

        const data = new FormData(); //new line

        data.append('placename', this.state.placename);
        data.append('placedesc', this.state.placedesc);
        data.append('placeprice', this.state.placeprice);
        data.append('pimage', this.state.pimage);


        axios
            .post('http://localhost:90/place/add', data)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <Row>
                <Col>
                    <Form>
                        <h1>Add Destination</h1>
                        <Form.Group controlId='formBasicTitle'>
                            <Form.Control
                                type='text'
                                placeholder='Enter Place Name'
                                value={this.state.placename}
                                name='placename'
                                onChange={this.inputHandler}
                            />
                        </Form.Group>

                        <Form.Group controlId='formBasicReleaseDate'>
                            <Form.Control
                                type='text'
                                placeholder='Enter Place Description'
                                value={this.state.placedesc}
                                name='placedesc'
                                onChange={this.inputHandler}
                            />
                        </Form.Group>
                        <Form.Group controlId='formBasicDescription'>
                            <Form.Control
                                type='text'
                                placeholder='Enter Place Price'
                                value={this.state.placeprice}
                                name='placeprice'
                                onChange={this.inputHandler}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.File
                                id='exampleFormControlFile1'
                                label='For image upload click here'
                                name='pimage'
                                onChange={this.fileHandler}
                            />
                        </Form.Group>
                        <Button
                            variant='primary'
                            type='submit'
                            onClick={this.addPlaceHandler}
                        >
                            Submit
              </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}
{
    /* <div>
  <form>
      <p>Placename</p>
      <input type="text" name="placename"
      value={this.state.placename}
      onChange={this.changeHandler}
      />
  
  <p>Placeprice</p>
      <input type="text" name="placeprice"
      value={this.state.placeprice}
      onChange={this.changeHandler}
      />
  </form>
  </div> */
}

export default Admin;

  // deletePlace = (pid) => {
  // axios.delete('http://localhost:/place/delete' + pid)
  // .then((response)=>{
  //     console.log(response)
  // })
  // .catch((err)=>{
  //     console.log(err.response)
  // })
  // }
