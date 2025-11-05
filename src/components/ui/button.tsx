import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition",
        className
      )}
    >
      {children}
    </button>
  );
}
