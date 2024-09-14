// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Login from '@app/components/Login/Login';
import NxWelcome from '@app/nx-welcome';
import SignUp from '@app/components/SignUp/SignUp';

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
