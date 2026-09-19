
const Disclaimer = () => {
  const containerStyle = {
    width: "100%",
    minHeight: "100vh",
    background: "#111827",
    color: "#f9fafb",
    padding: "clamp(25px, 5vw, 50px) clamp(15px, 4vw, 30px)",
    boxSizing: "border-box",
  };

  const sectionStyle = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: "#1f2937",
    border: "1px solid #374151",
    borderRadius: "12px",
    padding: "clamp(20px, 4vw, 30px)",
    boxSizing: "border-box",
    marginBottom: "20px",
  };

  const headingStyle = {
    color: "#60a5fa",
    fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
    marginTop: 0,
  };

  const textStyle = {
    color: "#d1d5db",
    lineHeight: "1.7",
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
    marginBottom: 0,
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(25px, 5vw, 40px)",
          }}
        >


          <h1
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
              margin: "0 0 10px",
              color: "#ffffff",
            }}
          >
            Disclaimer
          </h1>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              margin: 0,
            }}
          >
            Important information about using Electro.
          </p>
        </div>

        {/* General Disclaimer */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>General Disclaimer</h2>

          <p style={textStyle}>
            The information provided on Electro is for general
            informational and shopping purposes only. We make reasonable
            efforts to keep product information accurate and up to date,
            but we do not guarantee that all information, descriptions,
            images, prices, or specifications are completely accurate,
            current, or error-free.
          </p>
        </div>

        {/* Product Information */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>📦 Product Information</h2>

          <p style={textStyle}>
            Product images, descriptions, specifications, colors, sizes,
            availability, and other details may vary from the actual
            product. Manufacturers or suppliers may change product
            specifications without prior notice.
          </p>
        </div>

        {/* Pricing */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>💰 Pricing & Availability</h2>

          <p style={textStyle}>
            Prices and product availability may change at any time.
            Electro reserves the right to correct pricing or product
            information errors and to update or discontinue products
            without prior notice.
          </p>
        </div>

        {/* Third Party */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>🔗 Third-Party Information</h2>

          <p style={textStyle}>
            Electro may contain links or information related to
            third-party websites, services, or products. We are not
            responsible for the content, accuracy, availability, or
            practices of third-party websites.
          </p>
        </div>

        {/* Limitation */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>⚠️ Limitation of Responsibility</h2>

          <p style={textStyle}>
            Electro shall not be responsible for losses or damages
            resulting from reliance on inaccurate information, product
            availability, website interruptions, or other circumstances
            beyond our reasonable control.
          </p>
        </div>

        {/* Contact */}
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
          }}
        >
          <h2 style={headingStyle}>💬 Questions?</h2>

          <p style={textStyle}>
            If you have any questions regarding this disclaimer,
            please contact our support team.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Disclaimer;

