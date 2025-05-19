import { Timeline, Text } from "@mantine/core";
import {
  IconBrain,
  Icon3dCubeSphere,
  IconLock,
  IconRobot,
  IconCube,
  IconCloud,
  IconCoin,
  IconReceipt,
  IconDiscount,
} from "@tabler/icons-react";

const WorkHistoryTimeline = () => {
  const workHistory = [
    {
      company: "VERSES",
      position: "Staff Software Engineer",
      duration: "Aug 2023 - Jun 2024 · 11 mos",
      description:
        "Led a team in implementing and developing the HSML spec through the creation of the GENIUS platform. Architected and led the development of a vector-document-graph database as the knowledge storage engine for Genius. Invented HSQL (Hyper Spatial Query Language) for efficient querying of document-graph-vector data. Transformed HSML from a vague specification into a concrete, multi-schema embeddable document definition spec. Developed tooling to enhance HSML's utility for developers.",
      skills:
        "Rust (Programming Language) · Team Leadership · Database Development · HSML spec implementation · Query Language Design · Vector-Document-Graph Databases",
      icon: IconBrain,
    },
    {
      company: "VERSES",
      position: "Senior 3D Web Developer",
      duration: "Nov 2022 - Aug 2023 · 10 mos",
      description: "Contributed to the development of 3D web applications.",
      skills: "3D Web Development",
      icon: Icon3dCubeSphere,
    },
    {
      company: "Censys",
      position: "Senior Full Stack Engineer",
      duration: "Feb 2022 - Nov 2022 · 10 mos",
      description:
        "Introduced cross-product UI components and augmented testing workflows, reducing CI times from hours to approximately a dozen minutes, and reducing manual testing overhead. Implemented various front-end page designs, improving consistency across products and enhancing developer productivity.",
      skills:
        "UI Component Development · CI/CD Optimization · Front-end Development · React · TypeScript",
      icon: IconLock,
    },
    {
      company: "AI Redefined (AIR)",
      position: "Senior Full Stack Developer",
      duration: "Jan 2021 - Feb 2022 · 1 yr 2 mos",
      description:
        "Responsible for deploying AI systems on HPC clusters and developing front-end human interaction components for AI training and simulation systems. Created visualizations and game-like interfaces for gathering human data in simulated environments, including a smart city emergency services dispatching simulation and an infrastructure repair resource allocation simulator. Worked with GRPC, Babylon.js, React, Node, TypeScript, and interfaced with HPC environments.",
      skills:
        "GRPC · Babylon.js · React · Node.js · TypeScript · HPC · 3D Visualization · Simulation Interfaces",
      icon: IconRobot,
    },
    {
      company: "ESG Solutions",
      position: "Full Stack Developer",
      duration: "Jul 2019 - Dec 2020 · 1 yr 6 mos",
      description:
        "Developed and continuously improved an in-depth seismic analysis web portal using the Java EE stack. Complete with efficient and modern methods to store, retrieve, and massively compress seismic data, and 3D models, and display them on a clean React+Three.JS based web interface. Conducted geophysical analysis of seismic activity.",
      skills:
        "Java EE · React · Three.js · Seismic Data Analysis · Geophysical Analysis",
      icon: IconCube,
    },
    {
      company: "Stantive Technologies Group Inc.",
      position: "CMS Developer/Tier 1 Technical Support",
      duration: "Aug 2018 - Jun 2019 · 11 mos",
      description:
        "Provided tier 1 technical support for customers for the product Orchestra CMS on the Salesforce platform. Also participated in development of the product and product integrations for customers.",
      skills:
        "Salesforce · Orchestra CMS · Technical Support · CMS Development",
      icon: IconCloud,
    },
    {
      company: "MoneyMate Loan Software",
      position: "Full Stack Developer",
      duration: "Dec 2017 - Jun 2018 · 7 mos",
      description:
        "Reverse engineered and developed the front-end and back-end of software responsible for loan issuing, and tracking. Software written with Java + Spring Boot + Hibernate",
      skills: "Java · Spring Boot · Hibernate · Full Stack Development",
      icon: IconCoin,
    },
    {
      company: "Scripply",
      position: "Full Stack Developer",
      duration: "Apr 2017 - Dec 2017 · 9 mos",
      description:
        "Developed front end and back end functionality and graphic design for a new upcoming website, using vanilla PHP+JS",
      skills: "PHP · JavaScript · Full Stack Development · Graphic Design",
      icon: IconReceipt,
    },
    {
      company: "Daily Discount",
      position: "Full Stack Developer",
      duration: "May 2016 - Sep 2016 · 5 mos",
      description:
        "Developed the frontend and backend of an app that distributed coupons for local businesses. Using PHP+Smartface.io.",
      skills:
        "PHP · Smartface.io · Full Stack Development · Mobile App Development",
      icon: IconDiscount,
    },
  ];

  return (
    <Timeline active={workHistory.length - 1} bulletSize={24} lineWidth={2}>
      {workHistory.map((job, index) => (
        <Timeline.Item
          key={index}
          bullet={<job.icon size={12} />}
          title={`${job.position} at ${job.company}`}
        >
          <Text c="dimmed" size="sm">
            {job.description}
          </Text>
          <Text size="xs" mt={4}>
            {job.duration}
          </Text>
          {job.skills && (
            <Text size="xs" mt={4}>
              Skills: {job.skills}
            </Text>
          )}
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default WorkHistoryTimeline;
