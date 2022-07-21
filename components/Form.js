import {Component} from 'react'
import {persons} from '../lib/auth.js'
import Footer from "./Footer";

class Form extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: ''
    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        const {firstname, lastname, email} = this.state
        event.preventDefault();
        persons(firstname, lastname, email);
    }

    render()
    {
        return (
            <div className="min-h-screen">
                <form
                        className="flex flex-col place-items-center my-12"
                        onSubmit={this.handleSubmit}>
                    <p className="text-7xl text-fuchsia-600 my-12">Join us</p>
                    <input type="text"
                            className="text-fuchsia-600 text-center gradient-fuchsia text-3xl my-2"
                            id="firstname"
                            name="firstname"
                            placeholder="Firstname"
                            onChange={this.handleChange}
                            required
                            minLength="3" />
                    <input  type="text"
                            className="text-fuchsia-600 text-center gradient-fuchsia text-3xl my-2"
                            id="lastname"
                            name="lastname"
                            placeholder="Lastname"
                            onChange={this.handleChange}
                            required
                            minLength="2" />
                    <input  type="email"
                            className="text-fuchsia-600 text-center gradient-fuchsia text-3xl my-2"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$]" />
                    <button className="m-4 text-white bg-fuchsia-700 font-bold h-8 rounded-full hover:opacity-50"
                            type="submit"
                            style={{width: 150}} >
                        Let's go
                    </button >
                </form >
            </div >


        )
    }
}

export default Form