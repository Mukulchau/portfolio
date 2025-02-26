"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: "PassOP",
    description: 'It is password manager which website url username and password and save to mongodb Using Express and React.',
    link: '/project',
    imageUrl: '/Screenshot 2024-09-07 181548.png'
  },
  {
    title: 'iTask',
    description: 'It is todo App with functionlity task mark as done show not finshed task.Using Express Mongodb and React.',
    link: '/project',
    imageUrl: '/Screenshot 2024-09-07 181829.png'
  },
  {
    title: 'Music Player',
    description: 'It is music player using html css and javascript and Bootstrap.in which we can play song and cut duration nad volume of sound. ',
    link: '/project',
    imageUrl: '/Screenshot 2024-09-07 182348.png'
  },

  // Add more projects as needed
  {
    title: 'iWeather',
    description: 'It a weather app in which you can your city weather.Using tailwind css and React for frontend in backend weather API.',
    link: '/project',
    imageUrl: '/Screenshot 2024-09-07 182100.png'
  },
  {
    title: 'Semon Game',
    description: 'It is a game of memorization using hltml css and javascript. This a good project to learn concept in javascript(Dom manipulation).',
    link: '/project',
    imageUrl: '/Screenshot 2024-09-07 182936.png'
  },
  {
    title: 'Chat App',
    description: 'This is a basic chat app in which we can edit chat delete chat and add chat in which we use Express and Ejs templet and Restfull API.',
    link: '/project',
    imageUrl: '/Screenshot 2024-09-07 183741.png'
  },
  {
    title: 'Social app',
    description: 'This is a basic social app in which we can search for a specific user and get all detals like comment post follower(Express Restful API)',
    link: '/project',
    imageUrl: '/Screenshot 2024-09-07 215534.png'
  },
  {
    title: 'Hambar Menu',
    description: 'This is a hambar using only Css which is good to clear css checkbox concept and position absolute in css.',
    link: '/project',
    imageUrl: '/Screenshot 2024-09-07 182858.png'
  },
  {
    title: 'Subscription Card',
    description: 'This is a subscription sectionh which contain three types membership.we style this using BootStrap.',
    link: '/project',
    imageUrl: '/Screenshot 2024-09-07 183112.png'
  },
];

const Project = () => {
  return (
    <div className="min-h-screen p-2">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-500">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className=" p-6 rounded-lg  shadow-lg transform transition duration-500 hover:border hover:border-purple-400 dark:border border-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image src={project.imageUrl} alt={project.title} height={'192'} width={'400'} className="w-full h-48 object-cover rounded-t-lg mb-2" />
            <h2 className="text-2xl font-bold mb-2 text-purple-500">{project.title}</h2>
            <p className=" mb-4">{project.description}</p>
            <Button asChild>
       <Link href="/project">View Project</Link>
          </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
