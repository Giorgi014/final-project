type FooterDividerProps = {
  variant: "start" | "end";
};

export const FooterDivider = ({ variant }: FooterDividerProps) => {
  return (
    <div
      className={`w-full h-px ${
        variant === "start"
          ? "bg-[linear-gradient(to_right,#1f2937_0%,#d1d5db_33%,#f9fafb_72%,#f9fafb_100%)]"
          : "bg-[linear-gradient(to_right,#f9fafb_0%,#f9fafb_33%,#d1d5db_72%,#1f2937_100%)]"
      } mask-[repeating-linear-gradient(to_right,#000_0_8px,transparent_8px_16px)]`}
    />
  );
};
