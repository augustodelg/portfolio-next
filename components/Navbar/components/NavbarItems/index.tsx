import Typography from "@/components/Typography";
import { FontVariant } from "@/components/Typography/types";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NavbarItemsProps } from "./types";

export const NavbarItems = ({ onClick: onClickCallback }: NavbarItemsProps) => {
  const router = useRouter();
  const onClick = (href: string) => {
    router.push(href);
    onClickCallback?.();
  };

  return (
    <>
      {siteConfig.navMenuItems.map((item) => (
        <NavbarItem key={item.label}>
          <Button
            className="hover:scale-110"
            variant="light"
            onClick={() => onClick(item.href)}
          >
            <Typography.Body
              className="text-4xl sm:text-medium  text-indigo-950 dark:text-slate-200 hover:text-indigo-950 dark:hover:text-slate-200"
              variant={FontVariant.BOLD}
            >
              {item.label}
            </Typography.Body>
          </Button>
        </NavbarItem>
      ))}
    </>
  );
};
