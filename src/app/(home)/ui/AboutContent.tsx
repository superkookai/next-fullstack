"use client";

import React from 'react'
import {Container,Title,Text,Divider,Space} from "@mantine/core";

export default function AboutContent({data}:any) {
  return (
    <Container size="lg" mt={30}>
        <Title order={3}>เกี่ยวกับเรา</Title>
        <Divider mt={2}/>
        <Text fz="sm" mt={10}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text fz="sm" mt={10}>Version: {data.data.version}</Text>
        <Space h="md"/>
    </Container>
  )
}
