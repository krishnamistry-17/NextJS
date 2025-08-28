// app/posts/[id]/page.tsx

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostPageProps = {
  params: {
    id: string;
  };
};

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  console.log("res :", res);

  if (!res.ok) {
    console.error(
      `Failed to fetch post with id ${id}:`,
      res.status,
      res.statusText
    );
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return posts.slice(0, 5).map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const post = await getPost(params.id);
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  } catch (error) {
    console.log("post not found", error);
  }
}
