import { useState, useEffect, lazy, Suspense } from 'react';
import * as HomePageApi from '../services/ApiGenerator';
import { useParams, useRouteMatch } from 'react-router-dom';
import { Route, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CommentCard from '../components/Comment';
import s from '../styles/view.module.css';

export default function CommentPage() {
  const { id } = useParams();
  const [comments, setComments] = useState(null);
  const [post, setPost] = useState(null);
  let history = useHistory();

  useEffect(() => {
    const fetchComments = () => {
      HomePageApi.fetchComments(id).then(({ data }) => {
        setComments(data);
      });
    };
    const fetchThisPost = () => {
      HomePageApi.fetchClickedPost(id).then(({ data }) => {
        setPost(data);
      });
    };
    fetchComments();
    fetchThisPost();
  }, [id]);

  return (
    <div className={s.container}>
      <div className={s.navContainer}>
        <h2
          className={s.button}
          type="button"
          onClick={() => history.push('/')}
        >
          Posts
        </h2>{' '}
        <span>{'>'}</span>
        <h2 className={s.button} style={{ color: 'gray' }}>
          Title: {id}
        </h2>
      </div>
      {post && (
        <>
          <h1>Title {id}</h1>
          <p>{post.title}</p>
        </>
      )}

      <h2>Comments</h2>
      {comments &&
        comments.map(comment => (
          <CommentCard key={uuidv4()}  comment={comment}></CommentCard>
          // <>
          //   <h3>{comment.email}</h3>
          //   <p>{comment.body}</p>
          // </>
        ))}
    </div>
  );
}
