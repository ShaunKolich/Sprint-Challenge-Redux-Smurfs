import React from 'react'
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurf extends React.Component {
    constructor() {
        super()

        this.state = {
         smurfs: []
        }
    }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState = ({
            [e.target.name]: e.target.value,
        })

    }

    addSmurfs = (e) => {
        e.preventDefault()
       
        const { name, age, height } = this.state;

        this.props.addSmurf(name, age, height);

        this.setState({
			name: '',
            age: '',
            height:''
		})
    }


    render() {
        const { name, age, height } = this.state;
        const { smurfs } = this.props;

        return (
            <div>
                <form onSubmit={this.addSmurfs}>
                    <input type="text" name="name" value={name} placeholder='Name of smurf' onChange={this.onChangeHandler} />
                    <input type='text' name='age' value={age} placeholder='Age' onChange={this.onChangeHandler} />
                    <input type='text' name="height" value={height} placeholder='Height' onChange={this.onChangeHandler} />
                    <button type = 'Submit'>Add Smurf</button>

                </form>
            </div>

        )


    }


}

// const mapStateToProps = (state) => {
//     smurfs:state.smurfs

// }

const mapDispatchToProps = {
    addSmurf,

}

export default connect(
    null,
    mapDispatchToProps,

)(AddSmurf)

