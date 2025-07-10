import { Box, Table, Text } from "@mantine/core";

export const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "meredith.alderwick@proton.me",
      href: "mailto:meredith.alderwick@proton.me",
    },
    {
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/Commute773",
    },
    // {
    //   label: "Resume",
    //   value: "Download Resume",
    //   href: "/resume.pdf",
    // },
    // {
    //   label: "Phone",
    //   value: "579-421-2335",
    //   href: "tel:579-421-2335",
    // },
  ];

  return (
    <Box
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 500,
        margin: "auto",
      }}
    >
      <Text size="xl" mb="md">
        Links and Contact
      </Text>
      <Table style={{ borderBottom: "none" }}>
        <tbody>
          {contactInfo.map(({ label, value, href }) => (
            <Table.Tr key={label} style={{ borderBottom: "none" }}>
              <Table.Td>{label}</Table.Td>
              <Table.Td style={{ textAlign: "right" }}>
                <a href={href}>{value}</a>
              </Table.Td>
            </Table.Tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};
