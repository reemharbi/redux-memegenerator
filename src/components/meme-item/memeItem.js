import React, { Component } from 'react'

class MemeItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='meme-item'>
                <img 
                className='meme-img'
                src={this.props.meme.url}
                alt={this.props.meme.name}
                />
                <p className='meme-txt'>
                    {this.props.meme.name}
                </p>
            </div>
        )
    }
}

export default MemeItem