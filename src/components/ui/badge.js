import React from "react";
import { cn } from "../../lib/utils";


export function Badge({ className, children }) {
return (
<span className={cn("inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100", className)}>
{children}
</span>
);
}