import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as HomePageApi from '../services/ApiGenerator';
import Card from '../components/Card';
import s from '../styles/view.module.css';

export default function HomeView() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const fetchPosts = () => {
      HomePageApi.fetchAllPosts()
        .then(res => res.data)
        .then(res => {
          setPage(res);
        });
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div
        className={s.navContainer}
        style={{ width: 100, marginLeft: 30, marginTop: 15 }}
      >
        <h2 className={s.button} type="button">
          Posts
        </h2>
      </div>
      <ul
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {' '}
        <Card posts={page} />
      </ul>
    </div>
  );
}
