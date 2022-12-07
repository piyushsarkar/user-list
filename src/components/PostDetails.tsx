import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

interface IResponse {
  data: {
    id: number;
    user_id: number;
    title: string;
    body: string;
  };
}

const PostDetails = () => {
  const { id } = useParams();
  const { response, isLoading } = useFetch<IResponse>(
    `https://gorest.co.in/public/v1/posts/${id}`
  );

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h2>{response?.data.title}</h2>
      <p>{response?.data.body}</p>
    </div>
  );
};
export default PostDetails;
