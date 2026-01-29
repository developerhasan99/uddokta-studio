import React from "react";
import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp";

export default function WhatsappButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="8801712345678"
      accountName="Uddokta Studio"
      avatar=""
      statusMessage="Typically replies within 1 hour"
      chatMessage="Hello! 👋 How can we help you today?"
      darkMode={false}
      allowClickAway={true}
      allowEsc={true}
      notification={true}
      notificationSound={true}
    />
  );
}
