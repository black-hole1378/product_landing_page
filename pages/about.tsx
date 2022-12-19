import { NextPage } from "next";
import HeadElement from "../src/component/Header/Head";
const About: NextPage = () => {
  return (
    <div>
      <HeadElement />
      <main>Hello Collection</main>
    </div>
  );
};

export default About;
