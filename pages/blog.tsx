// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'

// //import { compareDesc, format, parseISO } from 'date-fns'
// //import { allPosts } from '@/contentlayer/generated'
// //import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, JSX, Key } from 'react'
// //import { UrlObject } from 'url'
// //import { useMDXComponent } from '@/next-contentlayer/hooks'

// // const Blog: NextPage = ({ posts }: any) => {
// //   return (
// //     <div className="mx-auto max-w-2xl py-16 text-center">
// //       <Head>
// //         <title>Contentlayer Blog Example</title>
// //       </Head>

// //       <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

// //       {posts.map((post: JSX.IntrinsicAttributes & { date: string | undefined; url: string | UrlObject; title: string | number | bigint | boolean | ReactPortal | Promise<AwaitedReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined }, idx: Key | null | undefined) => (
// //         <PostCard key={idx} {...post} />
// //       ))}
// //     </div>
// //   )
// // }

// // function PostCard(post: { date: string | undefined; url: string | UrlObject; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }) {
// //   return (
// //     <div className="mb-6">
// //       <time dateTime={post.date} className="block text-sm text-slate-600">
// //         {format(parseISO(post.date), 'LLLL d, yyyy')}
// //       </time>
// //       <h2 className="text-lg">
// //         <Link href={post.url}>
// //           <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
// //         </Link>
// //       </h2>
// //     </div>
// //   )
// // }

// // export default Blog

// // export async function getStaticProps() {
// //   const posts = allPosts.sort((a, b) => {
// //     return compareDesc(new Date(a.date), new Date(b.date))
// //   })
// //   return { props: { posts } }
// // }
