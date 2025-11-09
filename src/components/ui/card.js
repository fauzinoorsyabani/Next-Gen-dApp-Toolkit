import React from "react";
import { cn } from "../../lib/utils";


export function Card({ className, ...props }) {
return <div className={cn("rounded-2xl border border-slate-200/20 bg-white/5 backdrop-blur p-4 shadow-sm dark:border-slate-700/40", className)} {...props} />;
}


export function CardHeader({ className, ...props }) {
return <div className={cn("mb-2", className)} {...props} />;
}


export function CardTitle({ className, ...props }) {
return <h3 className={cn("text-base font-semibold", className)} {...props} />;
}


export function CardContent({ className, ...props }) {
return <div className={cn("text-sm text-slate-300", className)} {...props} />;
}