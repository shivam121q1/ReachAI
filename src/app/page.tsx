import Image from "next/image";
import QuestionCard from "../components/pagesComponent/cardComponent/QuestionCard";
import InputWithBadge from "@/components/pagesComponent/badgeSelector/InputWithBadge";
import Link from "next/link";
import TextComponent from "./dashboard/TextComponent";
import ImageComponent from "./dashboard/ImageComponent";
import Background from "./Background.jpg"
export default function Home() {
  return (
    <div style={{
      backgroundImage:
        'url("https://res.cloudinary.com/drcoe5pnl/image/upload/v1738260071/nextjs_uploads/xrqnsdzigysqjpfyx3ye.jpg")',
    }}>

    <div className="grid grid-cols-2 w-11/12 max-w-maxContent mx-auto "  >
      <TextComponent />
      <ImageComponent />
    </div>
    </div>
  );
}
