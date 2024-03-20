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

  return siteConfig.navMenuItems.map((item) => (
    <NavbarItem key={item.label}>
      <Button variant="light" onClick={() => onClick(item.href)}>
        <Typography.Body
          className="xs:text-3xl text-medium  text-indigo-950"
          variant={FontVariant.BOLD}
        >
          {item.label}
        </Typography.Body>
      </Button>
    </NavbarItem>
  ));
};
