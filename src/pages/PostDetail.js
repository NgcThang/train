import React from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const { slug } = useParams();
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Chi tiết bài viết</h1>
      <p>Đang xem bài: <strong>{slug}</strong></p>
    </div>
  );
}



