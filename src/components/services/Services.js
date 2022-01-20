import React from "react";
import { Button } from "../../Globalstyle";
import { GiCrystalBars } from "react-icons/gi";
import { GiConsoleController, GiTeamIdea } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Services_style";

function Services() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiConsoleController />
                </PricingCardIcon>
                <PricingCardPlan>Game Development</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Videogames are our passion
                  </PricingCardFeature>
                  <PricingCardFeature>
                    We can build a fantastic world
                  </PricingCardFeature>
                  <PricingCardFeature>Just for you</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>GAME PORTING</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Want to see your game</PricingCardFeature>
                  <PricingCardFeature>on consoles ?</PricingCardFeature>
                  <PricingCardFeature>We can make it real</PricingCardFeature>
                  <PricingCardFeature>on any platform.</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiTeamIdea />
                </PricingCardIcon>
                <PricingCardPlan>ASSISTANCE</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Need anything else ?</PricingCardFeature>
                  <PricingCardFeature>We will put our</PricingCardFeature>
                  <PricingCardFeature>heart and soul</PricingCardFeature>
                  <PricingCardFeature>into any project</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Services;
