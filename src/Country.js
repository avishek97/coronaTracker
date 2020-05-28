import React from 'react';
class Country extends React.Component{
    render()
    {
        return(
            <div>
                <button value={this.props.code} onClick={this.props.onclick}>{this.props.label}</button>
            </div>
        )
    }
}
export default Country