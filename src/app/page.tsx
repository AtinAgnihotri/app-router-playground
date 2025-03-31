import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

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

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });

  return (
    <main className="">
      <div className="mx-4 flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col justify-between">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="rounded-lg shadow-lg"
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
