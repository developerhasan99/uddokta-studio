// Plans shown on /pricing. Keep in step with the public plans in the Uddokta console (Plans page): same names, prices,
// limits and tools. The app enforces the console's values; this page only describes them.
import type { Lang } from "./site";

type Pair = { bn: string; en: string };
export type ToolKey =
  | "onlineStore" | "customDomain" | "courierBooking" | "discounts" | "fakeOrderProtection"
  | "incompleteOrders" | "repeatSales" | "analytics" | "adTracking";

export type Plan = {
  id: string;
  name: Pair;
  tagline: Pair;
  price: number; // taka per month, 0 = free
  products: number | null; // null = unlimited
  landingPages: number | null;
  team: number | null;
  storageMb: number;
  tools: ToolKey[];
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    id: "free",
    name: { bn: "ফ্রি", en: "Free" },
    tagline: { bn: "প্রথম পণ্য বিক্রি শুরু করতে", en: "To start selling your first product" },
    price: 0, products: 25, landingPages: 3, team: 1, storageMb: 300,
    tools: ["fakeOrderProtection", "incompleteOrders"],
  },
  {
    id: "starter",
    name: { bn: "স্টার্টার", en: "Starter" },
    tagline: { bn: "নিয়মিত অর্ডার আসা নতুন ব্যবসার জন্য", en: "For new businesses with regular orders" },
    price: 499, products: 200, landingPages: 15, team: 3, storageMb: 2048,
    tools: ["onlineStore", "courierBooking", "discounts", "fakeOrderProtection", "incompleteOrders", "repeatSales", "adTracking"],
  },
  {
    id: "growth",
    name: { bn: "গ্রোথ", en: "Growth" },
    tagline: { bn: "টিম আর নিজের ব্র্যান্ড নিয়ে বাড়তে থাকা ব্যবসার জন্য", en: "For growing brands with a team" },
    price: 999, products: 1000, landingPages: 50, team: 6, storageMb: 10240,
    tools: ["onlineStore", "customDomain", "courierBooking", "discounts", "fakeOrderProtection", "incompleteOrders", "repeatSales", "analytics", "adTracking"],
    popular: true,
  },
  {
    id: "pro",
    name: { bn: "প্রো", en: "Pro" },
    tagline: { bn: "অনেক পণ্য আর বড় টিমের জন্য", en: "For large catalogues and bigger teams" },
    price: 1999, products: null, landingPages: null, team: 15, storageMb: 30720,
    tools: ["onlineStore", "customDomain", "courierBooking", "discounts", "fakeOrderProtection", "incompleteOrders", "repeatSales", "analytics", "adTracking"],
  },
];

// Names match the dashboard's Billing page (storefront/src/plans.ts in the app), with a line on what each does.
export const tools: { key: ToolKey; name: Pair; about: Pair }[] = [
  { key: "fakeOrderProtection", name: { bn: "ভুয়া অর্ডার থেকে সুরক্ষা", en: "Fake-order protection" }, about: { bn: "সন্দেহজনক নম্বর ব্লক, একই পণ্যে বারবার অর্ডার চিহ্নিত", en: "Block suspicious numbers, flag repeat orders" } },
  { key: "incompleteOrders", name: { bn: "অসম্পূর্ণ অর্ডার", en: "Incomplete orders" }, about: { bn: "যারা ফর্ম পূরণ করেও অর্ডার দেননি, তাদের কল করুন", en: "Call buyers who filled the form but did not order" } },
  { key: "onlineStore", name: { bn: "অনলাইন স্টোর", en: "Online store" }, about: { bn: "হোম, ক্যাটাগরি, সার্চ, কার্ট আর ক্রেতার অ্যাকাউন্ট", en: "Home, collections, search, cart and buyer accounts" } },
  { key: "courierBooking", name: { bn: "এক ক্লিকে কুরিয়ার বুকিং", en: "One-click courier booking" }, about: { bn: "Steadfast-এ সরাসরি পার্সেল বুক আর ট্র্যাকিং", en: "Book and track Steadfast parcels directly" } },
  { key: "discounts", name: { bn: "ডিসকাউন্ট ও কুপন", en: "Discounts and coupons" }, about: { bn: "কুপন কোড, অটো অফার, বাই ওয়ান গেট ওয়ান, ফ্রি ডেলিভারি", en: "Coupon codes, automatic offers, buy X get Y, free delivery" } },
  { key: "repeatSales", name: { bn: "রিপিট সেল", en: "Repeat sales" }, about: { bn: "আগের ক্রেতাদের আবার কেনার জন্য কল লিস্ট", en: "A call list of past buyers ready to buy again" } },
  { key: "adTracking", name: { bn: "বিজ্ঞাপন ট্র্যাকিং", en: "Ad tracking" }, about: { bn: "Meta ও TikTok পিক্সেল, অর্ডার রিপোর্টসহ", en: "Meta and TikTok pixels, reporting orders" } },
  { key: "analytics", name: { bn: "হিসাব ও লাভ", en: "Analytics and profit" }, about: { bn: "বিক্রি, ফেরত আর কেনা দাম বাদে আসল লাভ", en: "Sales, returns and real profit after buying price" } },
  { key: "customDomain", name: { bn: "নিজের ডোমেইন", en: "Own domain" }, about: { bn: "yourshop.com-এ আপনার স্টোর আর পেজ", en: "Your store and pages on yourshop.com" } },
];

// In every plan, free included.
export const included: Pair[] = [
  { bn: "অর্ডার ফর্মসহ ল্যান্ডিং পেজ বিল্ডার", en: "Landing page builder with order form" },
  { bn: "অর্ডার ম্যানেজমেন্ট, স্ট্যাটাস আর ইনভয়েস প্রিন্ট", en: "Order management, statuses and printed invoices" },
  { bn: "পণ্য, ভ্যারিয়েন্ট, স্টক আর মিডিয়া গ্যালারি", en: "Products, variants, stock and media gallery" },
  { bn: "নিজে ডেলিভারি আর ডেলিভারি চার্জের নিয়ম", en: "Self delivery and delivery charge rules" },
  { bn: "পুরো ড্যাশবোর্ড বাংলা ও ইংরেজিতে", en: "The whole dashboard in Bangla and English" },
  { bn: "প্রতি অর্ডারে কোনো কমিশন নেই", en: "No commission on any order" },
];

const bnDigits = (s: string) => s.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
export const num = (n: number, lang: Lang) => {
  const s = n.toLocaleString("en-US");
  return lang === "bn" ? bnDigits(s) : s;
};
export const storage = (mb: number, lang: Lang) => (mb >= 1024 ? `${num(mb / 1024, lang)} GB` : `${num(mb, lang)} MB`);
