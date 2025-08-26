import NotFoundPage from "@/app/not-found";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.slug}`
  );
  const users = await response.json();
  
  if (!users) {
    return (
      <div className="py-6">
        <NotFoundPage />
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className=" p-2">
        <p>
          Name: <span className="pl-1">{users.name}</span>
        </p>
        <p>
          UserName: <span className="pl-1">{users.username}</span>
        </p>
        <p>
          Email: <span className="pl-1">{users.email}</span>
        </p>
      </div>
    </div>
  );
}
