"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function BlogPage() {
  const [posts] = useState([
    {
      title: "How to Build a React App",
      author: "John Doe",
      date: "2025-02-02",
      content:
        "In this post, we will go over the basics of building a React application from scratch. React is a powerful JavaScript library for building user interfaces. We will create components, handle state and props, and set up routing for a multi-page application. React’s declarative nature makes it easy to build interactive UIs, and its component-based structure helps developers create reusable components for better maintainability. We will cover setting up a project using Create React App, writing components, and styling them with CSS modules. By the end of this tutorial, you'll have a solid understanding of how React works and be ready to build your own apps. Additionally, React’s ecosystem offers a variety of tools such as React Router, Redux for state management, and Next.js for server-side rendering, which we will touch on as well to give you a broad overview of the options available.",
    },
    {
      title: "Understanding Tailwind CSS",
      author: "Jane Smith",
      date: "2025-01-15",
      content:
        "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs quickly. It eliminates the need to write custom CSS, enabling developers to rapidly design and style web pages without leaving the HTML file. Tailwind's philosophy is that it allows you to style elements directly in your HTML, offering fine-grained control over each element. In this post, we will explore how to set up Tailwind CSS in a React project, utilize its utility classes for layout, typography, and design, and build a small webpage with Tailwind. You’ll also learn how to customize your theme and create responsive designs effortlessly. Tailwind CSS removes the need for naming conventions in class selectors, which makes it easier for teams to maintain large-scale projects. We will also discuss the use of components like buttons, forms, and grids, all of which can be easily styled using Tailwind’s predefined classes.",
    },
    {
      title: "The Rise of AI and Machine Learning in 2025",
      author: "Alice Johnson",
      date: "2025-01-30",
      content:
        "Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries. These technologies are being used to automate processes, improve decision-making, and analyze large sets of data. In this post, we explore how AI and ML are making waves in sectors like healthcare, finance, education, and even entertainment. In healthcare, AI algorithms are being used to diagnose diseases, predict patient outcomes, and assist in drug discovery. In finance, ML models help in fraud detection, stock market predictions, and risk management. We’ll also dive into the ethical implications of AI and ML, exploring topics such as bias in algorithms, privacy concerns, and the potential for job displacement. The future of AI and ML holds promise for enhancing human capabilities, but it’s crucial that we establish frameworks for ethical and responsible development. We will also highlight some cutting-edge applications of AI in robotics, natural language processing, and autonomous vehicles, which are pushing the boundaries of what AI can achieve.",
    },
    {
      title: "Exploring Blockchain Technology and Its Impact",
      author: "Michael Lee",
      date: "2025-01-25",
      content:
        "Blockchain technology is more than just the foundation for cryptocurrencies. It’s a decentralized, secure, and transparent method of recording transactions and verifying data. This blog post will dive deep into the principles of blockchain, explaining how it works, and the benefits it offers beyond cryptocurrency. Blockchain is being used to create decentralized applications (DApps) and smart contracts, with applications spanning from finance to supply chains and even voting systems. We’ll take a look at the potential benefits and challenges of adopting blockchain in these industries, and how it’s helping businesses build trust and transparency in their operations. The post will also discuss real-world use cases of blockchain, such as improving supply chain management by tracking goods from production to delivery and enhancing data privacy with personal identity verification systems. Furthermore, we’ll explore the potential of blockchain in creating decentralized finance (DeFi) platforms, which allow users to trade and lend without traditional intermediaries like banks.",
    },
    {
      title: "The Future of Cloud Computing: Trends to Watch",
      author: "Emily Davis",
      date: "2025-01-20",
      content:
        "Cloud computing continues to evolve, with new trends and innovations emerging every year. From serverless computing to edge computing, the cloud landscape is changing rapidly. In this post, we will take a look at the emerging cloud technologies that are expected to shape the future. Serverless computing, for example, allows developers to focus on writing code without managing servers. Edge computing brings data processing closer to users to reduce latency and improve performance. Multi-cloud strategies, where businesses use multiple cloud providers, are also gaining popularity for increased flexibility and redundancy. We will also explore how these trends are revolutionizing business operations and IT infrastructure. Cloud-native applications are becoming more common as businesses leverage cloud services for scalability, cost reduction, and innovation. With the integration of AI and ML into cloud platforms, organizations are gaining access to advanced analytics and automation features, making it easier to gain insights and improve decision-making. This post will also address the rise of hybrid cloud environments and their role in combining the benefits of public and private clouds.",
    },
    {
      title: "5G Technology: How It Will Change the Internet of Things",
      author: "Chris Martin",
      date: "2025-01-18",
      content:
        "With the advent of 5G technology, the Internet of Things (IoT) is set for a major transformation. 5G offers ultra-fast data speeds, lower latency, and more reliable connections, making it ideal for powering IoT devices. In this post, we will explore how 5G technology will enable faster, more efficient IoT devices, driving innovation across industries. From smart homes to self-driving cars and healthcare devices, the potential applications of 5G-connected IoT are limitless. We’ll discuss the role of low-latency communication in enabling real-time data transmission between IoT devices and the cloud, and how it will allow for more sophisticated applications in sectors like healthcare, transportation, and manufacturing. Additionally, we’ll examine how 5G will facilitate the development of autonomous systems, enabling machines to make faster decisions and interact with their environment in real-time. Finally, we’ll address the challenges of implementing 5G networks, including infrastructure costs, spectrum management, and the need for advanced security solutions to protect these highly connected devices.",
    },
    {
      title: "Cybersecurity Trends and Best Practices for 2025",
      author: "Sarah Green",
      date: "2025-01-14",
      content:
        "As cyber threats become more sophisticated, staying ahead in cybersecurity is more critical than ever. In this post, we’ll discuss the latest trends in cybersecurity, including the use of AI-driven defense mechanisms, zero-trust networks, and automated incident response. One of the main focuses in cybersecurity is preventing breaches through proactive threat detection and response. With more businesses adopting cloud-based solutions, securing data in the cloud has become a priority. We’ll also discuss best practices for businesses and individuals to protect themselves from cyberattacks, as well as the rising importance of privacy and data protection regulations. AI is being used to analyze network traffic and identify patterns of malicious activity, providing faster detection and response. Zero-trust security models, which assume that no user or device is inherently trusted, are becoming a standard for securing corporate networks. We will also touch on the growing importance of employee training in cybersecurity, as human error remains one of the leading causes of data breaches.",
    },
    {
      title: "The Evolution of Augmented Reality (AR) and Virtual Reality (VR)",
      author: "David Brown",
      date: "2025-01-10",
      content:
        "Augmented Reality (AR) and Virtual Reality (VR) are changing the way we interact with digital content. Initially popularized by the gaming industry, these technologies are now being applied to education, healthcare, retail, and other fields. In this post, we will explore how AR and VR are being used in various industries and how they are transforming user experiences. We’ll discuss the differences between AR and VR, their technical challenges, and their potential applications. From virtual shopping experiences to medical training simulations, AR and VR are opening up new opportunities for businesses and consumers alike. For instance, AR is used in retail to provide customers with virtual try-ons for clothing or makeup, while VR is being used for immersive medical training and virtual therapy sessions. We’ll explore how VR gaming is evolving with the help of haptic feedback and motion-sensing controllers, creating more immersive experiences. As AR and VR technology becomes more affordable, we expect to see more widespread adoption in everyday life, such as in remote work scenarios and virtual tourism.",
    },
    {
      title: "Quantum Computing: What You Need to Know",
      author: "Lisa Turner",
      date: "2025-01-05",
      content:
        "Quantum computing is one of the most exciting and rapidly developing fields in technology. Unlike traditional computing, which relies on bits to store data, quantum computers use quantum bits (qubits) that can exist in multiple states at once. This allows quantum computers to process complex calculations at a speed far beyond the capabilities of classical computers. In this post, we’ll explain the basics of quantum computing, its potential applications in cryptography, drug discovery, and optimization problems, and the challenges that come with developing these powerful machines. Quantum computing has the potential to solve problems that are currently unsolvable, such as simulating molecular interactions for drug discovery and optimizing supply chain logistics. We will also discuss the efforts by leading tech companies like Google, IBM, and Microsoft to develop quantum computers, as well as the roadblocks they face, such as qubit stability and error correction. Although we are still in the early stages of quantum computing, its future impact on industries like pharmaceuticals, finance, and cybersecurity is immense.",
    },
  ]);

  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const handlePostClick = (index: number) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Tech Blog</h1>

        {/* Display all blog posts */}
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-600">
              By {post.author} | {post.date}
            </p>

            <p className="mt-4 text-lg">
              {expandedPost === index ? post.content : post.content.slice(0, 200) + "..."}
            </p>

            <button
              onClick={() => handlePostClick(index)}
              className="mt-4 text-[#b36d34] hover:underline"
            >
              {expandedPost === index ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
