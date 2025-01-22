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
  // const {
  //   addFollowMutation,
  //   followedUserData,
  //   addFollowError,
  //   addFollowIsError,
  //   removeFollowMutation,
  //   removedFollowedUserData,
  //   removeFollowError,
  //   removedFollowIsError,
  //   removeFollowerError,
  //   removedFollowerIsError,
  //   removeFollowerMutation,
  //   removedFollowerUserData,
  // } = useFollows();

  useEffect(() => {
    if (removeFollowError?.response.data.message || removedFollowIsError) {
      toast.warn(`There is something wrong when processing unfollow ${userInfo?.username}!`);
    } else if (removedFollowedUserData?.data.data.user.username) {
      toast(`You have unfollowed ${userInfo?.username} successfully.`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeFollowError?.response.data.message, removedFollowIsError]);

  useEffect(() => {
    if (addFollowError?.response.data.message || addFollowIsError) {
      toast.warn(`Can not follow ${userInfo?.username}. ${addFollowError?.response.data.message}!`);
    } else if (followedUserData?.data.data.user.username) {
      toast(`You have followed ${userInfo?.username} successfully.`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addFollowError?.response.data.message, addFollowIsError]);

  useEffect(() => {
    if (removeFollowerError?.response.data.message || removedFollowerIsError) {
      toast.warn(`There is something wrong when processing remove follower ${userInfo?.username}!`);
    } else if (removedFollowerUserData?.data.data.user.username) {
      toast(`You have removed ${userInfo?.username} as your follower successfully.`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeFollowerError?.response.data.message, removedFollowerIsError]);

  const handleAddFollow = async (userInput: UserType) => {
    // Modal.confirm({
    //   title: `Are you sure you want to follow ${userInput.username}?`,
    //   content: 'You will see their posts or status in your feed.',
    //   onOk: async () => {
    //     addFollowMutation({
    //       userId: userInput.id,
    //     });
    //     setUserInfo({
    //       id: userInput.id,
    //       username: userInput.username,
    //     });
    //   },
    // });
  };

  const handleRemoveFollow = (followedUser: UserType) => {
    // Modal.confirm({
    //   title: `Are you sure you want to unfollow ${followedUser.username}?`,
    //   content: 'You will no longer see their posts in your feed.',
    //   onOk: async () => {
    //     setUserInfo({
    //       id: followedUser.id,
    //       username: followedUser.username,
    //     });
    //     removeFollowMutation({
    //       userId: followedUser.id,
    //     });
    //   },
    // });
  };

  const handleRemoveFollower = (follower: UserType) => {
    // Modal.confirm({
    //   title: `Are you sure you want to remove ${follower.username} as your follower?`,
    //   content: 'They will no longer see your posts in their feed.',
    //   onOk: async () => {
    //     setUserInfo({
    //       id: follower.id,
    //       username: follower.username,
    //     });
    //     removeFollowerMutation({
    //       userId: follower.id,
    //     });
    //   },
    // });
  };

  return {
    handleAddFollow,
    handleRemoveFollow,
    handleRemoveFollower,
  };
};

export default useHandleAddRemoveFollow;
