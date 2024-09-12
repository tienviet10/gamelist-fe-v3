import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@lib/Button/Button';
import { Input } from '@lib/Input/Input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@lib/Form/Form';
import { Checkbox } from '@lib/Checkbox/Checkbox';

const formSchema = z.object({
  email: z.string().min(2, { message: 'Please enter your email' }).max(50),
  password: z.string().min(2, { message: 'Please enter your password' }).max(50),
});

const Login = () => {
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
    console.log(values);
  }

  return (
    <div className="mt-[60px] flex max-w-[400px] flex-col items-center rounded-md bg-[#fff] p-10">
      <Form {...form}>
        <div className="mb-[60px] mt-[20px] text-[24px] font-semibold">
          <p>Login</p>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex max-w-[320px] flex-col items-center space-y-8">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} variant="loginSignUp" />
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
                  <Input type="password" placeholder="Password" {...field} variant="loginSignUp" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="loginSignUp" size="loginSignUp">
            Login
          </Button>
        </form>
      </Form>
      <a href="/forgot-password" className="mt-[20px] text-[14px] text-[#8f99a1] hover:text-[#3db4f2]">
        Forgot password?
      </a>
      <div className="mt-[80px] flex flex-row text-[14px]">
        <a href="/sign-up" className="flex flex-row text-[#8f99a1] hover:text-[#3db4f2]">
          <p>Not registered?&nbsp;</p>
          <p className="text-[#3db4f2]">Create an account</p>
        </a>
      </div>
    </div>
  );
};

export default Login;
