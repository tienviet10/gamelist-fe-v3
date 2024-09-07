export const apiV1 = 'api/v1';
const interactiveEntity = 'interactive-entities';

export const authRoute = 'auth-service';
export const loginRoute = `${authRoute}/login`;
export const registerRoute = `${authRoute}/register`;

export const gameRoute = 'game-service';
export const userGameRoute = `${gameRoute}/${apiV1}/usergames`;
export const getUserGamesByStatus = `${gameRoute}/${apiV1}/usergames/status`;

export const socialRoute = 'social-service';
export const forumRoute = `${socialRoute}/${apiV1}/${interactiveEntity}/forum-pageable`;
export const userSocialRoute = `${socialRoute}/${apiV1}/${interactiveEntity}/user-social/pageable`;
export const postingRoute = `${socialRoute}/${apiV1}/post`;

export const userRoute = 'user-service';
export const userInfoRoute = `${userRoute}/${apiV1}/user/userinfo`;
export const addFollow = `${userRoute}/${apiV1}/user/follows`;
export const getFollows = `${userRoute}/${apiV1}/user/all-follow`;
export const removeFollow = `${userRoute}/${apiV1}/user/unfollow`;
export const removeFollower = `${userRoute}/${apiV1}/user/remove-follower`;
