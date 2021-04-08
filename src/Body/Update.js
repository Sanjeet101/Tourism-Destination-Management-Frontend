import { render } from "@testing-library/react"
import axios from "axios"
import { Container } from "react-bootstrap"


class Update extends Component {
    state = {
        placename: '',
        placeprice: '',
        id: this.props.match.params.id
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        updateData = (e) => {
            e.preventDefault();
            axios.put('http://localhost:90/place/update', this.state)
                .then((response) => {
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
    }

    componentDidMount //autoload


    render() {
        return (
            <div>

            </div>
        )

    }

}
export default Update;