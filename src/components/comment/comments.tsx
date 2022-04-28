import React, {FC} from 'react';
import {CommentType} from "../../store/reducers/catalog";


type Props = {
	comments: {
		[commendId: string]: CommentType
	}
}

const Comments: FC<Props> = ({comments}) => {

	return (
		<div>
			{Object.keys(comments).map(comment => {
				return (
					<>
						<h3>{comments[comment].author}</h3>
						<p>{comments[comment].textComment}</p>
					</>
				)
			})}
		</div>
	);
};

export default Comments;