import React from "react";
import {
  Box,
  Text,
  Link,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Box
      py="6"
      bg="#1a1a1a"
      color="#fff"
      borderTop="4px solid #00adb5"
      textAlign="left"
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="4">
        <Box>
          <Text
            fontSize="lg"
            fontWeight="bold"
            mb="2"
            textTransform="uppercase"
            letterSpacing="1px"
          >
            About Us
          </Text>
          <Text fontSize="sm">
            The Science Museum is dedicated to inspiring a love of science and
            learning in visitors of all ages. Explore our interactive exhibits,
            educational workshops, and guided tours.
          </Text>
        </Box>

        <Box>
          <Text
            fontSize="lg"
            fontWeight="bold"
            mb="2"
            textTransform="uppercase"
            letterSpacing="1px"
          >
            Quick Links
          </Text>
          <Box mb="2">
            <Link href="/explore" color="#00adb5" _hover={{ color: "#fff" }}>
              Explore
            </Link>
          </Box>
          <Box mb="2">
            <Link href="/visit" color="#00adb5" _hover={{ color: "#fff" }}>
              Visit
            </Link>
          </Box>
          <Box mb="2">
            <Link href="/contact" color="#00adb5" _hover={{ color: "#fff" }}>
              Contact
            </Link>
          </Box>
          <Box mt="2">
            <Text fontSize="sm" fontWeight="bold" mb="1">
              Visit Us
            </Text>
            <Text fontSize="sm">
              National Science Centre, Bhairon Road, Near Gate No.1, Pragati
              Maidan, New Delhi, Delhi 110001, India.
            </Text>
          </Box>
        </Box>

        <Box>
          <Text
            fontSize="lg"
            fontWeight="bold"
            mb="2"
            textTransform="uppercase"
            letterSpacing="1px"
          >
            Follow Us
          </Text>
          <Text fontSize="sm" mb="2">
            Stay connected through our social media channels:
          </Text>
          <Box display="flex" gap="4">
            <Link href="https://facebook.com" color="#00adb5" _hover={{ color: "#fff" }}>
              <FaFacebook size="1.5rem" />
            </Link>
            <Link href="https://instagram.com" color="#00adb5" _hover={{ color: "#fff" }}>
              <FaInstagram size="1.5rem" />
            </Link>
            <Link href="https://twitter.com" color="#00adb5" _hover={{ color: "#fff" }}>
              <FaTwitter size="1.5rem" />
            </Link>
            <Link href="https://linkedin.com" color="#00adb5" _hover={{ color: "#fff" }}>
              <FaLinkedin size="1.5rem" />
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Footer;
