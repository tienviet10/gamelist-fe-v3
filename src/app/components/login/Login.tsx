import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@lib/Button/Button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@lib/Form/Form';
import { Input } from '@lib/Input/Input';

const formSchema = z.object({
  email: z.string().min(2, { message: 'Please enter your email' }).max(50),
  password: z.string().min(2, { message: 'Please enter your password' }).max(50),
});

function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
  }

  return (
    <div className="mt-[60px] flex max-w-[400px] flex-col items-center rounded-md bg-[#fff] p-10">
      <Form {...form}>
        <div className="mb-[60px] mt-[20px] text-[24px] font-semibold">
          <p>Login</p>
        </div>
        <form className="flex max-w-[320px] flex-col items-center space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
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
      <a className="mt-[20px] text-[14px] text-[#8f99a1] hover:text-[#3db4f2]" href="/forgot-password">
        Forgot password?
      </a>
      <div className="mt-[80px] flex flex-row text-[14px]">
        <a className="flex flex-row text-[#8f99a1] hover:text-[#3db4f2]" href="/signup">
          <p>Not registered?&nbsp;</p>
          <p className="text-[#3db4f2]">Create an account</p>
        </a>
      </div>
    </div>
  );
}

export default Login;
