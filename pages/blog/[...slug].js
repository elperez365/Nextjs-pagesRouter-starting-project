import { useRouter } from "next/router";
export default function BlogPostPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>Blog Post Page</h1>
    </div>
  );
}
