import { SUBJECT_RESULTS } from "@/lib/school-data";

export function ResultTable({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-xs uppercase text-muted-foreground">
          <tr>
            <th className="pb-2 text-left font-medium">Subject</th>
            <th className="text-center">CA</th>
            <th className="text-center">Exam</th>
            <th className="text-center">Total</th>
            <th className="text-center">Grade</th>
            {!compact && <th className="text-left">Remark</th>}
          </tr>
        </thead>
        <tbody>
          {SUBJECT_RESULTS.map((row) => (
            <tr key={row.subject} className="border-t">
              <td className="py-2.5 font-medium">{row.subject}</td>
              <td className="text-center">{row.ca}</td>
              <td className="text-center">{row.exam}</td>
              <td className="text-center font-semibold">{row.total}</td>
              <td className="text-center"><span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-primary">{row.grade}</span></td>
              {!compact && <td className="text-muted-foreground">{row.remark}</td>}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t bg-muted/30">
            <td className="py-3 font-semibold">Overall</td>
            <td className="text-center" colSpan={2}>—</td>
            <td className="text-center font-bold">88%</td>
            <td className="text-center font-bold text-success">A1</td>
            {!compact && <td className="font-semibold">Top 5% of class</td>}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
