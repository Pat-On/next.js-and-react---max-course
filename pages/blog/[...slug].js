// [..slug].js it can be called in the way you wish. just ... dots are obligated
import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query); // it will console to us array
  //3000/blog/2021/20/19

  return (
    <div>
      <hi>The Blog Posts</hi>
    </div>
  );
}

export default BlogPostsPage;
