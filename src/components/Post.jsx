import React from 'react';
import { Div } from 'glamorous';
import Divider from './Divider';
import ImagePresenter from './ImagePresenter';

const Paragraph = props => (
    <React.Fragment>
        <span dangerouslySetInnerHTML={{ __html: props.content }} />
        <br />
        <br />
    </React.Fragment>
)

const Post = props => {

    const locationState = props.history.location.state
    if (!locationState || !locationState.fromPreview) {
        props.history.push('/')
        return <div />;
    }
    const contentTypes = { paragraph: 'paragraph', blockQuote: 'block_quote', image: 'image' };
    return (
        <React.Fragment>
            <Divider />
            <Div width="90%">
                <br />
                <Div textAlign="left">
                    <button onClick={() => props.history.push('/')}>Go to main</button>
                </Div>
                <h1>{locationState.post.title}</h1>
                <br />
                {locationState.post.content.map((content, index) => {
                    switch (content.type) {
                        case contentTypes.blockQuote:
                            return (
                                <React.Fragment key={index}>
                                    <blockquote dangerouslySetInnerHTML={{ __html: content.text }} />
                                    <br />
                                </React.Fragment>
                            )
                        case contentTypes.image:
                            return (
                                <ImagePresenter 
                                    key={index}
                                    imageSource={content.url}
                                />
                            )
                        default:
                            return <Paragraph key={index} content={content.text} />
                    }
                })}
            </Div>
            <Divider />
        </React.Fragment>
    )
};

export default Post;