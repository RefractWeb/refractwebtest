import { redirect, RedirectType } from "next/navigation";

const page = () => {
  redirect("/", RedirectType.replace);
};

export default page;
