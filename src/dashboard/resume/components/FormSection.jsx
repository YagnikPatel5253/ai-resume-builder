import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summery from "./forms/Summery";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1); // Set initial active form to 1
  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        {/* Theme button */}
        <Button className="flex gap-2 text-sm border border-gray-300 rounded-md">
          <LayoutGrid /> Theme
        </Button>

        <div className="flex gap-2">
          {/* Back Button */}
          {activeFormIndex > 1 && (
            <Button
              className="flex items-center gap-2 bg-primary text-white text-sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}

          {/* Next Button */}
          <Button
            disabled={!enableNext} // Disable Next button until all fields are filled
            className="flex items-center gap-2 bg-primary text-white text-sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Render PersonalDetail form */}
      {activeFormIndex === 1 ? (
        <PersonalDetail enableNext={(v)=>setEnableNext(v)} />
      ) : activeFormIndex == 2? <Summery enableNext={(v)=>setEnableNext(v)}/>:null}
    </div>
  );
}

export default FormSection;
