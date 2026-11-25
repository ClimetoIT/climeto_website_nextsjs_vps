/* app/dashboard/page.js — Dashboard temporarily disabled */
import { notFound } from "next/navigation";

export default function DashboardOverview() {
  notFound();
}

// export default function DashboardOverview() {
//     return (
//         <div>
//             <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Dashboard Overview</h1>
//             <p className="text-slate-500">Welcome back! Here is what's happening with your carbon audits today.</p>
//         </div>
//     );
// }
