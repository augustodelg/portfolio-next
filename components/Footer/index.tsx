import React from "react";
import Link from "next/link";
import Typography from "../Typography";
import packageJson from "../../package.json";

const Footer: React.FC = () => {
  return (
    <footer className="pt-20">
      <div className="mb-10 mx-auto flex flex-col align-middle justify-center text-center">
        <Typography.Body className="text-small text-gray-500">
          Designed and developed by Taca 👨‍💻
        </Typography.Body>

        <Link
          href={"https://github.com/augustodelg/portfolio-next"}
          target="_blank"
          className="text-gray-500"
        >
          Version {packageJson.version}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
