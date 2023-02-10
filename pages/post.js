import axios from "axios";

const Post = (props) => {
  console.log(props);
  return (
    <div>
      You are looking at post # {props.id}
      <li>
        {props.comments.map((comment) => {
          return <p key={comment.id}>{comment.email} -- {comment.body} </p>;
        })}
      </li>
    </div>
  );
};
// let url = `https://jsonplaceholder.typicode.com/comments?postId=1`;
let url = `https://jsonplaceholder.typicode.com`;
Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(`${url}/comments?postId=${query.id}`);
  const data = res.data;

  return { ...query, comments: data };
};

export default Post;

// import { withRouter } from "next/router";

// const Post = (props) => {
//   console.log(props);
//   return <div>You are looking at post # {props.router.query.id} </div>;
// };

// export default withRouter(Post);
