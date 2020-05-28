import React from 'react';

class CountryFeedlist extends React.Component{
    constructor(props){
        super(props)
    }
    render()
    {
       
        
        return(
            <div>
            <h1>Country : {this.props.feeds.Country}</h1>
            <h1>New Cases : {this.props.feeds.NewConfirmed}</h1>
            <h1>New Deaths : {this.props.feeds.NewDeaths}</h1>
            <h1>New Recovered : {this.props.feeds.NewRecovered}</h1>
            <h1>Total Cases : {this.props.feeds.TotalConfirmed}</h1>
            <h1>Total Deaths : {this.props.feeds.TotalDeaths}</h1>
            </div>
        )
    }
}
export default CountryFeedlist;