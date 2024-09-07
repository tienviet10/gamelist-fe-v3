// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ContextWrapper from 'src/ContextWrapper';
import Test from './test';

export function App() {
  return (
    <ContextWrapper>
      <Test />
    </ContextWrapper>
  );
}

export default App;
