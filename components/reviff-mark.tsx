import Image from "next/image";

interface ReviffMarkProps {
  variant?: "signature" | "badge";
  size?: number;
}

export function ReviffMark({ variant = "signature", size = 42 }: ReviffMarkProps) {
  const src = variant === "badge" ? "/brand/pdfdiff_app_icon_filled.svg" : "/brand/pdfdiff_app_icon_bars.svg";

  return (
    <Image src={src} alt="" width={size} height={size} aria-hidden="true" />
  );
}
