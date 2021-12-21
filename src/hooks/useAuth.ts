import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store';

const useAuth = () => {
  const { user } = useSelector(({ auth }: RootState) => auth);

  return { user };
};

export default useAuth;
