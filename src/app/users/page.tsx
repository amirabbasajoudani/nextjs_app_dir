import { getUsers } from "@/api/users";
import { getPosts } from "@/api/posts";
import { Skeleton, SkeletonList } from "@/components/Skeleton";
import { Suspense } from "react";

export default async function UsersPage() {
  console.log("inside usersPage");
  const users = await getUsers();
  const posts = await getPosts();
  return (
    <>
      <h1 className="page-title">Users</h1>
      <ul>
        <Suspense
          fallback={
            <SkeletonList amount={10}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          {users.map((user) => (
            <div>{user.name}</div>
          ))}
        </Suspense>
      </ul>
    </>
  );
}
