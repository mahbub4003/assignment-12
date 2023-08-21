export const getItems = async () => {
  const res = await fetch(
    "https://basic-blog.teamrabbil.com/api/post-categories"
  );
  try {
    return res.json();
  } catch (e) {
    throw new Error("Something went error");
  }
};
