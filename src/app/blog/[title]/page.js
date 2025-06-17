import Image from 'next/image'
import React from 'react'
import "../../../assets/pages/blogs.css";
import axiosServerSide from '@/Api/axiosServerSide';

async function getData(title) {
  const res = await axiosServerSide.post(
    "Content/BlogDetail/",
    { url: title }
  );
  return res.data;
}
export async function generateMetadata({ params }) {
  const { title } = await params;
  if (!title) {
    console.error('Title is missing!');
  }

  const data = await getData(title);

  return {
    title: data.title || 'Default Blog Title', 
    description: data.content ? data.content.slice(0, 160) : 'Default description', 
    openGraph: {
      title: data.title || 'Default Blog Title',
      description: data.content ? data.content.slice(0, 160) : 'Default description',
      url: `${process.env.BASE_URL}/Blogs/${title}`,
      type: 'article',
      images: [
        {
          url: `${process.env.PHOTO_URL}${data?.image}`, 
          height: 600,
          alt: data.title || 'Blog Image',
        },
      ],
    },
  };
}
export default async function SingleBlogPage({ params }) {
  const { title } = params;
  if (!title) {
    console.error('Title is missing!');
  }
  const blog = await getData(title);

  return (
   <main className='blog-page'>
    <div className="blog-page-container container">
      <div className="blog-page-holder">
    <Image
    width={2000}
    height={2000}
    alt='loading...'
                        src={`${process.env.NEXT_PUBLIC_PHOTO_URL}${blog.photo}`}

    className='blog-page-img'
    />
  <div className="blog-page-main">
    <h1 className='blog-page-title'>
      {blog.title}
    </h1>
    <article className="blog-page-content" dangerouslySetInnerHTML={{__html:blog.content}}>

    </article>
       <span className='blog-page-author'>
      author: {blog.user.full_name}
    </span>
  </div>
      </div>

    </div>
    </main>
      )
}
