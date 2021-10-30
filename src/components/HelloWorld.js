
// import React from 'react'

// function HelloWorld(props) {
//     return (
//         <div>
//             <h1>
//                 the user name is {props.name}
//             </h1>
//         </div>
//     );
// }

// export default HelloWorld;


// import React, { Component } from 'react'

// export class HelloWorld extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> my name is username and id is  {this.props.name }</h1>
//             </div>
//         )
//     }
// }

// export default HelloWorld



import React, { Component } from 'react'

export class HelloWorld extends Component {

    constructor(props) {
        super(props)
        let firstname = this.props.name.split(" ")[0];
        this.state = { name:firstname}
    }


    render() {
        return (
            <div>
                <h1> my name is {this.state.name}</h1>                
            </div>
        )
    }
}

export default HelloWorld

