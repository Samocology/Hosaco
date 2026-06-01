import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, CheckCircle2, ChevronRight, MonitorCheck } from "lucide-react";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { StatCard } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const banks = {
  jamb: { label: "JAMB", subject: "Use of English", duration: "45 min" },
  waec: { label: "WAEC", subject: "Mathematics", duration: "60 min" },
  neco: { label: "NECO", subject: "Biology", duration: "50 min" },
  gce: { label: "GCE", subject: "Chemistry", duration: "50 min" },
  bece: { label: "BECE", subject: "Basic Science", duration: "40 min" },
};

const questions = [
  { q: "If 3x + 7 = 25, what is x?", options: ["4", "5", "6", "7"], answer: "6" },
  { q: "Choose the correctly punctuated sentence.", options: ["John said I am ready", "John said, I am ready.", "John said, \"I am ready.\"", "John, said I am ready"], answer: "John said, \"I am ready.\"" },
  { q: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Mitochondrion", "Ribosome", "Golgi body"], answer: "Mitochondrion" },
  { q: "The chemical symbol for sodium is", options: ["S", "So", "Na", "N"], answer: "Na" },
  { q: "Lagos is located in which geopolitical zone?", options: ["North Central", "South East", "South South", "South West"], answer: "South West" },
];

export const Route = createFileRoute("/portal/student/cbt")({
  head: () => ({ meta: [{ title: "CBT Practice — Student Portal" }] }),
  component: CbtPractice,
});

function CbtPractice() {
  const [exam, setExam] = useState<keyof typeof banks>("jamb");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => questions.filter((question, index) => answers[index] === question.answer).length, [answers]);
  const progress = Math.round((Object.keys(answers).length / questions.length) * 100);
  const question = questions[current];

  return (
    <PortalShell role="student" title="CBT Practice" subtitle="Practice JAMB, WAEC, NECO, GCE and BECE with timed exam mode.">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Question bank" value={banks[exam].label} hint={banks[exam].subject} />
        <StatCard label="Answered" value={`${Object.keys(answers).length}/${questions.length}`} hint={`${progress}% complete`} />
        <StatCard label="Timer" value="38:24" hint={banks[exam].duration} accent="text-warning" />
      </div>

      <Tabs value={exam} onValueChange={(value) => { setExam(value as keyof typeof banks); setCurrent(0); setAnswers({}); setSubmitted(false); }} className="mt-6">
        <TabsList className="h-auto flex-wrap justify-start">
          {Object.entries(banks).map(([key, bank]) => <TabsTrigger key={key} value={key}>{bank.label}</TabsTrigger>)}
        </TabsList>
        {Object.keys(banks).map((key) => (
          <TabsContent key={key} value={key} className="mt-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
              <section className="rounded-2xl border bg-card p-6 shadow-card">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Question {current + 1} of {questions.length}</div>
                    <h2 className="mt-1 font-display text-xl font-bold">{question.q}</h2>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
                    <Clock className="h-4 w-4" /> 38:24
                  </div>
                </div>
                <div className="space-y-3">
                  {question.options.map((option) => {
                    const selected = answers[current] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => setAnswers((prev) => ({ ...prev, [current]: option }))}
                        className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${selected ? "border-primary bg-accent text-accent-foreground shadow-card" : "bg-background hover:bg-muted"}`}
                      >
                        <span className="font-medium">{option}</span>
                        {selected && <CheckCircle2 className="h-5 w-5 text-primary" />}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-6 flex flex-wrap justify-between gap-3">
                  <Button variant="outline" disabled={current === 0} onClick={() => setCurrent((value) => value - 1)}>Previous</Button>
                  {current < questions.length - 1 ? (
                    <Button className="bg-gradient-primary text-primary-foreground" onClick={() => setCurrent((value) => value + 1)}>Next <ChevronRight className="ml-1 h-4 w-4" /></Button>
                  ) : (
                    <Button className="bg-gradient-primary text-primary-foreground" onClick={() => setSubmitted(true)}>Submit exam</Button>
                  )}
                </div>
              </section>

              <aside className="space-y-4">
                <div className="rounded-2xl border bg-card p-5 shadow-card">
                  <h3 className="mb-3 flex items-center gap-2 font-semibold"><MonitorCheck className="h-4 w-4 text-primary" /> Live session</h3>
                  <Progress value={progress} className="h-2" />
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {questions.map((_, index) => (
                      <button key={index} onClick={() => setCurrent(index)} className={`aspect-square rounded-lg text-sm font-semibold ${current === index ? "bg-primary text-primary-foreground" : answers[index] ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}>{index + 1}</button>
                    ))}
                  </div>
                </div>
                {submitted && (
                  <div className="rounded-2xl border bg-gradient-soft p-5 shadow-card">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Practice submitted</div>
                    <div className="mt-2 font-display text-4xl font-bold">{score}/{questions.length}</div>
                    <p className="mt-2 text-sm text-muted-foreground">Review missed questions and retake another bank instantly.</p>
                  </div>
                )}
              </aside>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </PortalShell>
  );
}
