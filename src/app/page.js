import UsersPage from "../pages/UsersPage";
import Hero from "../pages/HeroPage";
import { Navbar } from "@/components";
import UserPosts from "@/pages/UserPosts";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <UsersPage />
    <UserPosts />
    </>
  );
}
