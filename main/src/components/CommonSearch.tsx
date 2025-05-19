import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
  TouchEvent,
} from "react";
import {
  Box,
  Grid,
  TextInput,
  Text,
  Stack,
  useMantineTheme,
  Accordion,
  Image,
  Modal,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";

const highlightText = (
  text: string,
  highlight: string,
  highlightColor: string
): React.ReactNode => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.filter(String).map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            style={{ backgroundColor: highlightColor, color: "inherit" }}
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

const highlightReactNode = (
  node: React.ReactNode,
  highlight: string,
  highlightColor: string
): React.ReactNode => {
  if (typeof node === "string") {
    return highlightText(node, highlight, highlightColor);
  }

  if (React.isValidElement(node)) {
    const elementNode = node as React.ReactElement;
    const newProps = { ...elementNode.props };

    if (typeof elementNode.props.children === "string") {
      newProps.children = highlightText(
        elementNode.props.children,
        highlight,
        highlightColor
      );
    } else if (
      React.isValidElement(elementNode.props.children) ||
      Array.isArray(elementNode.props.children)
    ) {
      newProps.children = React.Children.map(
        elementNode.props.children,
        (child) => highlightReactNode(child, highlight, highlightColor)
      );
    }

    return React.cloneElement(elementNode, newProps);
  }

  if (Array.isArray(node)) {
    return node.map((child) =>
      highlightReactNode(child, highlight, highlightColor)
    );
  }

  return node;
};

const extractTextContent = (node: React.ReactNode): string => {
  if (typeof node === "string") {
    return node;
  }

  if (React.isValidElement(node)) {
    const elementNode = node as React.ReactElement;
    if (typeof elementNode.props.children === "string") {
      return elementNode.props.children;
    } else if (
      React.isValidElement(elementNode.props.children) ||
      Array.isArray(elementNode.props.children)
    ) {
      return React.Children.toArray(elementNode.props.children)
        .map(extractTextContent)
        .join(" ");
    }
  }

  if (Array.isArray(node)) {
    return node.map(extractTextContent).join(" ");
  }

  return "";
};

export interface CategoryItem {
  key: string;
  content: React.ReactNode;
  media?: Media[];
}

export interface Category {
  name: string;
  items: CategoryItem[];
}

interface CommonSearchProps {
  categories: Category[];
  title: string;
  defaultSelected: string;
}

interface BlockingScrollProps {
  height: string;
  children: React.ReactNode;
}

interface MediaSectionProps {
  media: Media[];
}

interface Media {
  type: "image" | "video";
  url: string;
  caption?: string;
}

interface BlockingScrollProps {
  height: string;
  children: React.ReactNode;
}

const BlockingScroll: React.FC<BlockingScrollProps> = ({
  children,
  height,
}) => {
  const scrollAttempts = useRef<number>(0);
  const scrollStartTime = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const [isTouching, setIsTouching] = useState(false);

  const handleInteraction = useCallback(
    (delta: number, currentTarget: HTMLDivElement) => {
      const isAtTop = currentTarget.scrollTop === 0;
      const isAtBottom =
        Math.abs(
          currentTarget.scrollTop -
            (currentTarget.scrollHeight - currentTarget.clientHeight)
        ) < 2;

      if ((delta < 0 && isAtTop) || (delta > 0 && isAtBottom)) {
        if (scrollAttempts.current < 1) {
          scrollAttempts.current++;
          console.log("Scroll attempt", scrollAttempts.current);
          return true;
        } else {
          if (scrollStartTime.current === 0) {
            console.log("Scroll start time set to", new Date().getTime());
            scrollStartTime.current = new Date().getTime();
          }

          if (new Date().getTime() - scrollStartTime.current > 300) {
            console.log("Scroll allowed");
            scrollStartTime.current = 0;
            scrollAttempts.current = 0;
            return false;
          }
          console.log("scroll blocked, waiting for 100ms");
          return true;
        }
      }
      scrollStartTime.current = 0;
      scrollAttempts.current = 0;
      console.log("Scroll blocked, not at top or bottom");
      return true;
    },
    []
  );

  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (handleInteraction(event.deltaY, event.currentTarget)) {
        event.stopPropagation();
      }
    },
    [handleInteraction]
  );

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = event.touches[0].clientY;
    setIsTouching(true);
  };

  const handleTouchMove = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      if (!isTouching) return;

      const touchEndY = event.touches[0].clientY;
      const delta = touchStartY.current - touchEndY;

      if (Math.abs(delta) > 5) {
        if (handleInteraction(delta, event.currentTarget)) {
          event.preventDefault();
        }
      }
    },
    [handleInteraction, isTouching]
  );

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  return (
    <Box
      style={{ height, overflowY: "auto", overflowX: "hidden" }}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </Box>
  );
};

