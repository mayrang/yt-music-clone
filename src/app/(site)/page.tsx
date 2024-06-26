import { sleep } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  await sleep(1000);

  return <div>Home</div>;
}
