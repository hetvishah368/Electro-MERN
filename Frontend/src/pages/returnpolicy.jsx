
const ReturnPolicy = () => {
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
            Return Policy
          </h1>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              margin: 0,
            }}
          >
            Simple and transparent returns at Electro.
          </p>
        </div>

        {/* Policy */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>🔄 Our Return Policy</h2>

          <p style={textStyle}>
            At Electro, we want you to have a satisfactory shopping
            experience. If you receive a damaged, defective, incorrect,
            or eligible product, you may request a return according to
            the conditions mentioned below.
          </p>
        </div>

        {/* Eligibility */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>✅ Return Eligibility</h2>

          <p style={textStyle}>
            A product may be eligible for return if it is damaged,
            defective, incorrect, or does not match the product ordered.
            The product should generally be unused and returned with
            its original packaging, accessories, manuals, and other
            included items.
          </p>
        </div>

        {/* Return Period */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>📅 Return Period</h2>

          <p style={textStyle}>
            Return requests should be submitted within the return
            period specified on the product or order details. Requests
            submitted after the applicable return period may not be
            accepted.
          </p>
        </div>

        {/* Non Returnable */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>❌ Non-Returnable Products</h2>

          <p style={textStyle}>
            Certain products may not be eligible for return due to
            their nature, condition, hygiene requirements, customized
            specifications, or other applicable restrictions. The
            return eligibility shown on the product or order page will
            apply.
          </p>
        </div>

        {/* Damaged */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>📦 Damaged or Incorrect Product</h2>

          <p style={textStyle}>
            If you receive a damaged or incorrect product, please
            contact us as soon as possible with your order details and
            clear photographs or other relevant information. This
            helps us review the issue and provide an appropriate
            solution.
          </p>
        </div>

        {/* Refund */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>💳 Refunds</h2>

          <p style={textStyle}>
            Once a returned product is received and inspected, we will
            determine whether it qualifies for a refund. Approved
            refunds will be processed according to the original
            payment method and applicable payment processing timelines.
          </p>
        </div>

        {/* Exchange */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>🔁 Exchanges</h2>

          <p style={textStyle}>
            Exchanges may be available for eligible products depending
            on product availability. If the requested replacement is
            unavailable, another suitable resolution may be offered.
          </p>
        </div>

        {/* Contact */}
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
          }}
        >
          <h2 style={headingStyle}>💬 Need Help?</h2>

          <p style={textStyle}>
            If you have any questions about returns or refunds, please
            contact our support team with your order details.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ReturnPolicy;

