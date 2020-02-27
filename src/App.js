import React, { Component } from 'react';
import '../src/styles/index.css';
import { connect } from 'react-redux';

import MemeItem from '../src/components/meme-item/memeItem';

class App extends Component {
    constructor() {
        super();
        this.state = {
            memeLimit: 10
        };
    }
    render() {
        return (
            <div className='App'>
                <h1>Welcome to the MemeGenerator!</h1>
                {this.props.memes
                    .slice(0, this.state.memeLimit)
                    .map((meme, index) => {
                        return <MemeItem key={index} meme={meme} />;
                    })}
                <div
                    className='meme-button'
                    onClick={() => {
                        this.setState({
                            memeLimit: this.state.memeLimit + 10
                        });
                    }}
                >
                    Load more
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(App);
