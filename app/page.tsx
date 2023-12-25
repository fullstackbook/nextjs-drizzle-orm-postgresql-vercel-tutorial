import { getUsers, getUsers2 } from "@/lib/db";

export default async function Home() {
  const data = await getUsers();
  const data2 = await getUsers2();

  return (
    <div>
      <div>sql-like: {JSON.stringify(data)}</div>
      <div>relational: {JSON.stringify(data2)}</div>
    </div>
  );
}
