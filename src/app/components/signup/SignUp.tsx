import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@lib/Button/Button';
import { Input } from '@lib/Input/Input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@lib/Form/Form';
import { Checkbox } from '@lib/Checkbox/Checkbox';

const formSchema = z.object({
  email: z.string().min(2, { message: 'Must be atleast 2 characters' }).max(50),
  username: z.string().min(2, { message: 'Must be atleast 2 characters' }).max(50),
  password: z.string().min(2, { message: 'Must be atleast 2 characters' }).max(50),
  confirmPassword: z.string().min(2, { message: 'Must be atleast 2 characters' }).max(50),
});

const SignUp = () => {
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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="mt-[60px] flex max-w-[400px] flex-col items-center rounded-md bg-[#fff] p-10">
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
          <Button type="submit" variant="loginSignUp" size="loginSignUp">
            Sign up
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
