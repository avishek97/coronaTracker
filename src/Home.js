import React from 'react';
import Countrylist from './Countrylist';
 import CountryFeedlist from './CountryFeedlist';
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={liveFeed:[]}
    }
fetching=(index)=>{
    
    var b=index.target.getAttribute("value")
    fetch("https://api.covid19api.com/summary")
    .then(response=>response.json())
    .then(json=>this.setState({liveFeed:json.Countries[b]},()=>{
    //    console.log(this.state.liveFeed.Countries[this.state.code])
     console.log(this.state.liveFeed)
    }))
    
}
    render()
        {
            return(
                <div>
                    <Countrylist fetch={this.fetching}></Countrylist>
                    <div>
                    {/* <CountryFeedlist index={this.state.code} feeds={this.state.liveFeed}></CountryFeedlist> */}
                   <CountryFeedlist feeds={this.state.liveFeed}></CountryFeedlist>
                   </div>
                </div>
                
            )
        }
    
}
export default Home;