import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import {
  CommentDTO,
  CommentsResponse,
  LikeDTO,
  OldPostsAndStatusUpdatesDataType,
  PostsDTOResponse,
} from '@app/constants/global/types';

type UpdateCacheTypeValues = (typeof UPDATE_CACHE_TYPE)[keyof typeof UPDATE_CACHE_TYPE];

export const updatePostByPost = (
  oldData: OldPostsAndStatusUpdatesDataType | undefined,
  newPost: PostsDTOResponse,
  updateType: UpdateCacheTypeValues
): OldPostsAndStatusUpdatesDataType | undefined => {
  if (!oldData) {
    return undefined;
  }

  const { pageParams, pages } = oldData;

  if (updateType === UPDATE_CACHE_TYPE.CREATE) {
    const firstPage = pages[0];
    const { posts } = firstPage.data.postsAndStatusUpdates;
    const newPosts = [newPost, ...posts];

    const newFistPage = {
      ...firstPage,
      data: {
        ...firstPage.data,
        postsAndStatusUpdates: {
          ...firstPage.data.postsAndStatusUpdates,
          posts: newPosts,
        },
      },
    };

    const newPages = [newFistPage, ...pages.slice(1)];

    return {
      pageParams,
      pages: newPages,
    };
  }

  if (updateType === UPDATE_CACHE_TYPE.UPDATE) {
    for (let i = 0; i < pages.length; i += 1) {
      if (pages[i].data.postsAndStatusUpdates.lastPostOrStatusUpdateId <= newPost.id) {
        const { posts } = pages[i].data.postsAndStatusUpdates;

        const newPosts = posts.map((post) => {
          if (post.id === newPost.id) {
            return newPost;
          }

          return post;
        });

        const newPage = {
          ...pages[i],
          data: {
            ...pages[i].data,
            postsAndStatusUpdates: {
              ...pages[i].data.postsAndStatusUpdates,
              posts: newPosts,
            },
          },
        };

        const newPages = [...pages.slice(0, i), newPage, ...pages.slice(i + 1)];

        return {
          pageParams,
          pages: newPages,
        };
      }
    }
  }

  return {
    pageParams,
    pages,
  };
};

export const updateCommentInCache = (
  oldData: OldPostsAndStatusUpdatesDataType | undefined,
  newComment: CommentDTO | number | CommentsResponse,
  interactiveEntityId: number,
  updateType: UpdateCacheTypeValues
): OldPostsAndStatusUpdatesDataType | undefined => {
  if (!oldData) {
    return undefined;
  }

  const newData = structuredClone(oldData);
  const { pages } = newData;
  const firstPage = pages[0];
  const { posts } = firstPage.data.postsAndStatusUpdates;

  if (updateType === UPDATE_CACHE_TYPE.CREATE) {
    const foundPost = posts.find((post) => post.id === interactiveEntityId);

    foundPost?.comments.unshift(newComment as CommentDTO);
  }

  if (updateType === UPDATE_CACHE_TYPE.DELETE) {
    const foundPost = posts.find((post) => post.id === interactiveEntityId);
    const newComments = foundPost?.comments.filter((comment) => comment.id !== newComment);

    if (foundPost) {
      foundPost.comments = newComments || [];
    }
  }

  if (updateType === UPDATE_CACHE_TYPE.UPDATE) {
    const foundPost = posts.find((post) => post.id === interactiveEntityId);

    if (foundPost && typeof newComment !== 'number' && 'hasNextPage' in newComment) {
      foundPost.hasNextCommentPage = newComment.hasNextPage;
      foundPost.comments.push(...newComment.comments);
    }
  }

  return newData;
};

export const updatePostWithLike = (
  oldData: OldPostsAndStatusUpdatesDataType | undefined,
  like: LikeDTO | number,
  interactiveEntityId: number,
  updateType: UpdateCacheTypeValues
): OldPostsAndStatusUpdatesDataType | undefined => {
  if (!oldData) {
    return undefined;
  }

  const newData = structuredClone(oldData);
  const { pages } = newData;
  const firstPage = pages[0];
  const { posts } = firstPage.data.postsAndStatusUpdates;

  if (updateType === UPDATE_CACHE_TYPE.UPDATE) {
    const foundPost = posts.find((post) => post.id === interactiveEntityId);

    if (typeof like !== 'number') {
      if (typeof like !== 'number') {
        foundPost?.likes.push(like);
      }
    }
  }

  if (updateType === UPDATE_CACHE_TYPE.DELETE) {
    const foundPost = posts.find((post) => post.id === interactiveEntityId);

    if (foundPost?.likes) {
      foundPost.likes = foundPost.likes.filter((item) => item.id !== like);
    }
  }

  return newData;
};
