import Layout from "../components/Layout";

const Post = props => (
  <Layout title={props.url.query.title}>
    <div style={{ width: "80vw" }}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum accusantium
      fugit cumque, laudantium iste asperiores quae voluptas? Eum dolores vitae
      voluptas vel quos. Incidunt repellat voluptatibus deleniti, officia error
      repellendus.
    </div>
  </Layout>
);

export default Post;
