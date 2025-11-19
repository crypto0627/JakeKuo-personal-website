import Image from "next/image";
import { cn } from "@/lib/utils";

interface CyberAvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  id?: string;
  className?: string;
  progressValue?: number;
}

export function CyberAvatar({
  src,
  alt,
  size = "md",
  id,
  className,
  progressValue = 75,
}: CyberAvatarProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40 md:w-48 md:h-48",
    lg: "w-56 h-56",
  };

  return (
    <div className={cn("relative", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent animate-pulse-glow"></div>
        <div className="absolute inset-1 rounded-2xl overflow-hidden bg-black">
          <div className="w-full h-full relative">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              fill
              className="w-full h-full object-cover"
              priority={size === "lg"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <div className="h-1 w-full bg-primary/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary animate-pulse"
                  style={{ width: `${progressValue}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {id && (
        <div className="absolute -bottom-2 -right-2 bg-black/80 border border-primary/30 rounded-lg px-2 py-2 text-sm font-bold text-primary">
          <a
            href="https://etherscan.io/address/0x314d66D77AD35e65D1D7CdB5c82F51B2792b91c4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/80 transition-colors"
          >
            ENS: {id}
          </a>
        </div>
      )}
    </div>
  );
}