export default BlockingScroll;

const MediaSection: React.FC<MediaSectionProps> = ({ media }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);

  const openModal = (item: Media) => {
    setSelectedMedia(item);
    setModalOpen(true);
  };

  return (
    <Box mt="xl">
      <Text size="xl" mb="md" style={{ fontWeight: 700 }}>
        Media
      </Text>
      <Grid>
        {media.map((item, index) => (
          <Grid.Col key={index} span={4}>
            {item.type === "image" ? (
              <Image
                src={item.url}
                alt={item.caption || `Image ${index + 1}`}
                style={{ cursor: "pointer" }}
                onClick={() => openModal(item)}
              />
            ) : (
              <video
                src={item.url}
                controls
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
                onClick={() => openModal(item)}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </Grid.Col>
        ))}
      </Grid>
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} size="xl">
        {selectedMedia &&
          (selectedMedia.type === "image" ? (
            <Image
              src={selectedMedia.url}
              alt={selectedMedia.caption || "Full-screen image"}
              mah="80dvh"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <video
              src={selectedMedia.url}
              controls
              style={{ width: "100%", height: "auto" }}
            >
              Your browser does not support the video tag.
            </video>
          ))}
      </Modal>
    </Box>
  );
};

export const CommonSearch: React.FC<CommonSearchProps> = ({
  categories,
  title,
  defaultSelected,
}) => {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<string | null>(
    defaultSelected
  );
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 48em)");
  const theme = useMantineTheme();
  const highlightColor = theme.colors.blue[1];

  const filteredCategories = useMemo(() => {
    const lowercaseSearch = search.toLowerCase();
    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.key.toLowerCase().includes(lowercaseSearch) ||
            extractTextContent(item.content)
              .toLowerCase()
              .includes(lowercaseSearch)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [categories, search]);

  useEffect(() => {
    setSelectedItem(defaultSelected);
    // Find the category containing the default selected item
    const defaultCategory = categories.find((category) =>
      category.items.some((item) => item.key === defaultSelected)
    );
    if (defaultCategory) {
      setOpenAccordion(defaultCategory.name);
    }
  }, [defaultSelected, categories]);

  const handleItemClick = (itemKey: string, categoryName: string) => {
    setSelectedItem(itemKey);
    setOpenAccordion(categoryName);
  };

  const ItemsList = () => (
    <BlockingScroll height={isMobile ? "300px" : "calc(100vh - 180px)"}>
      <Accordion
        value={openAccordion}
        onChange={setOpenAccordion}
        multiple={false}
      >
        {filteredCategories.map((category) => (
          <Accordion.Item key={category.name} value={category.name}>
            <Accordion.Control>{category.name}</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                {category.items.map((item) => (
                  <Box
                    key={item.key}
                    p="xs"
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        selectedItem === item.key
                          ? theme.colors.gray[2]
                          : "transparent",
                      borderRadius: theme.radius.sm,
                    }}
                    onClick={() => handleItemClick(item.key, category.name)}
                  >
                    <Text>
                      {highlightText(item.key, search, highlightColor)}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </BlockingScroll>
  );

  const ItemDetails = () => (
    <BlockingScroll height={isMobile ? "auto" : "calc(100vh - 180px)"}>
      <Box p="md">
        {selectedItem ? (
          <>
            <Text size="xl" mb="sm" style={{ fontWeight: 700 }}>
              {highlightText(selectedItem, search, highlightColor)}
            </Text>
            {highlightReactNode(
              categories
                .flatMap((category) => category.items)
                .find((item) => item.key === selectedItem)?.content,
              search,
              highlightColor
            )}
            {categories
              .flatMap((category) => category.items)
              .find((item) => item.key === selectedItem)?.media && (
              <MediaSection
                media={
                  (categories
                    .flatMap((category) => category.items)
                    .find((item) => item.key === selectedItem)?.media ||
                    []) as Media[]
                }
              />
            )}
          </>
        ) : (
          <Text color="dimmed">Select an item to view details</Text>
        )}
      </Box>
    </BlockingScroll>
  );

  return (
    <Box w="100%">
      <TextInput
        placeholder={`Search ${title.toLowerCase()}...`}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        mb="md"
        rightSection={<IconSearch size={16} />}
      />
      {isMobile ? (
        <Stack>
          <ItemsList />
          <ItemDetails />
        </Stack>
      ) : (
        <Grid>
          <Grid.Col span={4}>
            <ItemsList />
          </Grid.Col>
          <Grid.Col span={8}>
            <ItemDetails />
          </Grid.Col>
        </Grid>
      )}
    </Box>
  );
};
