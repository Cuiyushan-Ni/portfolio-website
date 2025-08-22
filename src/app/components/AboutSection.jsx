"use client"
import React, { useState, useTransition }  from 'react'
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>C++</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>University of Toronto</li>
                <li>Major in Computer Engineering</li>
                <li>Minor in Artificial Intelligence</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Developer</li>
                <li>Data Analyst</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=> {
            setTab(id);
        });
    }
  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-section.png" alt="a image" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg"> 
                    As a Full Stack Developer, I'm looking to join Promise Robotics where I can apply my knowledge of web development 
principles, databases, and software engineering methodologies to deliver high-quality products.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> 
                       {" "} 
                       Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> 
                        {" "} 
                        Education {" "} 
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> 
                        {" "} 
                        Experience {" "} 
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection