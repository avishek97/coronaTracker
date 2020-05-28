import React from 'react';
import Country from './Country';
class Countrylist extends React.Component{
    render()
    {
        return(
            <div>
                
                <Country code="76" label="India" onclick={this.props.fetch}></Country>
                <Country code="35" label="China" onclick={this.props.fetch}></Country>
                <Country code="176" label="America" onclick={this.props.fetch}></Country>
                <Country code="84" label="Japan" onclick={this.props.fetch}></Country>
               
            </div>
        )
    }
}
export default Countrylist;