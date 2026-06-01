import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/components/dashboard/ProfilePage";

export const Route = createFileRoute("/portal/staff/profile")({
  head: () => ({ meta: [{ title: "Profile — Staff Dashboard" }] }),
  component: () => <ProfilePage role="staff" />,
});
