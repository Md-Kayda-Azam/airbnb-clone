"use client";
interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

import { useRouter } from "next/navigation";
import Heading from "./Navbar/Heading";
import Button from "./Button";

const EmptyState: React.FC<EmptyState> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subTitle={subtitle} center />
      <div className="w-48  mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClcik={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
