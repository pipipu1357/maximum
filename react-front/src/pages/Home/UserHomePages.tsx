import React from "react";
import Button from "../../components/Button";


interface UserHomePagesProps {
    title: string;
}

const UserHomePages: React.FC<UserHomePagesProps> = ({ title }) => {
    const handleButtonClick = () => {
        alert("ボタンがクリックされました！");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="mb-4 text-2xl font-bold">{title}</h1>
            <Button
                label="テストボタン"
                onClick={handleButtonClick}
                className="hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
};

export default UserHomePages;