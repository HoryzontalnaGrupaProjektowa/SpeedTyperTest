import React from "react";
import reactDom  from "react-dom";
export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:60
        }
    }
    componentDidMount(){
       this.Timer =  setInterval(()=>{
            let {count} = this.state;
            this.setState({
                count: count-1
            })
        },1000)
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.count !==this.state.count && this.state.count === 0){
            clearInterval(this.Timer)
        }
    }

     fmtMSS(s) {
        return(s-(s%=60))/60+(9<s?':':':0')+s
        
    }
    render(){
        let {count} = this.state;
        return (
        <>
            {this.fmtMSS(count)}
        </>
        )
    }
}