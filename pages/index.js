import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";

const posts = [
  {
    title: "Ways of Learning Coding",
    excerpt: "This is the brief Description of the post",
  },
  {
    title: "Next with Tailwind",
    excerpt: "This is the brief Description of the post",
  },
];
export default function Home() {
  return (
    <div className="container px-10 mx-auto mb-8">
      <Head>
        <title>JB Web Developer Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
