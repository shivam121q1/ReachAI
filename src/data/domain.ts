export const domain =[
    
    "Business",
    "Influencer",
    "Artist",
    
]
export const furtherKeywords = [
    { 
       type: "Business", 
       furtherkey: ["Entrepreneurship", "Growth", "Innovation", "Marketing", "Productivity", "Others"],
       plans: ["Starter", "Growth", "Pro", "Elite"]
    },
    { 
       type: "Influencer", 
       furtherkey: ["Engagement", "Branding", "Social Media", "Trust", "Public Speaking", "Others"],
       plans: ["Beginner", "Trendsetter", "Creator Pro", "Icon"]
    },  
    { 
       type: "Artist", 
       furtherkey: ["Creativity", "Visuals", "Concept", "Originality", "Aesthetics", "Others"],
       plans: ["Essence", "Canvas", "Signature", "Masterpiece"]
    }
 ];
 export function getKeywordsByType(type:any) {
    const match = furtherKeywords.find(item => item.type === type);
    return match ? match.furtherkey : [];
}