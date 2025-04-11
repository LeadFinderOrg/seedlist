interface BulkOptionsPropsTypes {
    label: string;
};

export const BulkOptions: React.FC<BulkOptionsPropsTypes> = ({ label }) => (
    <div className="flex items-center space-x-2">
        <span>{label}</span>
    </div>
);