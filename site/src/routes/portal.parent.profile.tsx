import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/components/dashboard/ProfilePage";

export const Route = createFileRoute("/portal/parent/profile")({
  head: () => ({ meta: [{ title: "Profile — Parent Portal" }] }),
  component: () => <ProfilePage role="parent" />,
});
