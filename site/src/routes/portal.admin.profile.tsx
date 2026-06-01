import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/components/dashboard/ProfilePage";

export const Route = createFileRoute("/portal/admin/profile")({
  head: () => ({ meta: [{ title: "Profile — Admin Console" }] }),
  component: () => <ProfilePage role="admin" />,
});
