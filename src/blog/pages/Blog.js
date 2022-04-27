import React from 'react';
import BlogPosts from '../component/BlogPosts.js';
import styles from '../../shared/styles/Title.module.scss'
import './Blog.scss'

const Blog = () => {
	return(
		<div className="colored-container">
			<div className={styles['title-container']}>
				<h1 className={styles.title}>
				Latest Blogs
				</h1>
			</div>
			<BlogPosts />
		</div>
	)
}

export default Blog;