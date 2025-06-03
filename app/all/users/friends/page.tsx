async function makePostRequest() {
  const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Krishna Mistry" }),
  });
  console.log("res :", res);
  const data = await res.json();
  return { data };
}

export default async function Friends() {
  const { data } = await makePostRequest();
  return <h1>Hello Welcome! {data.message}</h1>;
}
