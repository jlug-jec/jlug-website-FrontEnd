import { TeamMember } from "@/features/members/types";
import Image from "next/image";
import Link from "next/link";

interface IDCardProps {
  member: TeamMember;
  href?: string;
  onClick?: () => void;
}

export default function IDCard({ member, href, onClick }: IDCardProps) {
  const content = (
    <div className="border border-jlug-line p-4 h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between font-mono text-[0.65rem] text-jlug-gray-1 border-b border-jlug-line pb-2 mb-4">
          <span>ID: 026_{String(member.id).padStart(2, '0')}</span>
          <span className="text-jlug-accent">ACTIVE</span>
        </div>
        <div className="w-full aspect-[3/4] bg-jlug-surface mb-4 relative overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            unoptimized
            className="object-cover transition-all duration-300"
            style={{
              objectFit: "cover",
              objectPosition: member.objectPosition || "center center",
              transform: `scale(${member.imageScale || 1})`,
            }}
          />
        </div>
        <h3 className="text-xl font-bold uppercase mb-1 text-jlug-white group-hover:text-jlug-accent transition-colors">
          {member.name}
        </h3>
        <p className="font-mono text-xs text-jlug-gray-1 uppercase tracking-wide">
          {member.role}
        </p>
      </div>

      {member.bio && (
        <p className="font-mono text-[0.7rem] text-jlug-gray-2 mt-4 line-clamp-2">
          {member.bio}
        </p>
      )}
    </div>
  );

  const baseClassName = "group relative bg-jlug-black border border-jlug-line p-1 hover:border-jlug-accent transition-colors text-left h-full block";

  if (href) {
    return (
      <Link href={href} className={`${baseClassName} cursor-pointer`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" className={`${baseClassName} cursor-pointer`} onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <div className={baseClassName}>
      {content}
    </div>
  );
}
