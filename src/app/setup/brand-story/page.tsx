"use client";
import QuestionCard from "@/components/pagesComponent/cardComponent/QuestionCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React, { useState, useEffect } from "react";
import { furtherKeywords, getKeywordsByType } from "@/data/domain";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useGlobalData } from "../GlobalDataContext"; // Import the global context hook
import { useRouter } from "next/navigation";

const BrandStory = () => {
  const navigate = useRouter();
  const { pageData, setPageData } = useGlobalData();
  const [keywords,setKeywords] = useState<string[]>([]) // Access global context functions
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [brandDescription, setBrandDescription] = useState("");

  // Initialize local state from global context
  useEffect(() => {
    const type= pageData?.DomainPicker?.selectedDomain;
    if(!type){
      navigate.push("/setup/domain")
    }
    setKeywords(getKeywordsByType(type));
    const savedData = pageData.BrandStory || {};
    setSelectedBadges(savedData.keywords || []);
    setBrandDescription(savedData.description || "");
  }, [pageData]);

  // Consolidated function to update global context
  const updateGlobalContext = (keywords: string[], description: string) => {
    setPageData("BrandStory", { keywords, description });
  };

  // Handle badge removal
  const handleRemoveBadge = (index: number) => {
    const updatedBadges = selectedBadges.filter((_, i) => i !== index);
    setSelectedBadges(updatedBadges);
    updateGlobalContext(updatedBadges, brandDescription);
  };

  // Handle badge addition
  const handleBadgeClick = (badge: string) => {
    if (!selectedBadges.includes(badge)) {
      const updatedBadges = [...selectedBadges, badge];
      setSelectedBadges(updatedBadges);
      updateGlobalContext(updatedBadges, brandDescription);
    }
  };

  // Handle description updates from QuestionCard
  const handleBrandDescription = (description: string) => {
    setBrandDescription(description);
    updateGlobalContext(selectedBadges, description);
  };

  return (
    <div className="max-w-maxContent w-11/12 mx-auto">
      <div className="py-8 flex justify-center flex-col gap-6 border-b-0">
        <QuestionCard
          question="Tell us a bit about your brand or what you want to represent."
          className="h-20"
          setdata={(name: string, value: string) => handleBrandDescription(value)}
          description="description"
        />
        <div>
          <Label className="text-2xl">What Keywords would you like to associate with your website?</Label>
          <div className="flex flex-wrap gap-2">
            {selectedBadges.map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-2 text-black text-center" // Selected badges are blue
              >
                {badge}
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 text-black"
                  onClick={() => handleRemoveBadge(index)}
                >
                  ✕
                </Button>
              </Badge>
            ))}
          </div>
        </div>

        <div className="p-3 bg-[#F2F2F2] border rounded-sm flex flex-wrap gap-2">
          {keywords.map((badge) => (
            <Badge
              key={badge}
              variant="secondary"
              className={`text-md flex px-5 rounded-md py-2 items-center gap-2 cursor-pointer border-primary ${
                selectedBadges.includes(badge) ? "bg-darkGray text-white" : "bg-white text-black"
              }`}
              onClick={() => handleBadgeClick(badge)}
            >
              {badge}
              <Plus size={15} />
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 justify-end">
          <Button
            asChild
            variant="secondary"
            className="bg-white text-primary border-2 border-primary"
          >
            <Link href="/setup/domain">Back</Link>
          </Button>
          <Button
            variant="secondary"
            className="bg-primary text-white hover:bg-accent  hover:border-2"
            asChild
          >
            <Link href={"/setup/choose-color"}>Next</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
