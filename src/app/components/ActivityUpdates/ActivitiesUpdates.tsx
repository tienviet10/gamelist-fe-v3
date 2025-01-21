import { InView } from 'react-intersection-observer';
import { toast } from 'react-toastify';

import ActivityCard from '@app/components/ActivityUpdates/ActivityCard/ActivityCard';
import getSortedSocialData, {
  PostsAndStatusUpdatesType,
} from '@app/components/MainSectionUserProfile/ListActivities/getSortedSocialData';
import usePostsAndStatusUpdates from '@app/services/InteractiveEntity/usePostsAndStatusUpdates';
import { useAppSelector } from '@app/store/hooks';

import styles from '@app/components/ActivityUpdates/ActivitiesUpdates.module.scss';

function ActivitiesUpdates() {
  // const [socials, setSocials] = useState<(PostsDTOResponse | StatusUpdatesDTOResponse)[]>([]);
  const userState = useAppSelector((state) => state.user);

  const {
    postsAndStatusUpdatesIsLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    getPostsAndStatusUpdates,
    postsAndStatusUpdates,
  } = usePostsAndStatusUpdates();

  // const queryClient = useQueryClient();
  // const data = queryClient.getQueryData(['postsAndStatusUpdates']);

  // useEffect(() => {
  //   if (!data) return;

  //   setSocials(getSortedSocialData(data as PostsAndStatusUpdatesType));
  // }, [data]);

  if (postsAndStatusUpdatesIsLoading) {
    return <div>Loading...</div>;
  }

  const socials = getSortedSocialData(postsAndStatusUpdates as PostsAndStatusUpdatesType);

  return (
    <div className={styles.activitiesUpdatesContainer}>
      {socials.length > 0 &&
        socials.map((activity) => (
          <ActivityCard activity={activity} key={activity?.id} username={userState?.user?.username} />
        ))}
      {isFetchingNextPage ? 'Loading more activities...' : null}
      <InView
        as="div"
        onChange={async (inView) => {
          if (inView) {
            await fetchNextPage();

            if (!hasNextPage) {
              toast('No more activities to load');
            }
          }
        }}
        style={{
          height: '100px',
        }}
      />
    </div>
  );
}

export default ActivitiesUpdates;
