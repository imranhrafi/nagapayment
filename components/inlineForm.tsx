"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(20),
  email: z
    .string({ required_error: "Name is required" })
    .email({ message: "Please enter a valid email address" })
    .toLowerCase(),
  phoneNumber: z.number(),
  companyName: z.string(),
  MonthlyCreditCardVolume: z.string(),
});

const InlineForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: 0,
      companyName: "",
      MonthlyCreditCardVolume: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  };

  return (
    <Card className='p-8'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-6'
        >
          <div className='flex flex-col justify-between md:flex-row'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='First Name' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder='First Name' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='imranhrafi@gmail.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='companyName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Delta- delta corporation'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='MonthlyCreditCardVolume'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Credit Card Volume</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Please select' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Less than $10,000'>
                      Less than $10,000
                    </SelectItem>
                    <SelectItem value='$10,000 to $30,000'>
                      $10,000 to $30,000
                    </SelectItem>
                    <SelectItem value='$31,000 to $50,000'>
                      $31,000 to $50,000
                    </SelectItem>
                    <SelectItem value='More than $50,000'>
                      More than $50,000
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button className='w-full ' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
      <p className='relative mt-8 text-sm text-center text-muted-foreground'>
        OR
      </p>
      <p className='relative mt-8 text-sm text-center '>
        Call NadaPayments
      </p>
      <h3 className='text-xl text-center'>929-293-1800</h3>
    </Card>
  );
};

export default InlineForm;
