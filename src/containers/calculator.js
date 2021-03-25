import React, {Component} from 'react';
import { Button } from '../components/button';
import Display from '../components/display';

class Calculator extends Component{
    initialState = {firstValue: 0, secondValue:0}
    render() {
        return (
            <div className={'calculator'}>
                <div>
                    <Display value={'123456'}/>
                </div>
                <div className={'buttons'}>
                    <Button display="1"/>
                    <Button display="2"/>
                    <Button display="3"/>
                    <Button display="4"/>
                    <Button display="5"/>
                    <Button display="6"/>
                    <Button display="7"/>
                    <Button display="8"/>
                    <Button display="9"/>
                    <Button display="0"/>
                    <Button display="+"/>
                    <Button display="-"/>
                    <Button display="="/>
                    <Button display="C"/>
                </div>
                <div className={'footer'}>
                    reactCalc
                </div>
            </div>
        )
    }
    
}

export default Calculator;