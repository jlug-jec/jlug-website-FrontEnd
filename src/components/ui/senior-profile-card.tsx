'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { TeamMember } from '@/lib/team-parser';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

interface SeniorProfileCardProps {
  member: TeamMember;
}

export default function SeniorProfileCard({ member }: SeniorProfileCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Profile Image */}
      <div className="relative mb-4">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-600/50 group-hover:border-blue-500/50 transition-colors duration-300">
          <Image
            src={
              imageError ? '/assets/members/default-avatar.jpg' : member.image
            }
            alt={member.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        {member.role && (
          <p className="text-blue-400 font-medium text-sm mb-2">
            {member.role}
          </p>
        )}
        {(member.branch || member.department) && (
          <p className="text-gray-400 text-sm mb-2">
            {member.branch || member.department}
          </p>
        )}
      </div>

      {/* Skills/Specialization */}
      {(member.skills || member.specialization) && (
        <div className="mb-4">
          <p className="text-gray-300 text-sm leading-relaxed">
            {member.skills || member.specialization}
          </p>
        </div>
      )}

      {/* Social Links */}
      <div className="flex justify-center gap-3">
        {member.linkedin && (
          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
          </motion.a>
        )}
        {member.github && (
          <motion.a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-600/20 hover:bg-gray-600/30 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4 text-gray-400" />
          </motion.a>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
