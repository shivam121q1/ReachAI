import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const TextComponent = () => {
  return (
    <div>
      <div className=" p-14 flex flex-col justify-center gap-7 mt-10 ">
        <div>
          <h1 className="text-4xl font-bold">Build Smarter, Launch Faster </h1>
        </div>
        <p className="text-[16px] text-[#333333]">
          Create professional, mobile-friendly websites in minutes with our
          easy-to-use AI website builder. Perfect for businesses, portfolios,
          and online stores.
        </p>

        <div className="flex justify-start">
          <Button
            variant="secondary"
            className="bg-primary text-white  hover:bg-accent hover:border-2"
            asChild
          >
            <Link href={"/setup/person-picker"}>Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextComponent;
