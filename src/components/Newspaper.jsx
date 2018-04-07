import React, { Component } from 'react';
import PostPreview from './PostPreview';
import axios from 'axios';

export default class NewsPaper extends Component {

    constructor() {
        super();
        this.state = { posts: [], loaded: false, error: false };
    }

    componentDidMount() {
        axios
            .get('https://techcrunch.com/wp-json/tc/mobile/v1/posts/featured')
            .then(({ data }) => {
                this.setState({ posts: data, loaded: true, error: false })
            })
            .catch(() => {
                this.setState({ loaded: true, error: true })
            })
    }

    render() {
        if (this.state.error) {
            throw new Error('Error fetching data from endpoint');
        }
        return (
            <React.Fragment>
                {this.state.loaded && this.state.posts.posts.map(p => <PostPreview key={p.id} post={p} />)}
                {!this.state.loaded && (<p>Loading...</p>)}
            </React.Fragment>


        );
    }
}