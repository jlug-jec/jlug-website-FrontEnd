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
          className="h-64 w-64 rounded-full grayscale cursor-pointer transition-all group-hover:grayscale-0"
        />
        <h3 className="mt-7 text-2xl text-center">{props.name}</h3>
        <h5 className="text-lg font-thin tracking-widest text-gray-200 text-center">
          {props.designation}
        </h5>
        <h5 className="text-lg font-thin tracking-widest text-gray-200 text-center">
          {props.branch}
        </h5>
      </div>
    </div>
  );
};

export default MemberCard;
