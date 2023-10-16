import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsersRequest } from './../actions/UsersActions';

export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.UsersReducer.users);
    const error = useSelector(state => state.UsersReducer.error);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    return (
      <div id="users">
        {users.map(user => {
            return (
                <div key={user.id}>
                  <p><span>Name:</span>{user.name}</p>
                  <p><span>Email:</span>{user.email}</p>
                  <p><span>Username:</span>{user.username}</p>
                  <hr/>
                </div>
            );
        })}
        {error && <h1>{error}</h1>}
      </div>
    );
};
