import { motion } from 'framer-motion';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  src: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, category, src }) => {
  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };
  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden shadow-lg mx-3"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <motion.img
        className="h-[150px] w-auto"
        src={src}
        alt={name}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloremque.</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {category}
        </span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
