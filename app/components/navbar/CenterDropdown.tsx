import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CenterDropdownProps {
  label: string;
  options?: object[];
}

const CenterDropdown: React.FC<CenterDropdownProps> = ({ label, options }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative z-[100]  ">
      <div
        onClick={toggleOpen}
        className="
          px-6
          mx-0
          sm:mx-2
          md:mx-6
          border-[1px] 
          w-auto 
          md:w-auto 
          py-2
          rounded-md
          shadow-sm
          hover:shadow-md 
          transition
          cursor-pointer
        "
      >
        {label}
      </div>
      {isOpen && (
        <div
          className={`
            absolute 
            z-20
            rounded-sm
            shadow-md
            w-[108px]
            md:w-[150px]
            bg-white 
            overflow-hidden
            text-sm
            text-center
            md:left-12
            popup-animation
          `}
        >
          <div className="flex flex-col cursor-pointer">
            {options?.map((option: any) => (
              <MenuItem
                label={option.info}
                onClick={() => router.push(`/${option.onClick}`)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CenterDropdown;
