import React from 'react';

type MemberCardProps = {
  profile: string;
  name: string;
  designation: string;
  branch?: string;
};

const MemberCard = (props: MemberCardProps) => {
  return (
    <div className="my-5 mx-10 text-white">
      <div className="flex flex-col items-center group">
        <img
          src={props.profile}
          alt={`${props.name} - ${props.designation}`}
          className="h-64 w-64 rounded-full grayscale cursor-pointer transition-all group-hover:grayscale-0"
        />
        <h2 className="mt-7 text-2xl text-center">{props.name}</h2>
        <p className="text-lg font-thin tracking-widest text-gray-200 text-center">
          {props.designation}
        </p>
        {props.branch && (
          <p className="text-lg font-thin tracking-widest text-gray-200 text-center">
            {props.branch}
          </p>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
