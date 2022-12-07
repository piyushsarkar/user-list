import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

interface IUser {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface IResponse {
  data: IUser[];
}

const UserList = () => {
  const { response, isLoading } = useFetch<IResponse>(
    'https://gorest.co.in/public/v1/users'
  );

  return (
    <ul className="user-list">
      <h1>All Users</h1>
      {isLoading && <p>Loading...</p>}
      {response?.data.map((user) => (
        <li key={user.id}>
          <Link className="user" to={`/user/${user.id}`}>
            <h2>{user.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default UserList;
