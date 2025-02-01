"use client";
import { useState } from "react";
import { useGlobalData } from "../GlobalDataContext"; // Import the context hook
import QuestionCard from "@/components/pagesComponent/cardComponent/QuestionCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BrandNamePage = () => {
  const { setPageData } = useGlobalData(); // Access global context
  const [brandPageName, setBrandPageName] = useState({ name: "", reference: "" });

  // Function to handle data change
  const handleDataChange = (description: string, value: string) => {
    const updatedData = { ...brandPageName, [description]: value }; // Create a new updated object
    setBrandPageName(updatedData); // Update local state
    setPageData("BrandNamePage", updatedData); // Store in global context
  };

  return (
    <div>
    <div className="flex  flex-col gap-10 mt-10">

      <QuestionCard
        question="What is the name of your business or project?"
        description="name"
        setdata={handleDataChange}
        className="h-10"
      />
      <QuestionCard
        question="Is there a website you’d like to use as a reference?"
        description="reference"
        placeholder="www.example.com"
        setdata={handleDataChange}
      />

      <div className="flex justify-end">
        <Button variant="secondary" className="bg-primary text-white  hover:bg-accent hover:border-2" asChild>
          <Link href="/setup/domain">Next</Link>
        </Button>
      </div>
    </div>
    </div>
  );
};

export default BrandNamePage;
