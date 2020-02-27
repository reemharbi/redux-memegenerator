import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyMemes extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.MyMemes.map((meme, index) => {
                    return (
                        <img
                            key={index}
                            src={meme.data.url}
                            alt='my-meme'
                            className='my-meme-img'
                        />
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        MyMemes: state.myMemes
    };
}

export default connect(mapStateToProps, null)(MyMemes);
