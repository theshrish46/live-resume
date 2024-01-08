"use client";

import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};
const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div className={cn(className, "max-w-screen-xl mx-auto px-2 md:px-6")}>
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
