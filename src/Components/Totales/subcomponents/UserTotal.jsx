import React, { Component } from "react"

class UserTotal extends Component {

    constructor () {
        super()
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const response = await fetch ("http:localhost:3001/api/users");
        const data = await response.json();
        this.setState({users: data.data});
    }

    render(){
        return (
            <div className="totalUsuarios">
                <h2>Total de Usuarios</h2>
                <h2>{
                this.setState.users.length
                }</h2>
        
            </div>
        )
    }
}

export default UserTotal


