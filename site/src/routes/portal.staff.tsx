import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portal/staff")({
  component: () => <Outlet />,
});
