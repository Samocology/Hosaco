import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, TrendingUp, AlertTriangle, BookOpen, Star, Award, ArrowUp, ArrowDown, Target, Zap } from "lucide-react";

// Performance rating utility
const getPerformanceRating = (score: number) => {
  if (score >= 90) return { label: "Outstanding", color: "text-emerald-500", bg: "bg-emerald-500/10", icon: "⭐⭐⭐" };
  if (score >= 80) return { label: "Excellent", color: "text-blue-500", bg: "bg-blue-500/10", icon: "⭐⭐" };
  if (score >= 70) return { label: "Good", color: "text-amber-500", bg: "bg-amber-500/10", icon: "⭐" };
  if (score >= 60) return { label: "Satisfactory", color: "text-orange-500", bg: "bg-orange-500/10", icon: "◆" };
  return { label: "Needs Improvement", color: "text-red-500", bg: "bg-red-500/10", icon: "◇" };
};

// Simulated multi-child data
const children = [
  {
    id: "1",
    name: "Chidera",
    grade: "SS2",
    overallAvg: 88,
    classRank: "Top 5%",
    trend: 3,
    bestSubject: { name: "Biology", score: 92, trend: 5 },
    needsFocus: { name: "Physics", score: 78, trend: -2 },
    strengths: 4,
    focusAreas: 2,
    subjects: [
      { name: "Mathematics", score: 91, teacher: "Mr. Bello", color: "from-blue-500 to-cyan-400", trend: 4 },
      { name: "English Language", score: 86, teacher: "Mrs. Adeyemi", color: "from-violet-500 to-purple-400", trend: 2 },
      { name: "Physics", score: 78, teacher: "Mr. Eze", color: "from-amber-500 to-orange-400", trend: -2 },
      { name: "Chemistry", score: 84, teacher: "Mrs. Okoye", color: "from-emerald-500 to-green-400", trend: 1 },
      { name: "Biology", score: 92, teacher: "Dr. Adamu", color: "from-rose-500 to-pink-400", trend: 5 },
      { name: "Literature", score: 80, teacher: "Mr. Johnson", color: "from-indigo-500 to-blue-400", trend: 0 },
    ],
  },
  {
    id: "2",
    name: "Emeka",
    grade: "JSS3",
    overallAvg: 76,
    classRank: "Top 25%",
    trend: -1,
    bestSubject: { name: "Mathematics", score: 89, trend: 3 },
    needsFocus: { name: "English", score: 65, trend: -3 },
    strengths: 2,
    focusAreas: 2,
    subjects: [
      { name: "Mathematics", score: 89, teacher: "Mr. Bello", color: "from-blue-500 to-cyan-400", trend: 3 },
      { name: "English Language", score: 65, teacher: "Mrs. Adeyemi", color: "from-violet-500 to-purple-400", trend: -3 },
      { name: "Basic Science", score: 78, teacher: "Mr. Eze", color: "from-emerald-500 to-green-400", trend: 1 },
      { name: "Social Studies", score: 72, teacher: "Mrs. Okonkwo", color: "from-amber-500 to-orange-400", trend: 0 },
    ],
  },
];

const SubjectProgressBar = ({ score, color, trend }: { score: number; color: string; trend?: number }) => (
  <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-muted/50 backdrop-blur-sm">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${score}%` }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className={cn("h-full rounded-full bg-gradient-to-r", color)}
    />
    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
  </div>
);

export const Route = createFileRoute("/portal/parent/academics")({
  head: () => ({ meta: [{ title: "Academics — Parent Portal" }] }),
  component: AcademicsPage,
});

