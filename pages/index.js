import axios from "axios";
import Link from "next/link";
import React from "react";

var url = `https://jsonplaceholder.typicode.com/posts`;

const Index = ({ posts }) => {
  return (
    <div>
      <h2>Hello Next JS Updated</h2>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`p/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
      })}

      <Link href="/about" as={`/chicken`}>
        ABOUT
      </Link>
    </div>
  );
};

Index.getInitialProps = async () => {
  console.log("FETCHING INSIDE GET INITIAL PROPS 2.0 !!!");

  const res = await axios.get(url);
  const data = res.data;
  console.log(data[0]);
  return { posts: data };
};

export default Index;

// // CLASS COMPONENT
// import axios from "axios";
// import React, { Component } from "react";
// var url = `https://jsonplaceholder.typicode.com/posts`;

// export default class Index extends Component {
//   constructor(props) {
//     super(props);
//   }
//   static async getInitialProps() {
//     const res = await axios.get(url);
//     const data = res.data;
//     console.log(data[0]);
//     return { posts: data };
//   }

//   render() {
//     const { posts } = this.props;
//     return (
//       <div>
//         <h2>Hello NEXT JS</h2>

//         {posts.map((post) => {
//           return <li key={post.id}>{post.title}</li>;
//         })}
//       </div>
//     );
//   }
// }
