import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';

function Blogs() {
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <h1 className="text-2xl font-semibold text-red-500 my-4">
          No posts found
        </h1>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="my-8">
            <p className="text-2xl font-bold text-green-400">
              {post.title}
            </p>
            <p className="text-sm text-gray-600">
              By <span>{post.author}</span> on{' '}
              <span className="text-blue-500">{post.category}</span>
            </p>
            <p className="text-sm text-gray-600">
              Posted on <span>{post.date}</span>
            </p>
            <p className="my-2">{post.content}</p>
            <div className="flex flex-wrap">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs mr-2 my-1"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
