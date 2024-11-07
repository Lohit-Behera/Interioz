import "./hoverButton.css";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function HoverButton({
  text,
  className,
  href,
}: {
  text: string;
  className?: string;
  href: string;
}) {
  return (
    <Link
      className={cn(
        "btn hover:text-white duration-300 flex justify-center items-center group",
        className
      )}
      href={href}
    >
      <p>{text}</p>
      <ArrowUpRight className="group-hover:ml-2 duration-300 " />
    </Link>
  );
}

export default HoverButton;
