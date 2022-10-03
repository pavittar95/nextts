import Image from "next/image";

export default function TestComponents({ bannerImage }) {
  const styles = ["bg-primary", "bg-blue"];
  const convertImage = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div className="my-4 space-y-6 text-center duration-500 bg-white rounded-lg shadow-lg cursor-pointer md:space-x-6 group hover:-translate-y-3 eas-in-out">
      <div className="relative">
        <Image
            src={bannerImage}
        //   src={`data:image/svg+xml;base64,${toBase64(convertImage(700, 475))}`}
          alt="Picture of the author"
          layout="responsive"
          placeholder="blur"
          width={700}
          height={475}
          className="rounded-t"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            convertImage(700, 475)
          )}`}
        />
      </div>
    </div>
  );
}
