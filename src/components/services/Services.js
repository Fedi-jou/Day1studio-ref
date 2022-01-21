import React from "react";
import { Button } from "../../Globalstyle";
import { GiCrystalBars } from "react-icons/gi";
import { GiConsoleController, GiTeamIdea } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  ServicesSection,
  ServicesWrapper,
  ServicesHeading,
  ServicesContainer,
  ServicesCard,
  ServicesCardInfo,
  ServicesCardIcon,
  ServicesCardPlan,
  ServicesCardFeatures,
  ServicesCardFeature,
} from "./Services_style";

function Services() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <ServicesSection>
        <ServicesWrapper>
          <ServicesHeading>Our Services</ServicesHeading>
          <ServicesContainer>
            <ServicesCard to="/sign-up">
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <GiConsoleController />
                </ServicesCardIcon>
                <ServicesCardPlan>Game Development</ServicesCardPlan>
                <ServicesCardFeatures>
                  <ServicesCardFeature>
                    Videogames are our passion
                  </ServicesCardFeature>
                  <ServicesCardFeature>
                    We can build a fantastic world
                  </ServicesCardFeature>
                  <ServicesCardFeature>Just for you</ServicesCardFeature>
                </ServicesCardFeatures>
              </ServicesCardInfo>
            </ServicesCard>
            <ServicesCard to="/sign-up">
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <GiCrystalBars />
                </ServicesCardIcon>
                <ServicesCardPlan>GAME PORTING</ServicesCardPlan>
                <ServicesCardFeatures>
                  <ServicesCardFeature>
                    Want to see your game
                  </ServicesCardFeature>
                  <ServicesCardFeature>on consoles ?</ServicesCardFeature>
                  <ServicesCardFeature>We can make it real</ServicesCardFeature>
                  <ServicesCardFeature>on any platform.</ServicesCardFeature>
                </ServicesCardFeatures>
              </ServicesCardInfo>
            </ServicesCard>
            <ServicesCard to="/sign-up">
              <ServicesCardInfo>
                <ServicesCardIcon>
                  <GiTeamIdea />
                </ServicesCardIcon>
                <ServicesCardPlan>ASSISTANCE</ServicesCardPlan>
                <ServicesCardFeatures>
                  <ServicesCardFeature>
                    Need anything else ?
                  </ServicesCardFeature>
                  <ServicesCardFeature>We will put our</ServicesCardFeature>
                  <ServicesCardFeature>heart and soul</ServicesCardFeature>
                  <ServicesCardFeature>into any project</ServicesCardFeature>
                </ServicesCardFeatures>
              </ServicesCardInfo>
            </ServicesCard>
          </ServicesContainer>
        </ServicesWrapper>
      </ServicesSection>
    </IconContext.Provider>
  );
}
export default Services;
