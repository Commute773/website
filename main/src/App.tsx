import { Box, Text } from "@mantine/core";
import { SnapScroll } from "./components/SnapScroll";
import { LetterByLetter } from "./components/LetterByLetter";
import { SkillsWithSearch } from "./components/SearchSkills";
import WorkHistoryTimeline from "./components/WorkTimeline";
import { Contact } from "./components/Contact";
import { ProjectsWithSearch } from "./components/Projects";

function App() {
  return (
    <SnapScroll>
      <Box w="calc(min(1280px, 100vw))">
        <LetterByLetter text="Meredith Alderwick" />
      </Box>
      <Box
        style={{
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text size="xl">
          If you can imagine it, you can force a computer to do it
        </Text>
        <Text
          style={{
            width: "100%",
            textAlign: "right",
            color: "grey",
          }}
          size="xl"
        >
          -Me
        </Text>
        <Text
          size="md"
          style={{
            position: "absolute",
            bottom: "0",
            color: "grey",
          }}
        >
          Scroll to navigate
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Text>
      </Box>

      <Box p="md" w="calc(min(1080px, 100vw))">
        <SkillsWithSearch />
      </Box>
      <Box p="md" w="calc(min(1080px, 100vw))">
        <ProjectsWithSearch />
      </Box>
      <Box p="md" w="calc(min(1080px, 100vw))">
        <WorkHistoryTimeline />
      </Box>
      <Box p="md" w="calc(min(1080px, 100vw))">
        <Contact />
      </Box>
    </SnapScroll>
  );
}

export default App;
