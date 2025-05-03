import { cn } from "@/utils/style";

interface ProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
  max?: number;
  showPercentage?: boolean;
  height?: "sm" | "md" | "lg";
}

export const Progress = ({
  value,
  className = "",
  indicatorClassName = "",
  max = 100,
  showPercentage = false,
  height = "md",
}: ProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const heightClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={cn("w-full space-y-1", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-gray-700",
          heightClasses[height]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-in-out",
            indicatorClassName
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showPercentage && (
        <div className="flex justify-between text-xs text-gray-400">
          <span>Progresso</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
};
