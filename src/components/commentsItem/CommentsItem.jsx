import React from 'react'
import PropTypes from 'prop-types'
import './commentsItem.scss'

const CommentsItem = ({ comment, img }) => {
	return (
		<li className='comments-item'>
			<div
				className='comments-item__img'
				style={{ backgroundColor: img }}
			></div>
			<div className='comments-item__text'>{comment}</div>
		</li>
	)
}

CommentsItem.propTypes = {
	comment: PropTypes.string,
	img: PropTypes.string,
}

export default CommentsItem
