import React from "react";
import { Category, CommonSearch } from "./CommonSearch";
import {
  Text,
  List,
  Card,
  Image,
  Group,
  Badge,
  Stack,
  Anchor,
  Title,
} from "@mantine/core";

const protocol_host_port =
  window.location.protocol + "//" + window.location.host + "/";

const projects: Category[] = [
  {
    name: "Large Personal Projects",
    items: [
      {
        key: "Danmaku 3D",
        media: [
          {
            url: protocol_host_port + "tuhu1.jpeg",
            caption: "Danmaku 3D",
            type: "image",
          },
          {
            url: protocol_host_port + "tuhu2.jpg",
            caption: "Danmaku 3D",
            type: "image",
          },
        ],
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={protocol_host_port + "tuhu1.jpeg"}
                height={160}
                alt="Danmaku 3D"
                style={{ objectPosition: "0% 30%" }}
              />
            </Card.Section>

            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Danmaku 3D
              </Text>
              <Badge color="pink" variant="light">
                Personal Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A 3D bullet hell game playable on the web, built with Babylon.js
              and React.
            </Text>

            <Anchor href={protocol_host_port + "menu"} target="_blank" mt="md">
              Play Danmaku 3D
            </Anchor>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>Complex game logic and 3D environment</List.Item>
                <List.Item>
                  Compute shaders for millions of projectiles
                </List.Item>
                <List.Item>
                  Innovative asynchronous collision detection system
                </List.Item>
              </List>
            </Stack>

            <Text size="sm" mt="md">
              <strong>Technical Challenge:</strong> Developed a novel method for
              asynchronous pixel data readback in WebGL, solving performance
              issues with collision detection. This solution was later
              integrated into Babylon.js.
            </Text>

            <Group mt="md">
              <Badge>Babylon.js</Badge>
              <Badge>React</Badge>
              <Badge>WebGL</Badge>
            </Group>
          </Card>
        ),
      },
      {
        key: "elodate.com",
        media: [
          {
            url: protocol_host_port + "elodate1.png",
            caption: "elodate.com",
            type: "image",
          },
          {
            url: protocol_host_port + "elodate2.jpg",
            caption: "elodate.com",
            type: "image",
          },
        ],
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={protocol_host_port + "elodate1.png"}
                height={160}
                alt="elodate.com"
                style={{ objectPosition: "0% 15%" }}
              />
            </Card.Section>

            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                elodate.com
              </Text>
              <Badge color="blue" variant="light">
                Personal Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A high-performance backend system and Flutter frontend for
              elodate.com, capable of supporting hundreds of thousands of users
              on a single VPS.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>Highly scalable architecture</List.Item>
                <List.Item>Efficient resource utilization</List.Item>
                <List.Item>Robust API for frontend integration</List.Item>
                <List.Item>
                  Flutter-based frontend for cross-platform support
                </List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>Rust</Badge>
              <Badge>Flutter</Badge>
            </Group>
          </Card>
        ),
      },
      {
        key: "Word Find VR",
        media: [
          {
            url: protocol_host_port + "wordfind0.png",
            caption: "Word Find VR",
            type: "image",
          },
          {
            url: protocol_host_port + "wordfind1.png",
            caption: "Word Find VR",
            type: "image",
          },
        ],
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={protocol_host_port + "wordfind0.png"}
                height={160}
                alt="Word Find VR"
              />
            </Card.Section>

            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Word Find VR
              </Text>
              <Badge color="cyan" variant="light">
                Personal Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A VR-compatible word-finding game with immersive gameplay and
              dynamic audio experience.
            </Text>

            <Anchor
              href={protocol_host_port + "wordfind"}
              target="_blank"
              mt="md"
            >
              Play Word Find VR
            </Anchor>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>VR-optimized user interface</List.Item>
                <List.Item>Intuitive word selection mechanics</List.Item>
                <List.Item>Immersive 3D environment</List.Item>
                <List.Item>Dynamic, adaptive background music system</List.Item>
                <List.Item>
                  Procedurally generated, harmonized sound effects
                </List.Item>
              </List>
            </Stack>

            <Text size="sm" mt="md">
              <strong>Technical Highlights:</strong>
            </Text>
            <List size="sm">
              <List.Item>
                Seamlessly looping background music that progresses with the
                level
              </List.Item>
              <List.Item>
                Intelligent music progression tied to player advancement
              </List.Item>
              <List.Item>
                Dynamic sound effect generation in tune with the current music
                key
              </List.Item>
            </List>

            <Group mt="md">
              <Badge>WebXR</Badge>
              <Badge>Three.js</Badge>
              <Badge>Web Audio API</Badge>
            </Group>
          </Card>
        ),
      },
      {
        key: "Amorai",
        media: [
          {
            url: protocol_host_port + "waifu1.png",
            caption: "Amorai",
            type: "image",
          },
          {
            url: protocol_host_port + "waifu2.jpg",
            caption: "Amorai",
            type: "image",
          },
          {
            url: protocol_host_port + "waifu3.webm",
            caption: "Amorai",
            type: "video",
          },
        ],
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={protocol_host_port + "waifu2.jpg"}
                height={160}
                alt="Amorai"
                //make image show top
                style={{ objectPosition: "0% 10%" }}
              />
            </Card.Section>

            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Amorai
              </Text>
              <Badge color="grape" variant="light">
                Personal Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A platform for interacting with live-2D animated AI characters.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>
                  Integration of Apollo for GraphQL implementation
                </List.Item>
                <List.Item>
                  Handling of both GraphQL and WebSocket traffic
                </List.Item>
                <List.Item>
                  Use of PostgreSQL as the backend storage solution
                </List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>Apollo</Badge>
              <Badge>GraphQL</Badge>
              <Badge>WebSockets</Badge>
              <Badge>PostgreSQL</Badge>
            </Group>

            <Text size="sm" mt="md">
              <strong>Role:</strong> Lead Developer
            </Text>
          </Card>
        ),
      },
    ],
  },
  {
    name: "Small Personal Projects",
    items: [
      {
        key: "Live Code VR",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Live Code VR
              </Text>
              <Badge color="green" variant="light">
                Personal Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              An experimental VR coding environment that allows real-time code
              editing and visualization in virtual reality.
            </Text>

            <Anchor
              href="https://github.com/Commute773/live-code-vr"
              target="_blank"
              mt="md"
            >
              View on GitHub
            </Anchor>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>Real-time code editing in VR</List.Item>
                <List.Item>
                  Live refresh of VR environment based on code changes
                </List.Item>
                <List.Item>Screen sharing within VR for code display</List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>React</Badge>
              <Badge>WebXR</Badge>
              <Badge>getUserMedia API</Badge>
            </Group>
          </Card>
        ),
      },
      {
        key: "Latent Preference Discovery",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Latent Preference Discovery
              </Text>
              <Badge color="yellow" variant="light">
                Personal Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A personal project for discovering latent preferences using human
              faces and StyleGAN3.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>Integration with StyleGAN3</List.Item>
                <List.Item>Facial analysis and preference mapping</List.Item>
                <List.Item>
                  Machine learning algorithms for preference discovery
                </List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>Python</Badge>
              <Badge>StyleGAN3</Badge>
              <Badge>Machine Learning</Badge>
            </Group>
          </Card>
        ),
      },
      {
        key: "Group Chat Impersonation Bot",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Group Chat Impersonation Bot
              </Text>
              <Badge color="orange" variant="light">
                Personal Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A bot capable of impersonating individuals based on group chat
              history, using fine-tuned large language models.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>Natural language processing</List.Item>
                <List.Item>
                  Personality mimicking based on chat history
                </List.Item>
                <List.Item>Integration with chat platforms</List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>Python</Badge>
              <Badge>NLP</Badge>
              <Badge>Large Language Models</Badge>
            </Group>
          </Card>
        ),
      },
      {
        key: "Algorithmic Cryptocurrency Trader",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Algorithmic Cryptocurrency Trader
              </Text>
              <Badge color="lime" variant="light">
                Personal Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              An automated trading system for cryptocurrencies using algorithmic
              strategies.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>Real-time market data processing</List.Item>
                <List.Item>Implementation of trading algorithms</List.Item>
                <List.Item>Risk management and pos sizing</List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>Python</Badge>
              <Badge>Cryptocurrency APIs</Badge>
              <Badge>Financial libraries</Badge>
            </Group>
          </Card>
        ),
      },
      {
        key: "Touhou-online",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Touhou-online
              </Text>
              <Badge color="teal" variant="light">
                Personal Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A multiplayer 3D game development project using gRPC for efficient
              inter-service communication.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>
                  Implementation of gRPC for fast, efficient communication
                  between game services
                </List.Item>
                <List.Item>3D game environment development</List.Item>
                <List.Item>Multiplayer functionality</List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>gRPC</Badge>
              <Badge>3D Game Development</Badge>
            </Group>
          </Card>
        ),
      },
    ],
  },
  {
    name: "Professional Projects",
    items: [
      {
        key: "GENIUS Platform",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                GENIUS Platform
              </Text>
              <Badge color="violet" variant="light">
                Professional Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A platform developed at VERSES for implementing and developing the
              HSML spec.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>Implementation of HSML specification</List.Item>
                <List.Item>High-performance query language</List.Item>
                <List.Item>Vector-document-graph database</List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>Rust</Badge>
              <Badge>Database technologies</Badge>
            </Group>

            <Text size="sm" mt="md">
              <strong>Role:</strong> Lead Developer
            </Text>
          </Card>
        ),
      },
      {
        key: "OneMap",
        media: [
          {
            url: protocol_host_port + "onemap1.jpg",
            caption: "OneMap",
            type: "image",
          },
        ],
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={protocol_host_port + "onemap1.jpg"}
                height={160}
                alt="OneMap"
              />
            </Card.Section>

            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                OneMap
              </Text>
              <Badge color="indigo" variant="light">
                Professional Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A geophysical simulation platform for real-time processing and
              visualization of seismic activity.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>
                  Real-time data processing of seismic activity
                </List.Item>
                <List.Item>Advanced 3D rendering of isosurfaces</List.Item>
                <List.Item>
                  Time-based visualization of seismic events
                </List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>React</Badge>
              <Badge>Three.js</Badge>
            </Group>

            <Text size="sm" mt="md">
              <strong>Role:</strong> Lead Developer
            </Text>
          </Card>
        ),
      },
      {
        key: "Censys UI Component Library",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Censys UI Component Library
              </Text>
              <Badge color="red" variant="light">
                Professional Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A set of reusable UI components developed at Censys to improve
              consistency and efficiency across products.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>
                  Consistent design across multiple products
                </List.Item>
                <List.Item>Improved developer productivity</List.Item>
                <List.Item>Reduced CI/CD times</List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>React</Badge>
              <Badge>CI/CD tools</Badge>
            </Group>

            <Text size="sm" mt="md">
              <strong>Role:</strong> Lead Developer
            </Text>
          </Card>
        ),
      },
      {
        key: "Cogment Framework Integration",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Cogment Framework Integration
              </Text>
              <Badge color="pink" variant="light">
                Professional Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              Integration of the Cogment framework at AI Redefined (AIR).
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>
                  Integration of Cogment framework with existing systems
                </List.Item>
                <List.Item>
                  Use of gRPC for communication within the framework
                </List.Item>
                <List.Item>
                  Involvement in AI training and simulation systems
                </List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>Cogment</Badge>
              <Badge>gRPC</Badge>
              <Badge>AI technologies</Badge>
            </Group>

            <Text size="sm" mt="md">
              <strong>Role:</strong> Developer at AI Redefined
            </Text>
          </Card>
        ),
      },
      {
        key: "Orchestra CMS",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Orchestra CMS
              </Text>
              <Badge color="grape" variant="light">
                Professional Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A Content Management System developed on the Salesforce platform
              at Stantive Technologies Group.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>
                  Content management tailored for Salesforce
                </List.Item>
                <List.Item>Integration with Salesforce ecosystem</List.Item>
                <List.Item>Customizable for client needs</List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>Salesforce</Badge>
              <Badge>CMS technologies</Badge>
            </Group>

            <Text size="sm" mt="md">
              <strong>Role:</strong> Occasional bug fixer
            </Text>
          </Card>
        ),
      },
      {
        key: "MoneyMate Loan Software",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                MoneyMate Loan Software
              </Text>
              <Badge color="cyan" variant="light">
                Professional Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A comprehensive loan issuing and tracking software developed at
              MoneyMate.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>Loan issuing functionality</List.Item>
                <List.Item>Loan tracking and management</List.Item>
                <List.Item>Reporting and analytics</List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>Java</Badge>
              <Badge>Spring Boot</Badge>
              <Badge>Hibernate</Badge>
            </Group>

            <Text size="sm" mt="md">
              <strong>Role:</strong> Part of dev team
            </Text>
          </Card>
        ),
      },
      {
        key: "Daily Discount Coupon App",
        content: (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group mt="md" mb="xs">
              <Text
                style={{
                  weight: 500,
                }}
              >
                Daily Discount Coupon App
              </Text>
              <Badge color="blue" variant="light">
                Professional Project
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              A mobile application for distributing coupons for local
              businesses.
            </Text>

            <Stack gap="xs" mt="md">
              <Title order={6}>Key Features:</Title>
              <List size="sm">
                <List.Item>Coupon distribution system</List.Item>
                <List.Item>Local business integration</List.Item>
                <List.Item>User-friendly mobile interface</List.Item>
              </List>
            </Stack>

            <Group mt="md">
              <Badge>PHP</Badge>
              <Badge>Smartface.io</Badge>
            </Group>

            <Text size="sm" mt="md">
              <strong>Role:</strong> Solo Developer
            </Text>
          </Card>
        ),
      },
    ],
  },
];

export const ProjectsWithSearch: React.FC = () => {
  return (
    <CommonSearch
      categories={projects}
      title="Projects"
      defaultSelected="Danmaku 3D"
    />
  );
};
