import React, { Component } from 'react'

class Items extends Component {

    state = {
        lastname: "veli",
        midlleName:"fedon",
        age:5
    }
    newState = {
        middleName: "cedi"
    }

    changeName = () => {
        this.setState({lastname: "memo", age:25})
        // this.setState({ age:35})
        // this.setState(state=>{
        //     let newName = state.midlleName.toUpperCase();
        //     return {lastname: newName, age:45}
        // })
    }
    changeMidName = () => {
        console.log("change middle name calıştı")
        this.newState.middleName = "ceddo"
    }


    render() {
        console.log("item render içi")
        console.log(this.state)
        return (
            <>
                <div>{this.newState.middleName}</div>
                <div>{this.state.lastname}</div>
                <button onClick={this.changeName} >Change Last Name</button>
                <button onClick={this.changeMidName} >Change Middle Name</button>
            </>
        )
    }
}

export default Items