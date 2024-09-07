// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from '@app/nx-welcome';
import Login from '@app/components/login/Login';
import SignUp from './components/signup/SignUp';

export function App() {
  return (
    <div>
      <Login />
      <SignUp />
      <NxWelcome title="gamelist-fe" />
    </div>
  );
}

export default App;