function AcademicsPage() {
  const [selectedChildId, setSelectedChildId] = useState(children[0].id);
  const child = children.find((c) => c.id === selectedChildId) ?? children[0];
  const performanceRating = getPerformanceRating(child.overallAvg);

  return (
    <PortalShell
      role="parent"
      title="Academics"
      subtitle="Comprehensive academic performance tracking and insights."
    >
      {/* Child Selector */}
      {children.length > 1 && (
        <div className="mb-8">
          <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Select Child
          </label>
          <Select value={selectedChildId} onValueChange={setSelectedChildId}>
            <SelectTrigger className="w-full sm:w-72 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-md border border-white/10 hover:border-white/20 hover:from-card/60 transition-all duration-300 shadow-lg shadow-black/20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {children.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  <span className="font-medium">{c.name}</span>
                  <span className="mx-2 text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{c.grade}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={child.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {/* Performance Header */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-card/60 via-card/40 to-card/20 backdrop-blur-xl shadow-2xl shadow-black/10 p-8">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Score */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="md:col-span-1 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-white/10"
                >
                  <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-xl" />
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-white/20">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-blue-400">
                        {child.overallAvg}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Overall Average</p>
                  <div className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5",
                    performanceRating.bg,
                    performanceRating.color
                  )}>
                    {performanceRating.label}
                  </div>
                </motion.div>

                {/* Key Metrics */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="md:col-span-2 grid grid-cols-2 gap-4"
                >
                  {/* Class Rank */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-4 h-4 text-blue-400" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Class Rank</p>
                    </div>
                    <p className="text-2xl font-bold text-blue-300 mb-1">{child.classRank}</p>
                    <p className="text-xs text-muted-foreground">Excellent positioning</p>
                  </div>

                  {/* Trend */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      {child.trend >= 0 ? (
                        <ArrowUp className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-amber-400" />
                      )}
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Trend</p>
                    </div>
                    <p className={cn(
                      "text-2xl font-bold mb-1",
                      child.trend >= 0 ? "text-emerald-300" : "text-amber-300"
                    )}>
                      {child.trend >= 0 ? "+" : ""}{child.trend}%
                    </p>
                    <p className="text-xs text-muted-foreground">vs. last period</p>
                  </div>

                  {/* Strength Count */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 hover:border-amber-500/40 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-amber-400" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Strengths</p>
                    </div>
                    <p className="text-2xl font-bold text-amber-300 mb-1">{child.strengths}</p>
                    <p className="text-xs text-muted-foreground">Subject mastery</p>
                  </div>

                  {/* Focus Areas */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 hover:border-rose-500/40 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-rose-400" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Focus Areas</p>
                    </div>
                    <p className="text-2xl font-bold text-rose-300 mb-1">{child.focusAreas}</p>
                    <p className="text-xs text-muted-foreground">Need improvement</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Best Subject */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-card/40 to-card/20 backdrop-blur-sm shadow-lg shadow-emerald-500/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Best Subject</p>
                  <p className="text-lg font-bold text-emerald-300">{child.bestSubject.name}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Outstanding performance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-emerald-400">{child.bestSubject.score}%</span>
                {child.bestSubject.trend !== undefined && (
                  <span className="flex items-center gap-1 text-sm font-semibold text-emerald-400">
                    <ArrowUp className="w-3 h-3" />
                    +{child.bestSubject.trend}%
                  </span>
                )}
              </div>
            </motion.div>

            {/* Focus Subject */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-card/40 to-card/20 backdrop-blur-sm shadow-lg shadow-amber-500/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Focus Area</p>
                  <p className="text-lg font-bold text-amber-300">{child.needsFocus.name}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Area for improvement & growth</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-amber-400">{child.needsFocus.score}%</span>
                {child.needsFocus.trend !== undefined && (
                  <span className="flex items-center gap-1 text-sm font-semibold text-amber-400">
                    {child.needsFocus.trend < 0 ? (
                      <>
                        <ArrowDown className="w-3 h-3" />
                        {child.needsFocus.trend}%
                      </>
                    ) : (
                      <>
                        <ArrowUp className="w-3 h-3" />
                        +{child.needsFocus.trend}%
                      </>
                    )}
                  </span>
                )}
              </div>
            </motion.div>
          </div>

          {/* Subject Breakdown */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-card/50 via-card/30 to-card/20 backdrop-blur-xl shadow-2xl shadow-black/10">
            {/* Header */}
            <div className="border-b border-white/5 bg-gradient-to-r from-card/90 via-card/70 to-card/60 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-primary/30 shadow-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl tracking-tight">
                    Subject Performance
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Detailed breakdown of {child.name}'s scores and progress
                  </p>
                </div>
              </div>
            </div>

            {/* Subject List */}
            <ul className="divide-y divide-white/5 p-8 space-y-1">
              {child.subjects.map((subject, index) => {
                const rating = getPerformanceRating(subject.score);
                return (
                  <motion.li
                    key={subject.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                    className="group hover:bg-white/3 transition-all duration-300 rounded-lg p-4 -mx-4 px-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "h-3 w-3 rounded-full bg-gradient-to-r",
                            subject.color
                          )}
                        />
                        <div className="flex flex-col">
                          <span className="font-semibold text-base group-hover:text-foreground transition-colors">
                            {subject.name}
                          </span>
                          <span className="text-xs text-muted-foreground/70">
                            {subject.teacher}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-end gap-1">
                          <span className={cn(
                            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold backdrop-blur-sm",
                            rating.bg,
                            rating.color
                          )}>
                            {subject.score}%
                          </span>
                          {subject.trend !== undefined && (
                            <span className={cn(
                              "flex items-center gap-0.5 text-xs font-semibold",
                              subject.trend >= 0 ? "text-emerald-400" : "text-amber-400"
                            )}>
                              {subject.trend >= 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                              {Math.abs(subject.trend)}%
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <SubjectProgressBar
                      score={subject.score}
                      color={subject.color}
                      trend={subject.trend}
                    />
                  </motion.li>
                );
              })}
            </ul>

            {/* Footer Stats */}
            <div className="border-t border-white/5 bg-gradient-to-r from-card/40 via-card/30 to-card/40 px-8 py-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Last updated: Today, 10:45 AM</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Average: <span className="font-semibold text-foreground">{Math.round(child.subjects.reduce((sum, s) => sum + s.score, 0) / child.subjects.length)}%</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </PortalShell>
  );
}