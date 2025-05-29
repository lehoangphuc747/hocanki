import React, { useState } from "react";
import CustomHeader from "@site/src/components/CustomHeader/CustomHeader"; // Import header component
import PureHero from "@site/src/components/PureHero/PureHero"; // Import hero banner component
import PricingTable from "@site/src/components/PricingTable/PricingTable"; // Import pricing table component

const App = () => {
  // Configure the header menu
  const headerMenuItems = [
    { label: "Tài liệu", link: "/docs/intro" },
    { label: "Blog", link: "/blog" },
    { label: "Demo", link: "/demo/cards" },
  ];

  const handleMenuClick = () => {
    console.log("Đã nhấn vào menu trên di động!");
  };

  const handleSearchClick = () => {
    alert("Đã nhấn vào nút tìm kiếm!");
  };

  // Configure the pricing table data
  const [billingToggle, setBillingToggle] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      features: [
        "Live chat widget",
        "Email marketing",
        "Custom forms",
        "Traffic analytics",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      monthlyPrice: 29,
      yearlyPrice: 21.75, // 25% discount for yearly billing
      features: [
        "Everything in basic",
        "Marketing automation",
        "Advanced chatbot",
        "Campaign management",
        "Collaboration tools",
      ],
      highlighted: true, // Highlight this plan
    },
    {
      name: "Platinum",
      monthlyPrice: 59,
      yearlyPrice: 44.25, // 25% discount for yearly billing
      features: [
        "Everything in premium",
        "A/B testing sandbox",
        "Custom permissions",
        "Social media automation",
        "Sales automation tools",
      ],
      highlighted: false,
    },
  ];

  const toggleBilling = () => {
    setBillingToggle((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <div>
      {/* Header Section */}
      <CustomHeader
        logo="https://docusaurus.io/img/docusaurus_keytar.svg"
        menuItems={headerMenuItems}
        textColor="#ffffff"
        onMenuClick={handleMenuClick}
        onSearchClick={handleSearchClick}
      />

      {/* Hero Section */}
      <PureHero
        title="Minh hoạ PricingTable Component"
        subtitle="Trình bày bảng giá sản phẩm/dịch vụ"
        backgroundImage="https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        buttonText="Khám phá"
        buttonLink="#" // Add the target link here
        contentWidth="60%"
        contentPosition="center"
        titleColor="#ffffff"
        subtitleColor="#f0f0f0"
        buttonColor="#ffffff"
        navColor="#ffffff"
      />

      {/* Pricing Table Section */}
    <PricingTable
      title="Choose the best plan designed for your needs"
      highlightWords={["designed"]} // Danh sách các từ sẽ được highlight, ngăn cách bởi dấu phẩy
      toggleLabels={{ monthly: "Monthly", yearly: "Yearly" }}
      saveText="Get 25% Off!"
      plans={plans}
      billingToggle={billingToggle}
      onBillingChange={toggleBilling}
      highlightColor="#ff5722"
      backgroundColor="#f5f5f5"
      textColor="#222"
    />
    
    </div>
  );
};

export default App;
