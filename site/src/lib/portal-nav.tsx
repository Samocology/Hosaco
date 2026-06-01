import {
  LayoutDashboard, BookOpen, CalendarCheck, MessageSquare, CreditCard, Bell,
  ClipboardList, Award, Users, GraduationCap, Megaphone, Settings,
  BarChart3, Wallet, FileText, UserCircle, MonitorCheck, Video, CheckSquare,
} from "lucide-react";

export type Role = "parent" | "student" | "staff" | "admin";

export interface PortalSection {
  slug: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const ROLE_META: Record<Role, { name: string; title: string }> = {
  parent:  { name: "Adaeze Okafor",   title: "Parent" },
  student: { name: "Chidera Okafor",  title: "Student" },
  staff:   { name: "Dr. Funke Adeola", title: "Administrator" },
  admin:   { name: "Mr. Tunde Bakare", title: "Super Admin" },
};

export const PORTAL_NAV: Record<Role, PortalSection[]> = {
  parent: [
    { slug: "",              label: "Overview",      icon: LayoutDashboard },
    { slug: "academics",     label: "Academics",     icon: BookOpen },
    { slug: "attendance",    label: "Attendance",    icon: CalendarCheck },
    { slug: "messages",      label: "Messages",      icon: MessageSquare },
    { slug: "payments",      label: "Payments",      icon: CreditCard },
    { slug: "announcements", label: "Announcements", icon: Bell },
    { slug: "profile",       label: "Profile",       icon: UserCircle },
  ],
  student: [
    { slug: "",              label: "Overview",      icon: LayoutDashboard },
    { slug: "assignments",   label: "Assignments",   icon: ClipboardList },
    { slug: "results",       label: "Results",       icon: BookOpen },
    { slug: "achievements",  label: "Achievements",  icon: Award },
    { slug: "notifications", label: "Notifications", icon: Bell },
    { slug: "cbt",           label: "CBT Practice",  icon: MonitorCheck },
    { slug: "profile",       label: "Profile",       icon: UserCircle },
  ],
  staff: [
    { slug: "",              label: "Overview",      icon: LayoutDashboard },
    { slug: "students",      label: "Students",      icon: Users },
    { slug: "attendance",    label: "Attendance",    icon: CalendarCheck },
    { slug: "tutorials",     label: "Tutorials",     icon: Video },
    { slug: "assessments",   label: "Assessments",   icon: CheckSquare },
    { slug: "payments",      label: "Payments",      icon: CreditCard },
    { slug: "announcements", label: "Announcements", icon: Megaphone },
    { slug: "settings",      label: "Settings",      icon: Settings },
    { slug: "profile",       label: "Profile",       icon: UserCircle },
  ],
  admin: [
    { slug: "",         label: "Overview", icon: LayoutDashboard },
    { slug: "users",    label: "Users",    icon: Users },
    { slug: "classes",  label: "Classes",  icon: GraduationCap },
    { slug: "finance",  label: "Finance",  icon: Wallet },
    { slug: "reports",  label: "Reports",  icon: BarChart3 },
    { slug: "cbt",      label: "CBT",      icon: MonitorCheck },
    { slug: "audit",    label: "Audit logs", icon: FileText },
    { slug: "logs",     label: "Logs", icon: FileText },
    { slug: "settings", label: "Settings", icon: Settings },
    { slug: "profile",  label: "Profile", icon: UserCircle },
  ],
};

export function buildNav(role: Role) {
  return PORTAL_NAV[role].map((s) => ({
    to: s.slug ? `/portal/${role}/${s.slug}` : `/portal/${role}`,
    label: s.label,
    icon: s.icon,
  }));
}
