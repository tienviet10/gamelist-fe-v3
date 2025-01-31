export const apiV1 = 'api/v1';
const interactiveEntity = 'interactive-entities';

export const authRoute = 'auth-service';
export const loginRoute = `${authRoute}/login`;
export const registerRoute = `${authRoute}/register`;

export const gameRoute = 'game-service';
export const gamesRoute = `${gameRoute}/games`;
export const userGameRoute = `${gameRoute}/${apiV1}/usergames`;
export const getUserGamesByStatus = `${gameRoute}/${apiV1}/usergames/status`;
export const gameFiltersRoute = `${gameRoute}/gamefilters`;

export const socialRoute = 'social-service';
export const forumRoute = `${socialRoute}/${apiV1}/${interactiveEntity}/forum-pageable`;
export const userSocialRoute = `${socialRoute}/${apiV1}/${interactiveEntity}/user-social/pageable`;
export const postingRoute = `${socialRoute}/${apiV1}/posts`;
export const commentRoute = `${socialRoute}/${apiV1}/comments`;
export const getNextCommentsRoute = `${socialRoute}/${apiV1}/comments/pageable`;
export const likeRoute = `${socialRoute}/${apiV1}/likes`;

export const userRoute = 'user-service';
export const userInfoRoute = `${userRoute}/${apiV1}/user/userinfo`;
export const addFollowRoute = `${userRoute}/${apiV1}/user/follows`;
export const removeFollowRoute = `${userRoute}/${apiV1}/user/unfollow`;
export const removeFollowerRoute = `${userRoute}/${apiV1}/user/remove-follower`;
export const getAllFollowRoute = `${userRoute}/${apiV1}/user/all-follow`;

// FE routes
export const userProfileRoute = '/userProfile';
export const overviewRoute = `${userProfileRoute}/overview`;
export const favoriteUserProfileRoute = `${userProfileRoute}/favorites`;
export const gameListUserProfileRoute = `${userProfileRoute}/game-list`;
export const socialUserProfileRoute = `${userProfileRoute}/forum`;
export const reviewsUserProfileRoute = `${userProfileRoute}/reviews`;
