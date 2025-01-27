import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import useAddFollow from '@app/services/social/useAddFollow';
import useRemoveFollow from '@app/services/social/useRemoveFollow';
import useRemoveFollower from '@app/services/social/useRemoveFollower';

type UserType = {
  id: number;
  username: string;
};

const useHandleAddRemoveFollow = () => {
  const [userInfo, setUserInfo] = useState<UserType>();
  const { addFollowMutation, followedUserData, addFollowError, addFollowIsError } = useAddFollow();
  const { removeFollowMutation, removedFollowedUserData, removeFollowError, removedFollowIsError } = useRemoveFollow();

  const { removeFollowerMutation, removedFollowerUserData, removeFollowerError, removedFollowerIsError } =
    useRemoveFollower();

  useEffect(() => {
    if (removeFollowError?.response?.data?.message || removedFollowIsError) {
      toast.warn(`There is something wrong when processing unfollow ${userInfo?.username}!`);
    } else if (removedFollowedUserData?.data?.data?.username) {
      toast(`You have unfollowed ${userInfo?.username} successfully.`);
    }
  }, [
    removeFollowError?.response?.data?.message,
    removedFollowIsError,
    removedFollowedUserData?.data?.data?.username,
    userInfo?.username,
  ]);

  useEffect(() => {
    if (addFollowError?.response?.data?.message || addFollowIsError) {
      toast.warn(`Can not follow ${userInfo?.username}. ${addFollowError?.response.data.message}!`);
    } else if (followedUserData?.data?.data?.username) {
      toast(`You have followed ${userInfo?.username} successfully.`);
    }
  }, [
    addFollowError?.response?.data?.message,
    addFollowIsError,
    followedUserData?.data?.data?.username,
    userInfo?.username,
  ]);

  useEffect(() => {
    if (removeFollowerError?.response?.data?.message || removedFollowerIsError) {
      toast.warn(`There is something wrong when processing remove follower ${userInfo?.username}!`);
    } else if (removedFollowerUserData?.data?.data?.username) {
      toast(`You have removed ${userInfo?.username} as your follower successfully.`);
    }
  }, [
    removeFollowerError?.response?.data?.message,
    removedFollowerIsError,
    removedFollowerUserData?.data?.data?.username,
    userInfo?.username,
  ]);

  const handleAddFollow = (userInput: UserType) => {
    addFollowMutation(userInput);
    setUserInfo({
      id: userInput.id,
      username: userInput.username,
    });
  };

  const handleRemoveFollow = (followedUser: UserType) => {
    setUserInfo({
      id: followedUser.id,
      username: followedUser.username,
    });
    removeFollowMutation({
      userId: followedUser.id,
    });
  };

  const handleRemoveFollower = (follower: UserType) => {
    setUserInfo({
      id: follower.id,
      username: follower.username,
    });
    removeFollowerMutation({
      userId: follower.id,
    });
  };

  return {
    handleAddFollow,
    handleRemoveFollow,
    handleRemoveFollower,
  };
};

export default useHandleAddRemoveFollow;
