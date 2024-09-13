type FollowedUserData = {
  id: number;
  bannerPicture: string;
  userPicture: string;
  username: string;
};

type FollowerFollowingListType = {
  id: number;
  following: FollowedUserData[];
  followers: FollowedUserData[];
};

export type FollowDataType = {
  user: FollowerFollowingListType;
};

export type UserFollowIdResponse = {
  user: FollowedUserData;
};
