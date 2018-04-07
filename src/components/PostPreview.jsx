import React from 'react';
import { Link } from "react-router-dom";
import glamorous, { Div } from 'glamorous';
import ImagePresenter from './ImagePresenter';
import Divider from './Divider';

const PreviewContainer = glamorous.div({
    width: '80%',
    '@supports (display: grid)': {
        display: 'grid',
        gridGap: 10,
        gridTemplateAreas: `
            "thumbnail title title"
            "excerpt excerpt excerpt"
            `,
        gridTemplateColumns: '40% 30% 30%'
    },
})

const PostPreview = props => (
    <React.Fragment>
        <br />
        <PreviewContainer>
            <Div css={{ gridArea: 'title' }}>
                <Link to={{
                    pathname: props.post.id,
                    state: { post: props.post, fromPreview: true }
                }} >
                    <h3>{props.post.title}</h3>
                </Link>
            </Div>
            <Div css={{ gridArea: 'excerpt' }}>
                <p>{props.post.excerpt}</p>
            </Div>
            <Div css={{ gridArea: 'thumbnail' }}>
                <ImagePresenter imageSource={props.post.thumbnail} />
            </Div>
        </PreviewContainer>
        <br />
        <Divider />
    </React.Fragment >
);

export default PostPreview;