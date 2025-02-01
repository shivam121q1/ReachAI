"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useGlobalData } from "../GlobalDataContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { furtherKeywords } from "@/data/domain";
import { getFurtherKeys } from "@/utils/function";

function Page() {
  const navigate = useRouter();
  const { pageData, setPageData } = useGlobalData();
  const [loading, setLoading] = useState(false);
  const [domain,setDomain] = useState("");
  const [index,setIndex] = useState(0);

  useEffect(()=>{
       setDomain(pageData?.DomainPicker?.selectedDomain)
       const i = getFurtherKeys(domain);
       if(i){
         setIndex(i);
       }
       
  },[])

  // Handle input changes and update global state
  const handleInputChange = (field: string, value: string) => {
    setPageData("ContactInfo", {
      ...pageData.ContactInfo,
      [field]: value,
    });
  };

  // Format the data for the API requests
  const convertToRequiredFormat = (data: Record<string, any>) => {
    return {
      brandName: pageData?.BrandNamePage?.name || "Default Brand Name",
      websiteUrl: data.BrandNamePage?.reference || "",
      logo_url: pageData?.ChooseColorPage?.logoUrl || "",
      relatedTags: data.BrandStory?.keywords || [],
      oneLiner: data.BrandStory?.description || "",
      contact_email: pageData?.ContactInfo?.email || "default@example.com",
      contact_phone: pageData?.ContactInfo?.phone || "+0000000000",
      domain: pageData?.DomainPicker?.selectedDomain || "default.com",
    };
  };

  const handleApi = async () => {
    setLoading(true);
    
    try {
      const formattedData = convertToRequiredFormat(pageData);
    
      console.log(formattedData)
      const response = await axios.post(
        "https://aibuilder-backend.whereuelevate.com/generate-brand-description",
        formattedData
      );
      console.log(response.data);
      const responseOut = response.data
      responseOut.logoURL = formattedData.logo_url;
      responseOut.contactInfoEmail = formattedData.contact_email;
      responseOut.contactInfoPhone = formattedData.contact_phone;
      responseOut.fontColor = pageData?.ChooseColorPage?.fontColor
      responseOut.plans = pageData?.DomainPicker?.plans;
      setDomain(formattedData.domain);
      const formatData = {
        brandName: formattedData.brandName,
        input: JSON.stringify(formattedData),
        output: JSON.stringify(responseOut),
        
      };

      const res = await anotherApi(formatData);
      console.log(res);
    } catch (error) {
      console.error("Error calling API:", error);
    } finally {
      setLoading(false);
    }
  };

  const anotherApi = async (data: any) => {
    try {
      const response = await axios.post(
        "https://api-aibuilder.whereuelevate.com/wuelev8/api/v1/aibuilder",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response)
      if(domain==="Business"){

        navigate.push(
          `https://business-template-peach.vercel.app/?preview=true&id=${response.data.result.buildId}`
        );
      }else if(domain ==="Influencer"){
        navigate.push(
          `https://design-iota-three.vercel.app/?preview=true&id=${response.data.result.buildId}`
        );
      }else if(domain ==="Artist"){
        navigate.push(
          `https://artist-lake.vercel.app/?preview=true&id=${response.data.result.buildId}`
        );
      }
    } catch (error) {
      console.error("Error in second API call:", error);
    }
  };

  return (
    <div className="relative w-[400px] mt-[40px]">
      <div className={`flex flex-col gap-6 transition-all duration-300`}>
        <Label className="text-xl">How can your visitors reach you?</Label>
        <div className="flex flex-col gap-4">
          <div>
            <Label className="text-lg">Email</Label>
            <Input
              id="email"
              className="mt-2 border-b-2 border-t-0 border-x-0 border-b-gray-500 focus-visible:border-black"
              value={pageData.ContactInfo?.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
          <div>
            <Label className="text-lg">Phone</Label>
            <Input
              id="phone"
              className="mt-2 border-b-2 border-t-0 border-x-0 border-b-gray-500 focus-visible:border-black"
              value={pageData.ContactInfo?.phone || ""}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 justify-end mt-6">
          <Button
            asChild
            variant="secondary"
            className="bg-white text-primary border-2 border-primary"
          >
            <Link href="/setup/choose-color">Back</Link>
          </Button>
          <Button
            variant="secondary"
            className="bg-primary text-white hover:bg-accent hover:border-2 flex items-center gap-2"
            onClick={handleApi}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <div>Generate</div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;