import Layout from "../components/Layout";
import Link from "next/link";

const HireMe = () => (
  <Layout title="Hire Me">
    <p>
      You can hire me at{" "}
      <Link href="reedcodes@gmail.com">
        <a>ReedCodes@gmail.com</a>
      </Link>
    </p>
  </Layout>
);

export default HireMe;
