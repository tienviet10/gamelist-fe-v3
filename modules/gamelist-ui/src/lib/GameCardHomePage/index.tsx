import { Card } from 'antd';
import styles from './GameCardHomePage.module.scss';

type Props = {
  colorBgContainer: string;
  imgSrc: string;
  id: string;
  title: string;
  titleColor: string;
};

export function GameCardHomePage({ id, imgSrc, colorBgContainer, title, titleColor }: Props) {
  const { Meta } = Card;

  return (
    <Card
      bodyStyle={{
        padding: '24px 24px 24px 10px',
        backgroundColor: colorBgContainer,
      }}
      bordered={false}
      className={styles.cardGameContainer}
      cover={<img alt="example" src={imgSrc} />}
      game-card-id={id}
      style={{
        backgroundColor: colorBgContainer,
      }}
    >
      <Meta className={styles.metaGameDescription} style={{ color: `${titleColor}` }} title={title} />
    </Card>
  );
}

export default GameCardHomePage;
