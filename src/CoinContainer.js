import React from 'react'
import {choice} from './helpers'
import {Coin} from './Coin'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
class CoinContainer extends React.Component{
  static defaultProps ={
    coins:[
     {side:'heads',imgSrc:"head.jpg"
   },
     {side:'tails',imgSrc:"tail.jpg"}
    ]
   }
constructor(props){
 super(props)
 this.state={
   currCoin:null,
   nFlips:0,
   nHeads:0,
   nTails:0
 }
 this.handleClick= this.handleClick.bind(this)
}
flipCoin(){
const newCoin = choice(this.props.coins)
this.setState(st=>{ 
   return{
       currCoin:newCoin,
       nFlips:st.nFlips + 1,
       nHeads:st.nHeads + (newCoin.side==="heads" ? 1 :0),
       nTails:st.nTails + (newCoin.side==="tails" ? 1 :0)
   }
})
}
handleClick(e){
this.flipCoin()
}
render(){
    return(<div className="CoinCointainer">
        <h1 className="head">
            Flip the Coin! 
        </h1>
        <hr></hr>
        <Button className="button" variant="secondary"onClick={this.handleClick}>Flip the coin!!</Button>
     {this.state.currCoin && <Coin  info ={this.state.currCoin}/>}
     <hr></hr>
        <h2>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</h2>
    <h2 className="end"> 
      ~ Created by Evu Paulus ~
    </h2>
    </div>)
    

}
}
export default CoinContainer