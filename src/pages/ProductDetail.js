import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return <div style={{ padding: '2rem' }}><h2>Sản phẩm không tồn tại</h2></div>
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <p>Đây là trang demo cho sản phẩm: <strong>{product.name}</strong> (slug: <code>{slug}</code>)</p>
    </div>
  )
}


