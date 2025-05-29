import React from "react";
import styles from "./PricingTable.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSeedling, faChessQueen } from "@fortawesome/free-solid-svg-icons"; // Icons for plans
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // Check icon for features

const PricingTable = ({
  title = "Tailored pricing plans designed for you",
  highlightWords = ["Tailored", "designed", "you"], // Words to highlight
  toggleLabels = { monthly: "Pay Monthly", yearly: "Pay Yearly" },
  saveText = "Save 25%",
  plans,
  billingToggle,
  onBillingChange,
  highlightColor = "#f97316",
  backgroundColor = "#f9f9f9",
  textColor = "#333",
}) => {
  const planIcons = [faSeedling, faLeaf, faChessQueen]; // Default icons

  // Helper to render the title with highlighted words
  const renderHighlightedTitle = () => {
    return title.split(" ").map((word, idx) => {
      if (highlightWords.includes(word)) {
        return (
          <span key={idx} style={{ color: highlightColor }}>
            {" " + word}
          </span>
        );
      }
      return " " + word;
    });
  };

  return (
    <div
      className={styles.pricingTableContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Title */}
      <h2
        className={styles.pricingTitle}
        style={{ color: textColor }}
      >
        {renderHighlightedTitle()}
      </h2>

      {/* Billing Toggle */}
      <div className={styles.billingToggleWrapper}>
        <span
          className={`${styles.toggleLabel} ${
            billingToggle === "monthly" ? styles.active : ""
          }`}
          style={{ color: billingToggle === "monthly" ? textColor : "#bcbcbc" }}
        >
          {toggleLabels.monthly}
        </span>
        <div
          className={`${styles.toggleContainer} ${
            billingToggle === "yearly" ? styles.yearly : ""
          }`}
          style={{ background: highlightColor }}
          onClick={onBillingChange}
        >
          <div className={styles.toggleBullet}></div>
        </div>
        <span
          className={`${styles.toggleLabel} ${
            billingToggle === "yearly" ? styles.active : ""
          }`}
          style={{ color: billingToggle === "yearly" ? textColor : "#bcbcbc" }}
        >
          {toggleLabels.yearly}
        </span>
      </div>

      {/* Save Badge */}
      <span className={styles.saveBadge} style={{ color: highlightColor }}>
        {saveText}
      </span>

      {/* Plans Grid */}
      <div className={styles.plansGrid}>
        {plans.map((plan, index) => (
          <div
            className={`${styles.planCard} ${
              plan.highlighted ? styles.highlightedOutline : ""
            }`}
            key={index}
            style={{
              border: plan.highlighted
                ? `2px solid ${highlightColor}`
                : "1px solid #e5e7eb",
              background: plan.highlighted
                ? `linear-gradient(0deg, rgba(255, 87, 34, 0.05), rgba(255, 87, 34, 0.02)), url("/img/abstract-lines.svg") no-repeat right bottom`
                : "#ffffff",
            }}
          >
            {/* Plan Header */}
            <div className={styles.planHeader}>
              <FontAwesomeIcon
                icon={planIcons[index]}
                className={styles.planIcon}
                style={{ color: highlightColor }}
              />
              <h3 className={styles.planName} style={{ color: textColor }}>
                {plan.name}
              </h3>
              <p className={styles.planPrice} style={{ color: textColor }}>
                {billingToggle === "yearly"
                  ? `$${plan.yearlyPrice}`
                  : `$${plan.monthlyPrice}`}
                <span>/month</span>
              </p>
            </div>

            {/* Plan Features */}
            <ul className={styles.featuresList}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={styles.checkIcon}
                    style={{ color: "#4caf50" }}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Get Started Button */}
            <div className={styles.buttonWrapper}>
              <button
                className={styles.getStartedBtn}
                style={{ backgroundColor: highlightColor }}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
