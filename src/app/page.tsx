import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://splu40jfrh.ufs.sh/f/87YOaUrmTGXQufhUJegCpyj3BEQTXYqhgd789z1UZVxvrwlL",
  "https://splu40jfrh.ufs.sh/f/87YOaUrmTGXQ5Ez7CxmianZoLImcMQVvqNXs0YDUG9EwhfeJ",
  "https://splu40jfrh.ufs.sh/f/87YOaUrmTGXQTeWfbgOIixKdU20XboWzmaYByc1ShFnJ4HRT",
  "https://splu40jfrh.ufs.sh/f/87YOaUrmTGXQwde3DGEEgPCQlX1S48oWnZde72FLxKBvzGRs",
  "https://splu40jfrh.ufs.sh/f/87YOaUrmTGXQUf8Uy2EN09RqZCAmuMxBaGPpgzyvDsTKL52W",
  "https://splu40jfrh.ufs.sh/f/87YOaUrmTGXQTahwmXkOIixKdU20XboWzmaYByc1ShFnJ4HR",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
