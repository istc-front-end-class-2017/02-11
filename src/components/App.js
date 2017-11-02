import React from 'react';
import Test from './test';

export default
class App extends React.Component {

    constructor(){
        super();
        this.state = {
            n: 0
        };
    }

    componentDidMount(){
        setInterval(()=>{
            let {n} = this.state;
            n++;
            this.setState({n});
        }, 1000
    );
    }

    render(){
        return(
            <div>
                <Test number={this.state.n} />
            </div>
        );
    }
}