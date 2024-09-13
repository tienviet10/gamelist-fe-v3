import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from '@lib/Button/Button';
import { Input } from '@lib/Input/Input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@lib/Form/Form';
import { Checkbox } from '@lib/Checkbox/Checkbox';

const formSchema = z.object({
  email: z.string().min(2, { message: 'Please enter your email address' }).max(50),
  username: z.string().min(2, { message: 'Name must be atleast 2 characters' }).max(50),
  password: z.string().min(2, { message: 'Password be atleast 2 characters' }).max(50),
  confirmPassword: z.string().min(2, { message: 'Confirm password must be atleast 2 characters' }).max(50),
});

const SignUp = () => {
  const [formCheckbox, setFormCheckbox] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (formCheckbox === false) {
      // check user agree to terms and conditions
      toast.error('Please agree to our terms of service');
    } else if (values.password !== values.confirmPassword) {
      // check passwords match
      toast.error('Passwords do not match');
    } else {
      console.log(values);
    }
  }

  return (
    <div className="mt-[60px] flex max-w-[400px] flex-col items-center rounded-md bg-[#fff] p-10">
      <ToastContainer />
      <Form {...form}>
        <div className="mb-[60px] mt-[20px] text-[24px] font-semibold">
          <p>Sign up to GameList</p>
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
                  <Input type="password" placeholder="Password" {...field} variant="loginSignUp" />
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
                  <Input type="password" placeholder="Confirm Password" {...field} variant="loginSignUp" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Checkbox */}
          <div className="flex flex-row items-center justify-center text-[14px] text-[#8f99a1]">
            <Checkbox
              className="border-inherit"
              onClick={() => {
                setFormCheckbox(!formCheckbox);
              }}
              checked={formCheckbox}
            />
            <p>&nbsp;You agree to our terms of service</p>
          </div>

          {/* {modal && <p className="text-[14px] text-[rgb(237,62,62)]">Please agree to our terms of service</p>} */}

          <Button type="submit" variant="loginSignUp" size="loginSignUp">
            Sign up
          </Button>
        </form>
      </Form>

      <div className="mt-[80px] flex flex-row text-[14px]">
        <a href="/login" className="flex flex-row text-[#8f99a1] hover:text-[#3db4f2]">
          Login
        </a>
        <p>&nbsp;•&nbsp;</p>
        <a className="flex flex-row text-[#8f99a1] hover:text-[#3db4f2]">Resend Verification Email</a>
      </div>
    </div>
  );
};

export default SignUp;
