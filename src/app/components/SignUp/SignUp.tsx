import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { Link } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@lib/Button/Button';
import { Checkbox } from '@lib/Checkbox/Checkbox';
import { Form, FormControl, FormField, FormItem, FormMessage, FormDescription } from '@lib/Form/Form';
import { Input } from '@lib/Input/Input';

const formSchema = z
  .object({
    email: z.string().min(2, { message: 'Email address missing' }).max(50),
    username: z.string().min(2, { message: 'Please enter name' }).max(50),
    password: z.string().min(2, { message: 'Please enter password' }).max(50),
    confirmPassword: z.string().min(2, { message: 'Please confirm password' }).max(50),
    termsOfService: z.boolean().refine((val) => val === true, {
      message: 'Please accept the terms of service',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match',
  });

function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      termsOfService: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
  }

  return (
    <div className="mt-[60px] flex max-w-[400px] flex-col items-center rounded-md bg-[#fff] p-10">
      <Form {...form}>
        <div className="mb-[60px] mt-[20px] text-[24px] font-semibold">
          <p>Sign up to GameList</p>
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

          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username" {...field} variant="loginSignUp" />
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

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Confirm Password" type="password" {...field} variant="loginSignUp" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Checkbox */}
          <FormField
            control={form.control}
            name="termsOfService"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row items-center text-[14px] text-[#8f99a1]">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <p className="mt-0">&nbsp;You agree to our terms of service</p>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button size="loginSignUp" type="submit" variant="loginSignUp">
            Sign up
          </Button>
        </form>
      </Form>

      <div className="mt-[80px] flex flex-row text-[14px]">
        <Link to="/login" className="flex flex-row text-[#8f99a1] hover:text-[#3db4f2]">
          Login
        </Link>
        <p>&nbsp;•&nbsp;</p>
        <Link to="/resend-verification-email" className="flex flex-row text-[#8f99a1] hover:text-[#3db4f2]">
          Resend Verification Email
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
