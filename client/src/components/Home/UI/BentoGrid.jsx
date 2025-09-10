import { cn } from "../../../lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-2xl transition-all duration-500 shadow-lg hover:shadow-yellow-500/10 bg-white border border-gray-200 hover:border-yellow-300 justify-between flex flex-col space-y-4 hover:scale-[1.02] backdrop-blur-sm",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition-all duration-300 p-6">
        <div className="flex items-center space-x-3 mb-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-100 to-orange-100 group-hover/bento:from-yellow-200 group-hover/bento:to-orange-200 transition-all duration-300">
            {icon}
          </div>
          <div className="font-sans font-bold text-gray-800 text-lg group-hover/bento:text-gray-900 transition-colors">
            {title}
          </div>
        </div>
        <div className="font-sans font-normal text-gray-600 text-sm leading-relaxed group-hover/bento:text-gray-700 transition-colors">
          {description}
        </div>
      </div>
    </div>
  );
};
