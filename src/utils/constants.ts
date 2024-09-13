const apiUrl =
  "https://lir7cwdywd.execute-api.us-east-1.amazonaws.com/Prod/contact/";

const services = [
  {
    name: "Web Development",
    heading:
      "We build customized websites to meet your specific business needs.",
    features: [
      {
        heading: "User-Centric Design",
        text: "Websites that prioritize ease of use and a seamless user experience.",
      },
      {
        heading: "Scalability",
        text: "Websites built to grow with your business, handling increased traffic and new features with ease.",
      },
      {
        heading: "Performance Optimization",
        text: "Fast-loading, responsive websites that keep users engaged.",
      },
      {
        heading: "Security",
        text: "Robust protection for your website, ensuring data safety and privacy.",
      },
      {
        heading: "SEO-Friendly",
        text: "Optimized for search engines to increase visibility and drive traffic.",
      },
    ],
  },
  {
    name: "Mobile App Development",
    heading:
      "We create mobile apps designed to enhance user engagement and simplify tasks.",
    features: [
      {
        heading: "Cross-Platform Compatibility",
        text: "Apps that work seamlessly across iOS and Android.",
      },
      {
        heading: "Intuitive Interfaces",
        text: "Easy-to-use apps with a focus on user experience.",
      },
      {
        heading: "High Performance",
        text: "Fast and reliable apps that users can count on.",
      },
      {
        heading: "Custom Features",
        text: "Tailored to your specific needs, from unique workflows to specialized integrations.",
      },
      {
        heading: "Ongoing Support",
        text: "Continuous updates and support to keep your app running smoothly.",
      },
    ],
  },
];

export { apiUrl, services };
