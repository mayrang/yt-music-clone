import { sleep } from "@/lib/utils";
import Image from "next/image";
import Category from "./_components/Category";
import PagePadding from "@/components/element/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import UserIcon from "@/components/element/UserIcon";

export default async function Home() {
  const dummyPlaylist1 = [...dummyPlaylistArray];
  const dummyPlaylist2 = [await getPlaylistById(1)];
  const dummyPlaylist3 = [await getPlaylistById(2)];
  const dummyPlaylist4 = [await getPlaylistById(3)];

  return (
    <PagePadding>
      <div className="my-6"></div>
      <Category />
      <div className="my-14"></div>
      <PlaylistCarousel
        title="다시 듣기"
        thumbnail={<UserIcon size="lg" />}
        subTitle="메이랑"
        playlistArray={[...dummyPlaylist1]}
      />
      <div className="my-20"></div>
      <PlaylistCarousel title="케이시 - Full Bloom" playlistArray={[...dummyPlaylist2]} subTitle="새로운 앨범" />
      <div className="my-20"></div>
      <PlaylistCarousel title="커뮤니티 제공" playlistArray={[...dummyPlaylist3]} />
      <div className="my-20"></div>
      <PlaylistCarousel title="커버 및 리믹스" playlistArray={[...dummyPlaylist4]} />
    </PagePadding>
  );
}
