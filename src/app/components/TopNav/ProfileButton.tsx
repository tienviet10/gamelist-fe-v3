import React from 'react';
import { useNavigate } from 'react-router-dom';

import { overviewRoute } from '@app/constants/global/urls';
import { Button } from '@lib/Button/Button';

function ProfileButton() {
  const navigate = useNavigate();
  // const userState = useAppSelector((state) => state.user);

  // if (!userState.user.email) return null;

  return (
    <Button
      className="text-white"
      onClick={() => {
        navigate(overviewRoute);
      }}
      variant="ghost"
    >
      Profile
    </Button>
  );
}

export default ProfileButton;
