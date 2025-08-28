import NotFoundPage from "@/app/not-found";
//get staticprops ->using this
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
    <div className="py-10 max-w-lg mx-auto">
      <div className=" p-2 border dark:border-black/20">
        <p>
          UserName: <span className="pl-1">{users.username}</span>
        </p>
        <p>
          Name: <span className="pl-1">{users.name}</span>
        </p>
        <p>
          Email: <span className="pl-1">{users.email}</span>
        </p>
        <p>
          City: <span className="pl-1">{users?.address?.city}</span>
        </p>
        <p>
          Company: <span className="pl-1">{users?.company?.name}</span>
        </p>
      </div>
    </div>
  );
}
