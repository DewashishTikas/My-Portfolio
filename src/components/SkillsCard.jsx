
const SkillCard = ({ image, text }) => {
  return (
    <div className=" bg-gray-800/20 backdrop-blur-md rounded-lg p-6 mb-5 flex flex-col  items-center justify-center transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={text} className="h-20 w-20 mb-4" />
      <p className="text-white text-lg font-semibold">{text}</p>
    </div>
  );
};

export default SkillCard;