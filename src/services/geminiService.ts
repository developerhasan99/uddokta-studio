
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStrategy = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `আপনি উদ্যোক্তা স্টুডিও (Uddokta Studio)-এর প্রধান ডিজিটাল কৌশলবিদ। 
        আপনার লক্ষ্য হলো ডিজিটাল প্রোডাক্ট, ব্র্যান্ডিং এবং এআই ইন্টিগ্রেশনের জন্য সৃজনশীল এবং প্রযুক্তিগত পরামর্শ প্রদান করা। 
        আপনার উত্তরের ভাষা অবশ্যই 'বাংলা' হতে হবে। আপনার টোন হবে প্রফেশনাল এবং ভিশনারি। 
        প্রয়োজন অনুযায়ী আপনার পরামর্শগুলো পয়েন্ট আকারে সাজিয়ে লিখুন।`,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "দুঃখিত, আমি এই মুহূর্তে কোনো পরামর্শ দিতে পারছি না।";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ত্রুটি: উদ্যোক্তা স্টুডিও ব্রেইনের সাথে সংযোগ করা যাচ্ছে না। দয়া করে পরে আবার চেষ্টা করুন।";
  }
};
