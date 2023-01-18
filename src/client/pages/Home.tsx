import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="col-lg-12 col-md-8 col-sm-12 mt-3">
        <div className=" bg-warning rounded border border-dark card shadow-lg">
          <div className="row card-body p-3 m-4">
            <h1 className="fw-bold rounded p-3 mr-4 bg-blogbg text-center col-lg-12 col-md-8 col-sm-12">
              The Bloggiest of Blogs
            </h1>
            <img
              className="rounded p-5"
              style={{ aspectRatio: 1 / 1, height: "fit-content", width: "fit-content" }}
              src="https://webdesigner23.com/wp-content/uploads/2019/01/blogging.png"
            />

            <h5 className="px-2 py-2">
              {" "}
              Ah, internet blogs. The reason we can all now proudly call ourselves "content creators" and have a
              platform to share our most deeply held opinions on vegan cheese and the benefits of essential oils.
              Because who doesn't want to hear the musings of a random stranger on the internet?
            </h5>

            <h5 className="px-3 py-2">
              {" "}
              But in all seriousness (or not-so-seriousness), blogs do provide some valuable social benefits. For one,
              they give a voice to the voiceless, or at least those without their own talk show. And let's be real, if
              you can't rant about your ex on your personal blog, where can you do it?
            </h5>

            <h5 className="px-4 py-2">
              Blogs also create virtual communities of like-minded individuals, so you don't have to go outside and
              interact with actual people. And who needs real human connection when you have the satisfaction of someone
              liking your Instagram post?
            </h5>

            <h5 className="px-5 py-2">
              {" "}
              So, in conclusion, internet blogs: because sometimes it's just easier to share your thoughts with the
              world from the comfort of your own computer.
            </h5>

            <h3 className="fw-bold text-center"> You're welcome, society.</h3>

            <small className="text-end fst-italic"> -- love ChatGPT</small>
          </div>

          <div className="d-flex justify-content-between mx-2"></div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="./blogs">
            <button className="btn btn-secondary btn-outline-dark m-3">Blogs</button>
          </Link>
          <Link to="./blogs/new">
            <button className="btn btn-secondary btn-outline-dark m-3">Write New Blog Entry</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
