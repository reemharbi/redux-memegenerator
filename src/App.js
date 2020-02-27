import React, { Component } from 'react';
import '../src/styles/index.scss';
import { connect } from 'react-redux';
// import BeatLoader from 'react-spinners/BeatLoader';
import MemeItem from '../src/components/meme-item/memeItem';
import { Form } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super();

        this.state = {
            memeLimit: 10,
            loading: true,
            text0: '',
            text1: ''
        };
    }

    render() {
      // console.log(this.state);
        return (
            <div className='App'>
                <h1>Welcome To The MemeGenerator!</h1>
                <h4>Write Some Text</h4>
                <Form>
                    <Form.Group>
                        <Form.Label>Top</Form.Label>
                        <Form.Control
                            type='text'
                            onChange={(event) =>
                                this.setState({ text0: event.target.value })
                            }
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Bottom</Form.Label>
                        <Form.Control
                            type='text'
                            onChange={(event) =>
                                this.setState({ text1: event.target.value })
                            }
                        ></Form.Control>
                    </Form.Group>
                </Form>
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
