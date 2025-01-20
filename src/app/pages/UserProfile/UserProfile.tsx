import ContentWrapper from '@app/components/ContentWrapper/ContentWrapper';

import ProfileContent from './ProfileContent/ProfileContent';
import UserProfileHeader from './UserLinks/UserProfileHeader';

export default function UserProfile({ routeName }: { routeName: string }) {
  return (
    <ContentWrapper>
      <UserProfileHeader />
      <ProfileContent routeName={routeName} />
    </ContentWrapper>
  );
}
