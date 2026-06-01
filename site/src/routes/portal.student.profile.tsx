import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/components/dashboard/ProfilePage";

export const Route = createFileRoute("/portal/student/profile")({
  head: () => ({ meta: [{ title: "Profile — Student Portal" }] }),
  component: () => <ProfilePage role="student" />,
});
