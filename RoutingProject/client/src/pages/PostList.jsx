import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";

export function PostList() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        
          {posts.map((post)=>{
            return (
              <>
                <div key={post.id} className="card">
                  <div className="card-header">
                    {post.title}
                  </div>
                  <div className="card-body">
                    <div className="card-preview-text">
                      {post.body}
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link className="btn" to={`/posts/${post.id}`}>
                      View
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        
       
      </div>
    </>
  );
}

export function loader({ request: { signal } }) {
  return getPosts({signal})
}

export const postListRoute = {
  loader,
  element: <PostList />,
};
