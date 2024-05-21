import { Spinner } from "@nextui-org/spinner";
export default function Loading() {
  return (
    <div className="w-auto h-screen content-center ">
      <Spinner size="lg" className="mx-auto my-auto" />
    </div>
  );
}
