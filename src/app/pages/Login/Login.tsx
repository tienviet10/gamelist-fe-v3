import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { useAuth } from '@app/services/authentication/useAuth';
import { useAppDispatch } from '@app/store/hooks';
import { setUser } from '@app/store/userSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@lib/Button/Button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@lib/Form/Form';
import { Input } from '@lib/Input/Input';

const formSchema = z.object({
  email: z.string().min(2, { message: 'Please enter your email' }).max(50),
  password: z.string().min(2, { message: 'Please enter your password' }).max(50),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { signInMutation, signInResponse, signInError } = useAuth();

  // TODO: display error message

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    signInMutation(values);
  }

  useEffect(() => {
    if (!signInResponse?.data?.data?.token) return;

    localStorage.setItem('token', signInResponse.data.data.token);
    dispatch(setUser(signInResponse.data.data.user));
    navigate('/userProfile');
  }, [dispatch, navigate, signInResponse]);

  useEffect(() => {
    toast.error(signInError?.response?.data?.details || signInError?.message);
  }, [signInError]);

  return (
    <div className="flex max-w-96 flex-col items-center rounded-md bg-background p-10">
      <Form {...form}>
        <div className="text-6 mb-16 mt-5 font-semibold">
          <p>Login</p>
        </div>
        <form className="flex max-w-80 flex-col items-center space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} variant="loginSignUp" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} variant="loginSignUp" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size="loginSignUp" type="submit" variant="loginSignUp">
            Login
          </Button>
        </form>
      </Form>
      <Link className="mt-5 text-sm text-primary" to="/forgot-password">
        Forgot password?
      </Link>
      <div className="mt-20 flex flex-row text-sm">
        <Link className="flex flex-row text-primary" to="/signup">
          <p>Not registered?&nbsp;</p>
          <p>Create an account</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
