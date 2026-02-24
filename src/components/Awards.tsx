import Image from "next/image";

const Awards = () => {
  return (
    <div className="fixed bottom-20 right-0 bg-background p-2 h-28 rounded z-20">
      <Image src={"/cssda.svg"} alt="" width={40} height={40} />
    </div>
  );
};

export default Awards;
