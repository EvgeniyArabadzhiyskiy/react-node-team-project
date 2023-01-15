import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setToken } from 'redux/auth/authSlice';

export const useGoogleAuth = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    if (!accessToken) return;

    dispatch(setToken(accessToken));
  }, [dispatch, searchParams]);
};
