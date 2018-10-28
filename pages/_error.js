import Layout from "../components/Layout";

const Error = ({ statusCode }) => (
  <Layout title="Error!!!">
    {statusCode
      ? `Could not load your data: Status Code ${statusCode}`
      : "Couldn't get that page, sorry"}
  </Layout>
);

export default Error;
