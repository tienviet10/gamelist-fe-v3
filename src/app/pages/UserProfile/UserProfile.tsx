import ContentWrapper from '@app/components/ContentWrapper/ContentWrapper';

import UserBanner from './UserBanner/UserBanner';
import UserLinks from './UserLinks/UserLinks';

export default function UserProfile() {
  return (
    <ContentWrapper>
      <UserBanner />
      <UserLinks />
    </ContentWrapper>
  );
}
