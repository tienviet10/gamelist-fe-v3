import styles from './CustomSocialTab.module.scss';

type Props = {
  text: string;
  onPress?: () => void;
  activeStyle?: string;
};

function CustomSocialTab({ text, onPress, activeStyle }: Props) {
  return (
    <span
      className={`${styles.link} ${activeStyle}`}
      onClick={onPress}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onPress) {
          onPress();
        }
      }}
      role="button"
      tabIndex={0}
    >
      {text}
    </span>
  );
}

export default CustomSocialTab;
