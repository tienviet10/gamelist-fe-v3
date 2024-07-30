import GameCardHomePage from '@lib/GameCardHomePage';
import { Link } from 'react-router-dom';

type Props = {
  link: string;
};

export function LinkGameCardHomePage({ link, ...rest }: Props) {
  return (
    // <Link to={link}>
    //   <GameCardHomePage {...rest} />
    // </Link>
    <>hi</>
  );
}

export default LinkGameCardHomePage;
