'use client';

import React from 'react';
import { motion } from 'motion/react';
import { parseTeamData, TeamData } from '@/lib/team-parser';
import ProfileCard from '@/components/ui/react-bits/ProfileCard/ProfileCard';
import ChromaGrid from '@/components/ui/react-bits/ChromaGrid';
import { NavbarComponent } from '../ui/navbar';

interface TeamPageProps {
  teamData?: TeamData;
}

export default function TeamPage({ teamData }: TeamPageProps) {
  const data = teamData!;

  console.log(data);

  return (
    <>
      <NavbarComponent className="z-50 mt-10" />
      <div
        className="min-h-screen mt-10 relative"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px',
          backgroundColor: 'black',
        }}
      >
        {/* Header */}
        <div className="relative py-20 px-6 mt-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Meet Our
              <span className="bg-clip-text  bg-gray-300 text-transparent">
                {' '}
                Team
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From experienced seniors to passionate juniors, discover the
              amazing people who make JLUG thrive
            </motion.p>
          </div>
        </div>

        {/* Seniors Section */}
        <div className="py-20 px-6 -mt-10">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-white text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Executive Council
            </motion.h2>
            <motion.div
              className="flex justify-center mb-12"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div
                className="h-1 w-32 rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, #3b82f6 25%, #8b5cf6 50%, #3b82f6 75%, transparent 100%)',
                  boxShadow:
                    '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
                }}
              ></div>
            </motion.div>
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {data.seniors.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-center p-4"
                  >
                    <ProfileCard
                      avatarUrl={member.image}
                      name={member.name}
                      title={member.role || ''}
                      bio={member.bio || member.skills || member.specialization}
                      linkedin={member.linkedin}
                      github={member.github}
                      instagram={member.instagram}
                      showUserInfo={true}
                      className="w-full max-w-sm mx-auto"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Juniors Section */}
          {/* <div className="py-20 px-6 relative"
       style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '20px 20px',
        backgroundColor: 'black'
      }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Executive Members
          </motion.h2>
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div 
              className="h-1 w-32 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #3b82f6 25%, #8b5cf6 50%, #3b82f6 75%, transparent 100%)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)'
              }}
            ></div>
          </motion.div>
          <div className="relative min-h-[600px]">
            <ChromaGrid members={data.juniors} />
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </>
  );
}
