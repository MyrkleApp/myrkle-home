"use client"

import { Box } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import SectionA from "./section-a";
import SectionB from "./section-b";
import SectionI from "./section-i";
import SectionJ from "./section-j";
import { useDebounce } from "react-use";
import BubbleSection from "./bubble-section";
import HomeNavbar from "../navbar";
import { useSearchParams } from "next/navigation";

function LandingPage() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  const [activeSection, setActiveSection] = useState(1);
  const [deltaY, setDeltaY] = useState(0);

  const scrollDown = useCallback(() => {
    if (activeSection === 10) return;
    setActiveSection((prevState) => prevState + 1);
    setDeltaY(0);
  }, [activeSection]);

  const scrollUp = useCallback(() => {
    if (activeSection > 1) {
      setActiveSection((prevState) => prevState - 1);
      setDeltaY(0);
    }
  }, [activeSection]);

  useEffect(() => {
    if (section === "home") {
      setActiveSection(1);
    } else if (section === "about") {
      setActiveSection(9);
    }
  }, [section]);

  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      const deltaY = event.deltaY;

      if (deltaY !== 0) {
        setDeltaY(event.deltaY);
      }
    });

    return () =>
      window.removeEventListener("wheel", () => {
        /**/
      });
  }, []);

  useDebounce(
    () => {
      if (deltaY > 0) {
        scrollDown();
      } else if (deltaY < 0) {
        scrollUp();
      }
      setDeltaY(0);
    },
    50,
    [deltaY],
  );

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowUp") {
        scrollUp();
      } else if (event.key === "ArrowDown") {
        scrollDown();
      }
    };

    const handleWindowKeyDown = (event: any) => {
      handleKeyDown(event);
    };

    window.addEventListener("keydown", handleWindowKeyDown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
    };
  }, [scrollDown, scrollUp]);

  return (
    <Box w="100vw" h="100vh" pos="relative" bg="darker" overflow="hidden scroll">
      <HomeNavbar />

      <SectionA />

      <Box h="100px" />

      <SectionB />
      <BubbleSection />
      <SectionI />
      <SectionJ />
    </Box>
  );
}

export default LandingPage;
