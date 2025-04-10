interface UploadOptionsPropsTypes {
    label: string;
};

export const UploadOptions: React.FC<UploadOptionsPropsTypes> = ({ label }) => (
    <div className="flex items-center space-x-2">
        <span>{label}</span>
    </div>
);