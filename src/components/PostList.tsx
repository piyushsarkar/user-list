import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

interface IPost {
  id: number;
  user_id: number;
  title: string;
  body: string;
}
interface IResponse {
  data: IPost[];
}

const PostList = () => {
  const { id } = useParams();
  const { response, isLoading } = useFetch<IResponse>(
    `https://gorest.co.in/public/v1/users/${id}/posts`
  );

  return (
    <>
      <h1>Posts</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {response?.data?.length !== 0 ? (
          response?.data.map((post) => (
            <li className="post" key={post.id}>
              <Link to={'/post/' + post.id}>
                <h2>{post.title}</h2>
              </Link>
            </li>
          ))
        ) : (
          <li>This user has no posts.</li>
        )}
      </ul>
    </>
  );
};
export default PostList;
