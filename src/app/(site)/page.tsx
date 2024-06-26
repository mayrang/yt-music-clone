import { sleep } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  throw new Error("my error");
  // await sleep(5000);

  return <div>Home</div>;
}
