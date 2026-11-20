// Terms, privacy and refund policy for Uddokta Commerce itself (not the sellers' own store policies).
// Section bodies are our own trusted HTML (paragraphs and lists), rendered by components/Legal.astro.
import type { Lang } from "./site";

export type LegalKey = "terms" | "privacy" | "refund";
type Doc = { title: string; lead: string; sections: { h: string; body: string }[] };

export const LEGAL_UPDATED = { bn: "২০ নভেম্বর ২০২৬", en: "20 November 2026" };
export const legalPath = (key: LegalKey, lang: Lang) => (lang === "en" ? `/en/${key}` : `/${key}`);
export const legalNames: Record<LegalKey, Record<Lang, string>> = {
  terms: { bn: "ব্যবহারের শর্তাবলী", en: "Terms of service" },
  privacy: { bn: "গোপনীয়তা নীতি", en: "Privacy policy" },
  refund: { bn: "রিফান্ড নীতি", en: "Refund policy" },
};

const ul = (items: string[]) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
const p = (...lines: string[]) => lines.map((l) => `<p>${l}</p>`).join("");

export const legal: Record<LegalKey, Record<Lang, Doc>> = {
  terms: {
    bn: {
      title: "ব্যবহারের শর্তাবলী",
      lead: "উদ্যোক্তা কমার্সে অ্যাকাউন্ট খুললে বা দোকান চালালে এই শর্তগুলো মেনে নিচ্ছেন বলে ধরা হবে। সহজ ভাষায় লিখেছি, তবু কোথাও প্রশ্ন থাকলে আমাদের জানান।",
      sections: [
        { h: "১. এই শর্ত কার জন্য", body: p(
          "উদ্যোক্তা কমার্স (এখানে “আমরা”) অনলাইন সেলারদের জন্য সফটওয়্যার: ড্যাশবোর্ড (admin.uddokta.co), ল্যান্ডিং পেজ, অনলাইন স্টোর, অর্ডার, কুরিয়ার বুকিং আর সংশ্লিষ্ট টুল। যিনি অ্যাকাউন্ট খোলেন, দোকানের মালিক এবং দোকানের টিমের সদস্য (এখানে “আপনি”), সবার জন্য এই শর্ত প্রযোজ্য।",
          "আপনার দোকান থেকে যিনি কেনেন (ক্রেতা), তাঁর সঙ্গে কেনাবেচার চুক্তি আপনার, আমাদের নয়। আমরা শুধু সফটওয়্যারটি দিই।",
        ) },
        { h: "২. অ্যাকাউন্ট", body: ul([
          "অ্যাকাউন্ট খুলতে আপনার বয়স কমপক্ষে ১৮ বছর হতে হবে।",
          "নাম, ইমেইল আর বাংলাদেশি মোবাইল নম্বর সঠিক দিন। নম্বরটি এসএমএস কোড দিয়ে যাচাই করা হয়।",
          "পাসওয়ার্ড নিজের কাছে রাখুন, কারও সঙ্গে শেয়ার করবেন না। টিমের প্রত্যেকে নিজের অ্যাকাউন্ট দিয়ে ঢুকবেন। আমন্ত্রণ লিংক দিয়েই টিমে যোগ দেওয়া যায়।",
          "দোকানের মালিক টিমের সদস্যদের কাজের দায়ও নেন। কাকে কোন ভূমিকা (অ্যাডমিন বা স্টাফ) দেবেন, তা মালিকই ঠিক করেন।",
          "অ্যাকাউন্টে অচেনা কোনো কাজ দেখলে সঙ্গে সঙ্গে আমাদের জানান এবং পাসওয়ার্ড বদলে দিন।",
        ]) },
        { h: "৩. আপনার দোকান, আপনার দায়িত্ব", body: p(
          "দোকানের বিক্রেতা আপনি। পণ্য, দাম, ছবি আর বর্ণনা ঠিক রাখা; সময়মতো ডেলিভারি; ফেরত, রিফান্ড আর ক্রেতার অভিযোগ মেটানো; ট্রেড লাইসেন্স, ভ্যাট বা অন্য যেকোনো আইনি অনুমতি ও কর: এসবের দায়িত্ব আপনার।",
          "নতুন দোকানে আমরা রিফান্ড, গোপনীয়তা, ডেলিভারি আর শর্তাবলীর খসড়া পাতা দিই। এগুলো শুরু করার সুবিধা মাত্র, আইনি পরামর্শ নয়। প্রকাশ করার আগে নিজের ব্যবসা অনুযায়ী পড়ে ঠিক করে নিন।",
        ) },
        { h: "৪. যা করা যাবে না", body: p("নিচের কাজে উদ্যোক্তা কমার্স ব্যবহার করা যাবে না:") + ul([
          "বাংলাদেশের আইনে নিষিদ্ধ বা লাইসেন্স ছাড়া বিক্রি নিষেধ এমন পণ্য বা সেবা: মাদক, অস্ত্র, বিস্ফোরক, চোরাই বা নকল পণ্য, লাইসেন্স ছাড়া ওষুধ, জুয়া, প্রাপ্তবয়স্কদের কনটেন্ট ইত্যাদি।",
          "প্রতারণা: ভুয়া অফার, মিথ্যা স্বাস্থ্য বা ফলাফলের দাবি, বানানো রিভিউ, টাকা নিয়ে পণ্য না পাঠানো।",
          "অন্যের ট্রেডমার্ক, ছবি বা লেখা অনুমতি ছাড়া ব্যবহার, বা অন্য কোনো প্রতিষ্ঠান সেজে পেজ বানানো।",
          "পাসওয়ার্ড, কার্ড বা ব্যাংকের তথ্য হাতানোর পেজ, ক্ষতিকর কোড, বা কাস্টম HTML দিয়ে ক্রেতার ক্ষতি করা।",
          "ক্রেতার তথ্য বিক্রি করা, অনুমতি ছাড়া স্প্যাম এসএমএস বা মেসেজ পাঠানো।",
          "সার্ভিসে অতিরিক্ত চাপ দেওয়া, অন্যের দোকান বা অ্যাকাউন্টে ঢোকার চেষ্টা, বা আমাদের নিরাপত্তা ভাঙার চেষ্টা।",
        ]) },
        { h: "৫. প্ল্যান ও পেমেন্ট", body: ul([
          "প্রতিটি দোকানের নিজস্ব প্ল্যান থাকে। ফ্রি প্ল্যানে কোনো টাকা লাগে না। পেইড প্ল্যানের দাম টাকায়, <a href=\"/pricing\">দাম ও প্ল্যান</a> পাতায় দেওয়া আছে।",
          "পেমেন্ট আগে দিতে হয়, বিকাশ, নগদ বা ব্যাংকে, রেফারেন্সে দোকানের ঠিকানা লিখে। আমরা পেমেন্ট মিলিয়ে হাতে প্ল্যান চালু করি। প্ল্যান চলমান থাকলে নতুন মেয়াদ আগের শেষ তারিখ থেকে যোগ হয়।",
          "মেয়াদ শেষে আবার পেমেন্ট না করলে দোকান ফ্রি প্ল্যানে চলে যায়। দোকান, পণ্য, অর্ডার আর পেজ থেকে যায়, তবে ফ্রি প্ল্যানে নেই এমন টুল বন্ধ হয় এবং সীমার বেশি নতুন কিছু যোগ করা যায় না।",
          "দাম বদলালে কমপক্ষে ৩০ দিন আগে জানাব। আগে থেকে পরিশোধ করা মেয়াদে নতুন দাম লাগবে না।",
          "বিকাশ, নগদ বা ব্যাংক যে চার্জ কাটে, তা পেমেন্টকারীর। রিফান্ডের নিয়ম <a href=\"/refund\">রিফান্ড নীতিতে</a> আছে।",
        ]) },
        { h: "৬. অন্যদের সেবা", body: p(
          "কুরিয়ার (যেমন স্টেডফাস্ট), Meta ও TikTok পিক্সেল, নিজের ডোমেইন, বিকাশ বা নগদের মতো সেবা আপনি নিজের অ্যাকাউন্ট দিয়ে যুক্ত করেন। সেগুলোর নিজস্ব শর্ত ও চার্জ আছে। তাদের সেবা বন্ধ থাকলে, ভুল করলে বা নিয়ম বদলালে তার দায় আমাদের নয়।",
          "ক্যাশ অন ডেলিভারির টাকা ক্রেতা, কুরিয়ার আর আপনার মধ্যে লেনদেন হয়। ক্রেতার কোনো টাকা আমাদের কাছে আসে না, আমরা তা রাখিও না।",
        ) },
        { h: "৭. কনটেন্ট ও মালিকানা", body: ul([
          "আপনার পণ্য, ছবি, লেখা, পেজ আর ক্রেতার তথ্যের মালিক আপনি। সার্ভিস চালানোর জন্য যতটুকু দরকার (রাখা, দেখানো, ছবি ছোট করা, ব্যাকআপ রাখা), শুধু ততটুকু ব্যবহারের অনুমতি আমাদের দিচ্ছেন।",
          "যে কনটেন্ট দিচ্ছেন, তা ব্যবহারের অধিকার আপনার আছে, এটা নিশ্চিত করা আপনার দায়িত্ব।",
          "উদ্যোক্তা কমার্সের সফটওয়্যার, নাম, লোগো আর আমাদের বানানো ডেমো ও টেমপ্লেট আমাদের। ডেমো আর টেমপ্লেট নিজের দোকানে ব্যবহার করতে পারবেন, কিন্তু আলাদা করে বিক্রি বা বিতরণ করতে পারবেন না।",
        ]) },
        { h: "৮. ক্রেতার তথ্য", body: p(
          "দোকানে আসা ক্রেতার তথ্য (নাম, ফোন, ঠিকানা, অর্ডার) আপনার। আমরা তা শুধু আপনার হয়ে, আপনার দোকান চালানোর জন্য রাখি ও ব্যবহার করি। অন্য কোনো সেলারকে দিই না, বিক্রি করি না, নিজেদের বিজ্ঞাপনে ব্যবহার করি না।",
          "ক্রেতার তথ্য কেন নিচ্ছেন আর কী করবেন, তা ক্রেতাকে জানানো এবং আইন মেনে ব্যবহার করা আপনার দায়িত্ব। বিস্তারিত <a href=\"/privacy\">গোপনীয়তা নীতিতে</a>।",
          "সাপোর্ট, নিরাপত্তা, বিলিং বা আইনি প্রয়োজনে আমাদের নির্দিষ্ট কর্মী দোকানের তথ্য দেখতে পারেন। দোকানের ডেটা এক্সপোর্টের মতো কাজ কারণসহ লগে লেখা থাকে।",
        ) },
        { h: "৯. সার্ভিস চালু থাকা", body: p(
          "সার্ভিস সবসময় চালু রাখার চেষ্টা করি, তবে রক্ষণাবেক্ষণ, অন্য সেবার সমস্যা বা অপ্রত্যাশিত কারণে কিছু সময় বন্ধ থাকতে পারে। বড় পরিবর্তনের আগে সম্ভব হলে জানাই।",
          "জরুরি তথ্যের (যেমন অর্ডারের তালিকা) নিজের কপি রাখুন। ড্যাশবোর্ড থেকে অর্ডার CSV এক্সপোর্ট করা যায়।",
          "আমরা ফিচার যোগ, বদল বা বাদ দিতে পারি। পেইড প্ল্যানের কোনো মূল টুল বাদ দিলে আগে জানাব।",
        ) },
        { h: "১০. সাসপেন্ড ও বন্ধ করা", body: ul([
          "এই শর্ত ভাঙলে, প্রতারণা বা ক্রেতার ক্ষতির আশঙ্কা থাকলে, অথবা আইন বা কর্তৃপক্ষের নির্দেশে আমরা দোকান বা অ্যাকাউন্ট সাসপেন্ড বা বন্ধ করতে পারি। সম্ভব হলে আগে জানাব; জরুরি হলে আগে না জানিয়েও করতে পারি।",
          "দোকান সাসপেন্ড হলে স্টোরফ্রন্ট বন্ধ থাকে, তবে টিম ড্যাশবোর্ডে তথ্য দেখতে পারে।",
          "আপনি যেকোনো সময় সেটিংস › স্টোর থেকে দোকান মুছে ফেলার অনুরোধ দিতে পারেন। ৩০ দিনের মধ্যে মালিক তা ফিরিয়ে আনতে পারেন; এরপর দোকানের সব তথ্য ও ফাইল স্থায়ীভাবে মুছে যায়।",
          "অ্যাকাউন্ট মুছতে প্রোফাইল পাতা ব্যবহার করুন। কোনো দোকানের একমাত্র মালিক থাকলে আগে মালিকানা দিন বা দোকানটি মুছুন।",
        ]) },
        { h: "১১. দায়ের সীমা", body: p(
          "সার্ভিস “যেমন আছে” সেভাবে দেওয়া হয়। আইন যতটুকু অনুমতি দেয়, ততটুকু পর্যন্ত আমরা পরোক্ষ ক্ষতির দায় নিই না: হারানো লাভ, হারানো অর্ডার, বিজ্ঞাপনের খরচ, কুরিয়ারে হারানো পণ্য বা অন্য সেবার ভুল।",
          "যেকোনো দাবিতে আমাদের মোট দায় সংশ্লিষ্ট দোকানের জন্য ঘটনার আগের ৩ মাসে আমাদের দেওয়া টাকার বেশি হবে না।",
          "আপনার পণ্য, কনটেন্ট বা এই শর্ত ভাঙার কারণে কেউ আমাদের বিরুদ্ধে দাবি করলে তার খরচ ও দায় আপনার।",
        ) },
        { h: "১২. শর্ত বদলানো", body: p(
          "এই শর্ত মাঝে মাঝে বদলাতে পারে। বড় পরিবর্তন হলে কার্যকর হওয়ার কমপক্ষে ১৪ দিন আগে ইমেইলে বা ড্যাশবোর্ডে জানাব। এরপরও ব্যবহার চালিয়ে গেলে নতুন শর্ত মেনে নিয়েছেন বলে ধরা হবে। এই পাতার ওপরে সর্বশেষ হালনাগাদের তারিখ থাকে।",
        ) },
        { h: "১৩. আইন ও বিরোধ", body: p(
          "এই শর্ত বাংলাদেশের আইন অনুযায়ী চলবে। কোনো বিরোধ হলে প্রথমে আলোচনা করে মেটানোর চেষ্টা করব। না মিটলে ঢাকার আদালতে নিষ্পত্তি হবে।",
          "বাংলা আর ইংরেজি সংস্করণে অমিল থাকলে বাংলা সংস্করণ প্রাধান্য পাবে।",
        ) },
      ],
    },
    en: {
      title: "Terms of service",
      lead: "By creating an account or running a store on Uddokta Commerce, you agree to these terms. We have kept them plain; if anything is unclear, ask us.",
      sections: [
        { h: "1. Who these terms cover", body: p(
          "Uddokta Commerce (“we”) is software for online sellers: the dashboard (admin.uddokta.co), landing pages, online stores, orders, courier booking and related tools. These terms apply to everyone who creates an account, every store owner and every team member (“you”).",
          "The sale between you and the people who buy from your store (buyers) is your agreement, not ours. We provide the software only.",
        ) },
        { h: "2. Your account", body: ul([
          "You must be at least 18 to create an account.",
          "Give your real name, email and Bangladeshi mobile number. The number is confirmed with an SMS code.",
          "Keep your password to yourself. Every team member signs in with their own account, joining through an invite link.",
          "A store owner is responsible for what their team does in the store and decides each member's role (admin or staff).",
          "If you notice activity you do not recognise, tell us at once and change your password.",
        ]) },
        { h: "3. Your store is your business", body: p(
          "You are the seller. Keeping products, prices, photos and descriptions accurate; delivering on time; handling returns, refunds and buyer complaints; and holding any trade licence, VAT registration or other permission or tax your business needs are your responsibility.",
          "New stores get draft refund, privacy, shipping and terms pages. They are a starting point, not legal advice: read and adjust them for your business before you publish them.",
        ) },
        { h: "4. What is not allowed", body: p("You may not use Uddokta Commerce for:") + ul([
          "Products or services that are illegal in Bangladesh or need a licence you do not hold: drugs, weapons, explosives, stolen or counterfeit goods, unlicensed medicine, gambling, adult content and the like.",
          "Fraud: fake offers, false health or results claims, invented reviews, or taking money without sending the goods.",
          "Using someone else's trademark, photos or text without permission, or pretending to be another business.",
          "Pages that collect passwords, card or bank details under false pretences, harmful code, or custom HTML that harms buyers.",
          "Selling buyer data or sending spam SMS or messages without consent.",
          "Overloading the service, trying to reach other stores or accounts, or trying to break our security.",
        ]) },
        { h: "5. Plans and payment", body: ul([
          "Each store has its own plan. The Free plan costs nothing. Paid plan prices are in taka on the <a href=\"/en/pricing\">Pricing</a> page.",
          "Plans are paid in advance by bKash, Nagad or bank transfer, with the store address as reference. We check the payment and turn the plan on by hand. Paying while a plan is running adds the new period after its current end date.",
          "If a paid period ends without renewal, the store moves to the Free plan. Its products, orders and pages stay, but tools the Free plan leaves out lock and you cannot add more than its limits allow.",
          "We give at least 30 days' notice of price changes. A period you have already paid for keeps its price.",
          "Charges taken by bKash, Nagad or your bank are paid by the sender. Refunds follow our <a href=\"/en/refund\">Refund policy</a>.",
        ]) },
        { h: "6. Other companies' services", body: p(
          "Couriers (such as Steadfast), Meta and TikTok pixels, your own domain, bKash, Nagad and similar services are connected with your own accounts and have their own terms and charges. We are not responsible for their outages, mistakes or rule changes.",
          "Cash-on-delivery money moves between the buyer, the courier and you. Buyers' money never comes to us and we never hold it.",
        ) },
        { h: "7. Content and ownership", body: ul([
          "You own your products, photos, text, pages and buyer data. You allow us to use them only as far as running the service needs (storing, showing, resizing images, keeping backups).",
          "You must have the right to use everything you upload.",
          "The Uddokta Commerce software, name, logo and the demos and templates we make are ours. You may use demos and templates in your store, but not resell or redistribute them.",
        ]) },
        { h: "8. Buyer data", body: p(
          "Buyer details that reach your store (names, phones, addresses, orders) are yours. We keep and use them only on your behalf, to run your store. We never give them to other sellers, sell them or use them for our own advertising.",
          "Telling buyers why you collect their details and using them lawfully is your responsibility. See our <a href=\"/en/privacy\">Privacy policy</a>.",
          "Named Uddokta staff may look at a store's data for support, security, billing or legal reasons. Actions such as exporting a store's data are logged with a reason.",
        ) },
        { h: "9. Availability", body: p(
          "We work to keep the service running, but maintenance, problems at other providers or the unexpected can make it unavailable for a while. We announce big changes ahead when we can.",
          "Keep your own copy of important records. Orders can be exported as CSV from the dashboard.",
          "We may add, change or remove features. We will tell you before removing a main tool of a paid plan.",
        ) },
        { h: "10. Suspension and closing", body: ul([
          "We may suspend or close a store or account that breaks these terms, puts buyers at risk of fraud or harm, or when the law or an authority requires it. We will warn you first when we can, and may act without warning when it is urgent.",
          "While a store is suspended its storefront is closed, but the team can still read its data in the dashboard.",
          "You can ask to delete a store at any time from Settings › Store. The owner can restore it within 30 days; after that every record and file of the store is deleted for good.",
          "To delete your account, use your Profile page. If you are a store's only owner, hand over ownership or delete the store first.",
        ]) },
        { h: "11. Limits of our liability", body: p(
          "The service is provided “as is”. As far as the law allows, we are not liable for indirect losses: lost profit, lost orders, advertising spend, goods lost by couriers or mistakes by other services.",
          "Our total liability for any claim is limited to what you paid us for the affected store in the 3 months before the event.",
          "If someone makes a claim against us because of your products, your content or your breach of these terms, you cover the cost and liability.",
        ) },
        { h: "12. Changes to these terms", body: p(
          "We may update these terms. For significant changes we will tell you by email or in the dashboard at least 14 days before they take effect. Continuing to use the service after that means you accept them. The date of the last update is at the top of this page.",
        ) },
        { h: "13. Law and disputes", body: p(
          "These terms are governed by the laws of Bangladesh. If we disagree, we will first try to settle it by talking. If that fails, the courts of Dhaka will decide.",
          "If the Bangla and English versions differ, the Bangla version applies.",
        ) },
      ],
    },
  },

  privacy: {
    bn: {
      title: "গোপনীয়তা নীতি",
      lead: "আমরা কোন তথ্য রাখি, কেন রাখি, কার সঙ্গে শেয়ার হয় আর কতদিন থাকে, এই পাতায় তা লেখা আছে।",
      sections: [
        { h: "১. এই নীতি কার জন্য", body: ul([
          "<strong>সেলার ও টিম:</strong> যাঁরা উদ্যোক্তা কমার্সে অ্যাকাউন্ট খোলেন। তাঁদের তথ্যের দায়িত্ব আমাদের।",
          "<strong>ক্রেতা:</strong> যাঁরা উদ্যোক্তা কমার্সে বানানো কোনো দোকান থেকে কেনেন। তাঁদের তথ্য সেই দোকানের; আমরা শুধু দোকানের হয়ে তা রাখি। ক্রেতার তথ্য নিয়ে প্রশ্ন থাকলে আগে সেই দোকানের সঙ্গে যোগাযোগ করুন।",
          "<strong>ভিজিটর:</strong> যাঁরা uddokta.co ওয়েবসাইট দেখেন।",
        ]) },
        { h: "২. সেলারের যে তথ্য রাখি", body: ul([
          "অ্যাকাউন্ট: নাম, ইমেইল, মোবাইল নম্বর, ভাষা আর পাসওয়ার্ড (পাসওয়ার্ড শুধু হ্যাশ আকারে, আসল পাসওয়ার্ড আমরা দেখতে পাই না)।",
          "দোকান: নাম, লোগো, ঠিকানা, যোগাযোগ, চাইলে ট্রেড লাইসেন্স ও BIN নম্বর, টিমের সদস্য ও তাঁদের ভূমিকা।",
          "আপনার কাজ: পণ্য, কেনা দাম, ছবি, পেজ, মেনু, ডিসকাউন্ট, অর্ডার আর সেটিংস।",
          "বিলিং: প্ল্যান, পেমেন্টের পরিমাণ, মাধ্যম ও রেফারেন্স। কার্ড বা ব্যাংকের পাসওয়ার্ড আমরা কখনো নিই না।",
          "সংযোগ: কুরিয়ারের API কী (এনক্রিপ্ট করে রাখা হয়, কখনো দেখানো হয় না), পিক্সেল আইডি, নিজের ডোমেইন।",
          "সাইন-ইন: চালু সেশনের তারিখ, ভুল পাসওয়ার্ডের চেষ্টা আর যাচাই কোড (কোড শুধু হ্যাশ আকারে, ১০ মিনিটে মেয়াদ শেষ)।",
        ]) },
        { h: "৩. ক্রেতার যে তথ্য দোকানের হয়ে রাখি", body: ul([
          "অর্ডার: নাম, ফোন, ঠিকানা, পণ্য, দাম, ডেলিভারির ধরন আর নোট।",
          "অসম্পূর্ণ অর্ডার: ফোন নম্বর সঠিক হলে অর্ডার ফর্মে যা লেখা হয়েছে তা সেভ হয়, যাতে দোকান পরে যোগাযোগ করতে পারে। ৯০ দিন পর মুছে যায়।",
          "ক্রেতার অ্যাকাউন্ট (দোকান চালু রাখলে): মোবাইল নম্বর, পাসওয়ার্ড (হ্যাশ আকারে), নাম আর ঠিকানা।",
          "দোকান যে নম্বর ব্লক করে, সেই তালিকা।",
        ]) },
        { h: "৪. কেন ব্যবহার করি", body: ul([
          "সার্ভিস চালাতে: দোকান, পেজ, অর্ডার আর কুরিয়ার বুকিং কাজ করানো।",
          "অ্যাকাউন্ট নিরাপদ রাখতে: সাইন-ইন, এসএমএস কোড, পাসওয়ার্ড রিসেট আর প্রতারণা ঠেকানো।",
          "জরুরি খবর জানাতে: অ্যাকাউন্ট, বিলিং আর বড় পরিবর্তনের খবর ইমেইল বা এসএমএসে।",
          "সাপোর্ট দিতে, বিলিং মেলাতে আর আইন মানতে।",
          "সার্ভিস উন্নত করতে: কোন টুল কতটা ব্যবহার হয়, তা মোট হিসাবে দেখা।",
        ]) + p("আমরা কারও তথ্য বিক্রি করি না, বিজ্ঞাপনের জন্য দিই না, আর ক্রেতাকে নিজেরা কোনো মার্কেটিং মেসেজ পাঠাই না।") },
        { h: "৫. যাদের সঙ্গে তথ্য যায়", body: p("সার্ভিস চালাতে আমরা নিচের প্রতিষ্ঠানগুলোর সেবা নিই। তারা শুধু সেই কাজের জন্য প্রয়োজনীয় তথ্য পায়:") + ul([
          "Railway: সার্ভার ও ডেটাবেস (সিঙ্গাপুর)।",
          "Cloudflare: ছবি ও ফাইল রাখা (R2), ডোমেইন আর নেটওয়ার্ক।",
          "Fly.io: সেলারের নিজের ডোমেইনের সংযোগ (সিঙ্গাপুর)।",
          "Amazon Web Services (SES): অ্যাকাউন্ট ইমেইল পাঠানো (সিঙ্গাপুর)।",
          "Alpha SMS (sms.net.bd): যাচাই কোডের এসএমএস (বাংলাদেশ)।",
          "Google Fonts: ওয়েবসাইট ও দোকানের ফন্ট।",
        ]) + p(
          "দোকান নিজে যা চালু করে: কুরিয়ারে অর্ডার বুক করলে ক্রেতার নাম, ফোন, ঠিকানা আর ক্যাশ অন ডেলিভারির টাকার পরিমাণ সেই কুরিয়ারে যায়। দোকান Meta বা TikTok পিক্সেল যোগ করলে দোকানের পাতায় ক্রেতার ব্রাউজিং তথ্য সেই প্রতিষ্ঠানে যায়, দোকানের নিজের অ্যাকাউন্টে।",
          "বাংলাদেশের আইন অনুযায়ী বৈধ আদেশ পেলে কর্তৃপক্ষকে প্রয়োজনীয় তথ্য দিতে পারি।",
        ) },
        { h: "৬. তথ্য কোথায় থাকে", body: p(
          "আমাদের সার্ভার আর ডেটাবেস সিঙ্গাপুরে, তাই তথ্য বাংলাদেশের বাইরে রাখা ও প্রক্রিয়া করা হয়। প্রতিটি প্রতিষ্ঠান নিজস্ব নিরাপত্তা ব্যবস্থায় তা রাখে।",
        ) },
        { h: "৭. কুকি ও ব্রাউজারে রাখা তথ্য", body: ul([
          "ড্যাশবোর্ড: সাইন-ইন রাখার একটি কুকি।",
          "দোকান: কার্ট, ক্রেতার সাইন-ইন আর পাসওয়ার্ড দেওয়া দোকানে ঢোকার কুকি।",
          "ব্রাউজারের লোকাল স্টোরেজে ছোটখাটো পছন্দ: ভাষা, নোটিফিকেশনের শব্দ, সাম্প্রতিক রং, কপি করা সেকশন।",
        ]) + p("আমরা নিজেরা কোনো বিজ্ঞাপন বা ট্র্যাকিং কুকি ব্যবহার করি না। uddokta.co ওয়েবসাইটে কোনো অ্যানালিটিক্স বা পিক্সেল নেই। দোকানের পাতায় পিক্সেল থাকলে তা দোকানের নিজের সিদ্ধান্ত।") },
        { h: "৮. নিরাপত্তা", body: ul([
          "সব সংযোগ HTTPS-এ। পাসওয়ার্ড, সেশন আর লিংক শুধু হ্যাশ আকারে রাখা হয়।",
          "প্রতিটি দোকানের তথ্য ডেটাবেস স্তরেই আলাদা, এক দোকান অন্য দোকানের তথ্য দেখতে পারে না। স্টাফ ভূমিকায় কেনা দাম লুকানো থাকে।",
          "কুরিয়ারের লগইন তথ্য এনক্রিপ্ট করা।",
          "আমাদের কর্মীরা দোকানের তথ্য দেখেন শুধু প্রয়োজনে, আর গুরুত্বপূর্ণ কাজ কারণসহ লগে থাকে।",
        ]) + p("কোনো ব্যবস্থাই শতভাগ নিরাপদ নয়। তথ্য ফাঁসের মতো ঘটনা ঘটলে ক্ষতিগ্রস্ত সেলারদের দ্রুত জানাব।") },
        { h: "৯. কতদিন রাখি", body: ul([
          "অ্যাকাউন্টের তথ্য: অ্যাকাউন্ট থাকা পর্যন্ত।",
          "দোকানের সব তথ্য ও ফাইল: দোকান থাকা পর্যন্ত। মুছে ফেলার অনুরোধের ৩০ দিন পর স্থায়ীভাবে মুছে যায়।",
          "অসম্পূর্ণ অর্ডার: ৯০ দিন। ক্রেতার সেশন: ৩০ দিন। যাচাই কোড: ১০ মিনিট।",
          "পাঠানো ইমেইলের লেখা পাঠানোর পরই মুছে যায়। যে ঠিকানায় ইমেইল ফেরত আসে বা অভিযোগ হয়, সেটি আর ইমেইল না পাঠানোর তালিকায় থাকে।",
          "পেমেন্টের রেকর্ড: হিসাব আর আইনের প্রয়োজন যতদিন।",
          "ব্যাকআপে থাকা কপি নিয়মিত নতুন ব্যাকআপে বদলে যায়।",
        ]) },
        { h: "১০. আপনার অধিকার", body: ul([
          "প্রোফাইল থেকে নিজের নাম, ইমেইল, পাসওয়ার্ড আর ভাষা বদলাতে পারেন, আর অন্য ডিভাইস থেকে সাইন আউট করতে পারেন।",
          "অর্ডার CSV এক্সপোর্ট করতে পারেন। আপনার দোকানের সব তথ্যের কপি চাইলে আমাদের লিখুন।",
          "দোকান বা অ্যাকাউন্ট নিজেই মুছতে পারেন (ব্যবহারের শর্তাবলীর ১০ নম্বর অংশ দেখুন)।",
          "ক্রেতা নিজের তথ্য দেখতে, ঠিক করতে বা মুছতে চাইলে দোকানের সঙ্গে যোগাযোগ করুন। দোকান সাড়া না দিলে আমাদের জানান, আমরা সাহায্য করব।",
        ]) },
        { h: "১১. শিশুদের তথ্য", body: p("উদ্যোক্তা কমার্সে অ্যাকাউন্ট খোলা ১৮ বছরের কম বয়সীদের জন্য নয়, আর আমরা জেনেশুনে তাদের তথ্য নিই না।") },
        { h: "১২. এই নীতি বদলানো", body: p("এই নীতি বদলালে এই পাতার তারিখ বদলাবে। বড় পরিবর্তন হলে ইমেইলে বা ড্যাশবোর্ডে জানাব।") },
      ],
    },
    en: {
      title: "Privacy policy",
      lead: "What we keep, why we keep it, who it goes to and how long it stays.",
      sections: [
        { h: "1. Who this covers", body: ul([
          "<strong>Sellers and their teams:</strong> people with an Uddokta Commerce account. We are responsible for their data.",
          "<strong>Buyers:</strong> people who buy from a store built on Uddokta Commerce. Their details belong to that store; we only keep them on the store's behalf. For questions about buyer data, contact the store first.",
          "<strong>Visitors:</strong> people browsing uddokta.co.",
        ]) },
        { h: "2. What we keep about sellers", body: ul([
          "Account: name, email, mobile number, language and password (only as a hash; we cannot see the password itself).",
          "Store: name, logo, address, contact details, optional trade licence and BIN, team members and their roles.",
          "Your work: products, buying prices, images, pages, menus, discounts, orders and settings.",
          "Billing: plan, payment amounts, method and reference. We never ask for card or bank passwords.",
          "Connections: courier API keys (encrypted, never shown again), pixel IDs, your own domain.",
          "Sign-in: dates of active sessions, failed password attempts and verification codes (codes only as a hash, expiring in 10 minutes).",
        ]) },
        { h: "3. What we keep about buyers, for the store", body: ul([
          "Orders: name, phone, address, products, prices, delivery option and notes.",
          "Incomplete orders: once a valid phone number is typed, what the buyer entered on the order form is saved so the store can follow up. It is deleted after 90 days.",
          "Buyer accounts (where the store offers them): mobile number, password (as a hash), name and address.",
          "Numbers the store has blocked.",
        ]) },
        { h: "4. Why we use it", body: ul([
          "To run the service: stores, pages, orders and courier booking.",
          "To keep accounts safe: sign-in, SMS codes, password resets and fraud prevention.",
          "To tell you what matters: account, billing and important changes, by email or SMS.",
          "To give support, reconcile payments and meet legal duties.",
          "To improve the service, looking at how tools are used in total.",
        ]) + p("We do not sell anyone's data, share it for advertising, or send our own marketing to buyers.") },
        { h: "5. Who it goes to", body: p("We use these providers to run the service. Each gets only what its job needs:") + ul([
          "Railway: servers and database (Singapore).",
          "Cloudflare: image and file storage (R2), domains and network.",
          "Fly.io: connecting sellers' own domains (Singapore).",
          "Amazon Web Services (SES): account email (Singapore).",
          "Alpha SMS (sms.net.bd): verification code SMS (Bangladesh).",
          "Google Fonts: fonts on our website and stores.",
        ]) + p(
          "What a store turns on itself: booking an order with a courier sends the buyer's name, phone, address and cash-on-delivery amount to that courier. A Meta or TikTok pixel added by a store sends buyers' browsing on that store's pages to that company, under the store's own account.",
          "We may disclose what is required when we receive a valid legal order under Bangladeshi law.",
        ) },
        { h: "6. Where it is stored", body: p(
          "Our servers and database are in Singapore, so data is stored and processed outside Bangladesh. Each provider protects it with its own security measures.",
        ) },
        { h: "7. Cookies and browser storage", body: ul([
          "Dashboard: one cookie that keeps you signed in.",
          "Stores: cookies for the cart, buyer sign-in and entry to password-protected stores.",
          "Small preferences in your browser's local storage: language, notification sound, recent colours, copied sections.",
        ]) + p("We use no advertising or tracking cookies of our own, and uddokta.co has no analytics or pixels. A pixel on a store's pages is that store's choice.") },
        { h: "8. Security", body: ul([
          "Every connection uses HTTPS. Passwords, sessions and links are stored only as hashes.",
          "Each store's data is separated in the database itself, so one store cannot reach another's. Buying prices are hidden from staff roles.",
          "Courier sign-in details are encrypted.",
          "Our staff look at store data only when needed, and important actions are logged with a reason.",
        ]) + p("No system is perfectly secure. If a breach affects your data, we will tell affected sellers promptly.") },
        { h: "9. How long we keep it", body: ul([
          "Account details: as long as the account exists.",
          "Everything in a store, files included: as long as the store exists; deleted for good 30 days after a deletion request.",
          "Incomplete orders: 90 days. Buyer sessions: 30 days. Verification codes: 10 minutes.",
          "Email text is cleared once sent. Addresses that bounce or complain stay on a do-not-email list.",
          "Payment records: as long as accounting and the law require.",
          "Copies in backups are replaced as new backups are made.",
        ]) },
        { h: "10. Your choices", body: ul([
          "Change your name, email, password and language, and sign out other devices, from your Profile.",
          "Export orders as CSV. Write to us for a copy of all your store's data.",
          "Delete a store or your account yourself (see section 10 of the Terms of service).",
          "Buyers who want to see, correct or delete their details should contact the store. If the store does not respond, tell us and we will help.",
        ]) },
        { h: "11. Children", body: p("Uddokta Commerce accounts are not for anyone under 18, and we do not knowingly collect their data.") },
        { h: "12. Changes to this policy", body: p("When this policy changes, the date on this page changes. We will tell you about significant changes by email or in the dashboard.") },
      ],
    },
  },

  refund: {
    bn: {
      title: "রিফান্ড নীতি",
      lead: "উদ্যোক্তা কমার্সের প্ল্যানের জন্য দেওয়া টাকা কখন ফেরত পাবেন আর কীভাবে চাইবেন। কোনো দোকান থেকে কেনা পণ্যের রিফান্ডের জন্য সেই দোকানের সঙ্গে যোগাযোগ করুন।",
      sections: [
        { h: "১. ফ্রি প্ল্যান", body: p("ফ্রি প্ল্যানে কোনো টাকা লাগে না, তাই রিফান্ডেরও প্রশ্ন নেই। পেইড প্ল্যান নেওয়ার আগে ফ্রিতে সব কিছু চালিয়ে দেখে নিন।") },
        { h: "২. যখন পুরো টাকা ফেরত পাবেন", body: ul([
          "প্ল্যান চালু করার আগেই মত বদলালে।",
          "ভুল করে দুইবার, বেশি টাকা, বা ভুল দোকানের রেফারেন্সে পাঠালে (বাড়তি অংশ ফেরত, অথবা চাইলে সঠিক দোকানে যোগ করে দিই)।",
          "আমাদের কারণে প্ল্যান চালু করা না গেলে।",
        ]) },
        { h: "৩. যখন ফেরত হয় না", body: ul([
          "প্ল্যান চালু হওয়ার পর পরিশোধ করা মেয়াদের টাকা, আংশিক ব্যবহার হলেও। চালু হওয়ার মুহূর্ত থেকেই প্ল্যানের সব টুল পাওয়া যায়।",
          "মেয়াদের মাঝখানে ছোট প্ল্যানে যেতে চাইলে। নতুন প্ল্যান পরের পেমেন্ট থেকে চালু হয়।",
          "দোকান বা অ্যাকাউন্ট নিজে মুছে ফেললে।",
          "ব্যবহারের শর্তাবলী ভাঙার কারণে দোকান সাসপেন্ড বা বন্ধ হলে।",
          "কুরিয়ার, এসএমএস, ডোমেইন বা বিজ্ঞাপনের মতো অন্য প্রতিষ্ঠানে দেওয়া টাকা। সেগুলো আমাদের কাছে আসে না।",
        ]) },
        { h: "৪. আমরা সার্ভিস বন্ধ করলে", body: p("শর্ত না ভাঙা সত্ত্বেও আমরা যদি আপনার দোকান বন্ধ করি বা সার্ভিসটাই বন্ধ করে দিই, তবে মেয়াদের বাকি পুরো মাসগুলোর টাকা ফেরত দেব।") },
        { h: "৫. কীভাবে চাইবেন", body: p(
          "হোয়াটসঅ্যাপে বা ইমেইলে লিখুন: দোকানের ঠিকানা, কোন মাধ্যমে পাঠিয়েছেন, ট্রানজেকশন আইডি আর যে নম্বর বা অ্যাকাউন্ট থেকে পাঠিয়েছেন। পেমেন্টের ৩০ দিনের মধ্যে জানাবেন।",
          "৩ কার্যদিবসের মধ্যে উত্তর দেব। অনুমোদিত রিফান্ড ১০ কার্যদিবসের মধ্যে যে বিকাশ, নগদ বা ব্যাংক অ্যাকাউন্ট থেকে টাকা এসেছিল সেখানেই পাঠানো হবে। ভুল আমাদের হলে পাঠানোর চার্জও আমরা দেব।",
        ) },
      ],
    },
    en: {
      title: "Refund policy",
      lead: "When money paid for an Uddokta Commerce plan is returned and how to ask. For refunds on goods bought from a store, contact that store.",
      sections: [
        { h: "1. Free plan", body: p("The Free plan costs nothing, so there is nothing to refund. Try everything on it before you choose a paid plan.") },
        { h: "2. Full refunds", body: ul([
          "You change your mind before we turn the plan on.",
          "You paid twice, paid too much, or used the wrong store as reference (we return the extra, or add it to the right store if you prefer).",
          "We cannot turn the plan on because of a problem on our side.",
        ]) },
        { h: "3. No refunds", body: ul([
          "A period already paid for once the plan is on, even if partly used. Every tool of the plan is available from the moment it starts.",
          "Moving to a smaller plan mid-period. The new plan starts with your next payment.",
          "Deleting your store or account yourself.",
          "A store suspended or closed for breaking the Terms of service.",
          "Money paid to other companies, such as couriers, SMS, domains or advertising. It never comes to us.",
        ]) },
        { h: "4. If we stop the service", body: p("If we close your store without a breach of the terms, or shut the service down, we refund every full month left in your paid period.") },
        { h: "5. How to ask", body: p(
          "Write to us on WhatsApp or by email with the store address, how you paid, the transaction ID and the number or account you paid from, within 30 days of the payment.",
          "We reply within 3 working days. Approved refunds are sent within 10 working days to the same bKash, Nagad or bank account the money came from. If the mistake was ours, we also pay the transfer charge.",
        ) },
      ],
    },
  },
};
