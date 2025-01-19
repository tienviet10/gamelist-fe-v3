// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SignUp from '@app/components/SignUp/SignUp';
import NxWelcome from '@app/nx-welcome';
import Login from '@app/pages/Login/Login';

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
