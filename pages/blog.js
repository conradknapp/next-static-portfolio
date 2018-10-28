import Link from "next/link";
import Layout from "../components/Layout";

// const PostLink = ({ title }) => (
//   <li>
//     <Link href={`/post?title=${title}`}>
//       <a>{title}</a>
//     </Link>
//   </li>
// );

// export default () => (
//   <Layout title="My Blog">
//     <ul>
//       <li>
//         <PostLink title="React" />
//         <PostLink title="Vue" />
//         <PostLink title="Angular" />
//       </li>
//     </ul>
//   </Layout>
// );

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout title="My Blog">
    <ul>
      <li>
        <PostLink slug="react-post" title="React" />
        <PostLink slug="vue-post" title="Vue" />
        <PostLink slug="angular-post" title="Angular" />
      </li>
    </ul>
  </Layout>
);
