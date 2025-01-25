import {
  CommentDTO,
  CommentDTOResponse,
  CreateCommentResponse,
  OldPostsAndStatusUpdatesDataType,
  PostsDTOResponse,
} from '@app/constants/global/types';

export const updatePostByPost = (
  oldData: OldPostsAndStatusUpdatesDataType | undefined,
  newPost: PostsDTOResponse,
  updateType: 'create' | 'delete' | 'update'
): OldPostsAndStatusUpdatesDataType | undefined => {
  if (!oldData) {
    return undefined;
  }

  const { pageParams, pages } = oldData;

  if (updateType === 'create') {
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

  if (updateType === 'update') {
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
  newComment: CommentDTO,
  interactiveEntityId: number,
  updateType: 'create' | 'delete' | 'update'
): OldPostsAndStatusUpdatesDataType | undefined => {
  if (!oldData) {
    return undefined;
  }

  const newData = structuredClone(oldData);
  const { pageParams, pages } = newData;

  if (updateType === 'create') {
    const firstPage = pages[0];
    const { posts } = firstPage.data.postsAndStatusUpdates;
    const foundComment = posts.find((post) => post.id === interactiveEntityId);

    foundComment?.comments.push(newComment);

    return newData;
  }

  return {
    pageParams,
    pages,
  };
};
