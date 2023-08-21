import Link from "next/link";

const HeaderFooter = ({ children }) => {
  return (
    <div className="w-[90%] m-auto mt-6">
      <div className=" flex bg-gray-300 p-2 rounded">
        <div className="flex-1">
          <Link href={"/"}>
            <span className="text-red-900 font-bold text-3xl">B</span>
            <span>LOGs</span>
          </Link>
        </div>

        <div className="flex-1 space-x-11 pt-2">
          <Link
            className="hover:text-green-800  duration-300 text-green-600"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:text-green-800  duration-300 text-green-600"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="hover:text-green-800  duration-300 text-green-600"
            href={"/blogs"}
          >
            Blogs
          </Link>
          <Link
            className="hover:text-green-800  duration-300 text-green-600"
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>
      <div>{children}</div>
      <div className=" flex bg-gray-400 p-2 rounded mb-11">
        <span className="m-auto flex-1 text-green-600">Footer</span>
        <p>Copyright © 2023 Tailwind Labs Inc.</p>
      </div>
    </div>
  );
};

export default HeaderFooter;
