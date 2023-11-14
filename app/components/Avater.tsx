"use client";
import Image from "next/image";

interface AvaterProps {
  src: string | null | undefined;
}

const Avater: React.FC<AvaterProps> = ({ src }) => {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      alt="avater"
      className="rounded-full"
      width={30}
      height={30}
    />
  );
};

export default Avater;
