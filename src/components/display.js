import React, {Component} from 'react' ;




class Display extends Components {
    render() {
        return(
        <div className={"display borderBlack"}>
            {this.props.value}
        </div>
        )
    }  
}

export default Display;

