import { Button } from "@/components/ui/button";
import { CgExport } from "react-icons/cg";
import { FiPlusCircle } from "react-icons/fi";

const EmailAccountsRoot = () => {
  return (
    <div>
      <section className="flex justify-between items-center">
        <Button variant="primary" size="lg">
          <FiPlusCircle className="text-xl" />
          Add new
        </Button>

        <Button variant="outline" size="lg">
          <CgExport className="text-xl" />
          Export
        </Button>
      </section>
    </div>
  );
};

export default EmailAccountsRoot;
