import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from 'redux/users/userOperation';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const UserDetailsPage = () => {
  const params = useParams();
  const curentUser = useSelector(state => state.currentUser);
  console.log(curentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserId(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <h2>{curentUser.name}</h2>
      <p>{curentUser.email}</p>
      <p>{curentUser.phone}</p>
      <img src={curentUser.avatar} alt={curentUser.name} />
    </>
  );
};
