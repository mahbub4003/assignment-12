export const getBlogs = async () => {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
  try {
    return res.json();
  } catch (e) {
    throw new Error("Something went error");
  }
};

export const getSingleBlog = async (id) => {
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${id}`
  );
  try {
    return res.json();
  } catch (e) {
    throw new Error("Something went error");
  }
};

export const getBlogsWithCatagory = async (id) => {
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-list/${id}`
  );
  try {
    return res.json();
  } catch (e) {
    throw new Error("Something went error");
  }
};
