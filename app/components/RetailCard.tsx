interface CardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

const RetailCard: React.FC<CardProps> = ({ icon, title, content }) => (
    <div className="bg-primary-black p-4 rounded-md shadow-md shadow-blue-400 flex flex-col items-start">
        <div className="flex items-center mb-4">
            <div className="mr-4 text-blue-400">{icon}</div>
            <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <p className="flex items-center justify-center w-full h-full">{content}</p>
    </div>
);

export default RetailCard;