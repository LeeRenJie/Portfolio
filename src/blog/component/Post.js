import React from 'react';
import './Post.scss'

const Post = ({ post }) => {
    return (
      <div className="post-card">
        <img className="post-image" src={post.coverImage} alt={post.title} />
        <h3 className="post-title">{post.title}</h3>
        <p className="post-brief">{post.brief}</p>
      </div>
    )
}

export default Post;