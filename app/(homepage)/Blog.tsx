import Image from "next/image";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    title: "POS Systems for Small Businesses Explained",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/blog/1",
    time: "september 29, 2023",
    image:
      "https://plus.unsplash.com/premium_photo-1661764509528-5fdf0621db16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    title:
      "What to Know About Passing on Credit Card Fees to Customers",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/blog/2",
    time: "july 23, 2023",
    image:
      "https://images.pexels.com/photos/6956891/pexels-photo-6956891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Making Sense of Transaction Fees: A Comprehensive Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/blog/3",
    time: "january 1, 2023",
    image:
      "https://images.pexels.com/photos/4386369/pexels-photo-4386369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Blog = () => {
  return (
    <section className='flex flex-col items-center'>
      <h1 className='mb-20'>Latest Posts</h1>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {blogData.map((blog) => (
          <Card key={blog.id}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={340}
              className='w-full'
            />

            <div className='flex flex-col col-span-3 p-6'>
              <p className='text-sm text-left text-muted-foreground'>
                {blog.time}
              </p>
              <h3 className='mt-4 mb-6 text-xl font-bold'>
                {blog.title}
              </h3>
              <Button variant={"ghost"} className='w-max'>
                <Link href={blog.link}>Visit Blog</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blog;
