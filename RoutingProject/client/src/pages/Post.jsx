import { Link, useLoaderData } from "react-router-dom";
import { getPost } from "../api/posts";
import { getComments } from "../api/comments";
import {getUser} from "../api/users"

export function Post() {
    const {comments , post ,user}  = useLoaderData()

  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <div>{post.body}</div>
    </>
  ); 
}

export async function loader({ request: { signal } ,params:{postId} }) {
  const comments = getComments(postId,{signal})
  const post  = await getPost(postId,{signal})
  const user = getUser(post.userId,{signal})
  return {comments : await comments,post , user: await user}
}

export const postRoute = {
  loader,
  element: <Post />,
};
