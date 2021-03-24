import React, {Component} from 'react';

export class Button extends Component {

    handleClick () {
        if (this.props.onClick)
        this.props.onClick();
    }
    render() {
        <div className={button} onClick={handleClick}>
            {this.props.display}
        </div>
    }
}

