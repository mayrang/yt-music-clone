import { sleep } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  await sleep(1000);

  return (
    <div>
      Home
      <div className="bg-neutral-300 h-[600px] w-full">HOmepage</div>
      <div className="bg-neutral-300 h-[600px] w-full">HOmepage</div>
      <div className="bg-neutral-300 h-[600px] w-full">HOmepage</div>
      <div className="bg-neutral-300 h-[600px] w-full">HOmepage</div>
      <div className="bg-neutral-300 h-[600px] w-full">HOmepage</div>
      <div className="bg-neutral-300 h-[600px] w-full">HOmepage</div>
    </div>
  );
}
