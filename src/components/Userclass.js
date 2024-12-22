import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            
            }
    }
    
    render(){
        return(
            <div>
                <h3>count : {this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    });
                }} >count inc</button>
                {/* <h3>count2 : {this.state.count2}</h3> */}
                <h1>Name: {this.props.name}</h1>
                <h2>Name: {this.props.city}</h2>
            </div>
        )
    }
}

export default Userclass