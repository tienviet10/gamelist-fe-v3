import { InView as ReactIntersectionInView } from 'react-intersection-observer';

type InViewProps = {
  onChange: () => void;
};

export default function InView({ onChange }: InViewProps) {
  return <ReactIntersectionInView onChange={(inView) => inView && onChange()} style={{ visibility: 'hidden' }} />;
}
