import Image from "next/image";

type Ratio = "video" | "square" | "wide" | "portrait";

const ratioMap: Record<Ratio, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/7]",
  portrait: "aspect-[3/4]",
};

const sizesMap: Record<Ratio, string> = {
  video: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  square: "(max-width: 768px) 100vw, 50vw",
  wide: "(max-width: 1024px) 100vw, 80vw",
  portrait: "(max-width: 768px) 100vw, 50vw",
};

type Props = {
  src: string;
  alt: string;
  ratio?: Ratio;
  className?: string;
  priority?: boolean;
  rounded?: "default" | "none" | "full";
};

export function BrandImage({
  src,
  alt,
  ratio = "video",
  className = "",
  priority = false,
  rounded = "default",
}: Props) {
  const radius =
    rounded === "none" ? "" : rounded === "full" ? "rounded-3xl" : "rounded-2xl";

  return (
    <div
      className={`relative ${ratioMap[ratio]} w-full overflow-hidden ${radius} ring-1 ring-slate-200 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizesMap[ratio]}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
