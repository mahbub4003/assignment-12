import { getSingleBlog } from "@/app/libs/getBlogs";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const blog = await getSingleBlog(params.id);

  return (
    <>
      {blog.postDetails ? (
        <div className="my-10">
          <Image
            className="fill m-auto"
            src={blog.postDetails?.img}
            width={1200}
            height={300}
          />
          <h1 className="text-3xl font-bold text-blue-500 text-center my-7">
            {blog.postDetails?.title}
          </h1>
          <p className="text-justify leading-7">{blog.postDetails?.content}</p>
          <div className="text-right my-8">
            <span>
              <Link
                className="text-green-400 hover:text-green-600"
                href={"/blogs"}
              >
                Back to Blogs page -{">"}
              </Link>
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="my-10">
            {" "}
            <h1 className="text-3xl font-bold text-blue-500 text-center my-7">
              Blog Details not found
            </h1>
          </div>
          <div className="text-right my-8">
            <span>
              <Link
                className="text-green-400 hover:text-green-600"
                href={"/blogs"}
              >
                Back to Blogs page -{">"}
              </Link>
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
