import React from "react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SlideIn } from "@/components/SlideIn";
import { Skater } from "./Skater";
import { SKATERS } from "./constants";

export const TeamGrid = async () => {
  return (
    <Bounded className="bg-texture bg-brand-navy relative z-10">
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          The Team
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {SKATERS.map((skater) => (
          <React.Fragment key={`${skater.firstName}-${skater.lastName}`}>
            <SlideIn>
              <Skater {...skater} />
            </SlideIn>
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};
