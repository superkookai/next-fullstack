'use client'; //if use Mantine need this

import { Container } from "@mantine/core";

export default function NotFound() {
    return (
      <Container size="lg">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </Container>
    );
  }