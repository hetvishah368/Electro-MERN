

const About = () => {
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
            About Electro
          </h1>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              margin: 0,
            }}
          >
            Your trusted destination for modern electronics.
          </p>
        </div>

        {/* About */}
        <div
          style={{
            ...cardStyle,
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: "#60a5fa",
              fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
              marginTop: 0,
            }}
          >
            Who We Are
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.7",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              marginBottom: 0,
            }}
          >
            Electro is an electronics shopping platform designed to
            make finding the right technology simple and convenient.
            We provide quality electronic products while focusing
            on a smooth and enjoyable shopping experience.
          </p>
        </div>

        {/* Mission + Vision */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={cardStyle}>
            <h2
              style={{
                color: "#60a5fa",
                marginTop: 0,
                fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              }}
            >
              🎯 Our Mission
            </h2>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
                marginBottom: 0,
              }}
            >
              To make technology shopping easy, reliable, and
              accessible for everyone.
            </p>
          </div>

          <div style={cardStyle}>
            <h2
              style={{
                color: "#60a5fa",
                marginTop: 0,
                fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              }}
            >
              🚀 Our Vision
            </h2>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
                marginBottom: 0,
              }}
            >
              To create a trusted place where people can discover
              technology that makes everyday life better.
            </p>
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: "#60a5fa",
              marginTop: 0,
              fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
            }}
          >
            Why Choose Electro?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "15px",
              marginTop: "25px",
            }}
          >
            <div>
              <div style={{ fontSize: "28px" }}>⚡</div>
              <h3>Quality</h3>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                Reliable products
              </p>
            </div>

            <div>
              <div style={{ fontSize: "28px" }}>🛒</div>
              <h3>Easy Shopping</h3>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                Simple experience
              </p>
            </div>

            <div>
              <div style={{ fontSize: "28px" }}>🔒</div>
              <h3>Secure</h3>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                Safe shopping
              </p>
            </div>

            <div>
              <div style={{ fontSize: "28px" }}>💬</div>
              <h3>Support</h3>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                We're here to help
              </p>
            </div>
          </div>
        </div>

    
       

      </div>
    </div>
  );
};

export default About;


