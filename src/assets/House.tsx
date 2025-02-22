interface IconProps {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const House = ({ size = 24, onClick, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 17v-5.547c0-.535 0-.802-.065-1.05a1.999 1.999 0 0 0-.28-.618c-.145-.213-.345-.389-.748-.74l-4.8-4.2c-.746-.654-1.12-.98-1.54-1.105-.37-.11-.764-.11-1.135 0-.42.124-.792.45-1.538 1.103L5.093 9.044c-.402.352-.603.528-.747.741a2 2 0 0 0-.281.617C4 10.652 4 10.918 4 11.452v5.549c0 .931 0 1.397.152 1.765a2 2 0 0 0 1.082 1.083C5.602 20 6.068 20 7 20s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C10 18.398 10 17.932 10 17v-1a2 2 0 1 1 4 0v1c0 .931 0 1.397.152 1.765a2 2 0 0 0 1.082 1.083C15.602 20 16.068 20 17 20s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C20 18.398 20 17.933 20 17Z"
      />
    </svg>
  );
};
