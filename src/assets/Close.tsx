interface IconProps {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Close = ({ size = 24, className = "", onClick }: IconProps) => {
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
        d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
      />
    </svg>
  );
};
