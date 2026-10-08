import { Frame } from "@/assets";
import type { ServiceCardProps } from "@/types";

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="group relative isolate overflow-hidden w-full max-w-83.75 bg-base/10 border-2 border-base/20 p-6 rounded-3xl cursor-pointer">
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 bottom-0 right-0 size-48 origin-bottom-right scale-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 bg-[radial-gradient(circle_192px_at_0_0,transparent_99%,var(--color-primary)_100%)]"
      />
      <div className="group group-hover:bg-primary transition-colors duration-300 ease-in-out w-21.5 h-21.5 flex justify-center items-center rounded-3xl bg-base/10">
        <img src={Frame} alt="" />
      </div>
      <h3 className="font-comfortaa-bold text-[clamp(18px,4.5vw,20px)] text-base mt-10 mb-4 leading-6">
        {props.title}
      </h3>
      {props.variant === "glass" ? (
        <p className="font-poppins-regular text-[16px] text-secondary leading-6">
          {props.description}
        </p>
      ) : (
        <ul className="list-disc flex flex-col justify-start items-start pl-5 gap-y-2 font-poppins-regular text-[16px] text-secondary leading-6">
          {props.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
