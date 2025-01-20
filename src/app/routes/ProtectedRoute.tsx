import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@app/store/hooks';

export default function ProtectedRoute() {
  const userState = useAppSelector((state) => state.user);

  if (userState.loading) return;

  return userState?.user?.email ? <Outlet /> : <Navigate to="/login" />;
}
