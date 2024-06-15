type Props = {
  text: string;
  onPress?: () => void;
  activeStyle?: string;
};

export function CustomSocialTab({ text, onPress, activeStyle }: Props) {
  return (
    <span
      className={`${activeStyle}`}
      onClick={onPress}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onPress) {
          onPress();
        }
      }}
      role="button"
      tabIndex={0}
    >
      {text} + CustomSocialTab
    </span>
  );
}

export default CustomSocialTab;
