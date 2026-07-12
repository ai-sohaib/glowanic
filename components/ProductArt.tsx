import type { Product } from "@/data/products";

export function ProductArt({ type, label }: { type: Product["art"]; label: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <div className={`product-art art-${type}`} role="img" aria-label={`${label} illustration`}>
      <svg viewBox="0 0 240 220" aria-hidden="true">
        {type === "serum" && <>
          <path {...common} d="M92 56h56M102 56V30h36v26M84 84h72v103c0 10-8 18-18 18h-36c-10 0-18-8-18-18V84Z" />
          <path {...common} d="M104 112h32M104 136h32" />
          <path {...common} d="M120 30V15" />
        </>}
        {type === "cream" && <>
          <path {...common} d="M64 103h112l-10 84c-1 10-10 18-20 18H94c-10 0-19-8-20-18l-10-84Z" />
          <path {...common} d="M58 103h124V80H58v23ZM76 80l9-34h70l9 34" />
          <path {...common} d="M95 137c16-11 34-11 50 0" />
        </>}
        {type === "spray" && <>
          <path {...common} d="M88 74h55l20 25v93c0 7-6 13-13 13H90c-7 0-13-6-13-13V87c0-7 4-13 11-13Z" />
          <path {...common} d="M100 74V49h57l18 14h-39v11M90 113h57M90 139h57" />
          <path {...common} d="M177 64h27M192 50l14-8M192 77l14 8" />
        </>}
        {type === "mask" && <>
          <path {...common} d="M71 74c22-34 76-45 104-3 20 31 1 105-53 125-49-19-72-86-51-122Z" />
          <path {...common} d="M91 105c10-6 20-6 29 0M133 105c10-6 20-6 29 0M111 148c10 7 20 7 30 0" />
        </>}
        {type === "tool" && <>
          <path {...common} d="M80 35v124c0 24 17 45 40 45s40-21 40-45V35" />
          <path {...common} d="M80 58h31v103c0 10 4 18 9 18s9-8 9-18V58h31" />
          <path {...common} d="M64 35h48M128 35h48" />
        </>}
        {type === "dryer" && <>
          <path {...common} d="M57 97c0-35 31-63 69-63h56v78h-56c-38 0-69-7-69-15Z" />
          <path {...common} d="M115 112l-13 80h39l19-80M183 54h26v38h-26" />
          <path {...common} d="M78 82h45" />
        </>}
        {type === "roller" && <>
          <path {...common} d="M77 48h86v45H77zM120 93v37M120 130c-18 0-28 13-28 28v46h56v-46c0-15-10-28-28-28Z" />
          <path {...common} d="M91 48V32M149 48V32" />
        </>}
        {type === "nails" && <>
          <path {...common} d="M65 62h110v128c0 8-7 15-15 15H80c-8 0-15-7-15-15V62Z" />
          <path {...common} d="M93 62V35h54v27M88 93h64M88 125h64M88 157h64" />
          <circle {...common} cx="103" cy="109" r="5" /><circle {...common} cx="137" cy="141" r="5" />
        </>}
      </svg>
    </div>
  );
}
