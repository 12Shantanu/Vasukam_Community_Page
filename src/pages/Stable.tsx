import { useState } from 'react';
import {
    ChakraProvider,
    Heading,
    Container,
    Text,
    Input,
    Button,
    Wrap,
    Stack, 
    Image,
    Link,
    SkeletonCircle,
    SkeletonText,
  } from "@chakra-ui/react";
function Stable() {
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch('/api/stablediffusion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: inputValue }),
    });

    if (response.ok) {
      const data = await response.json();
      setImageUrl(data[0]);
    } else {
      console.error('Error:', response.statusText);
    }
    setLoading(false);
  };

  return (
<>
<ChakraProvider >
      <Container>
        <Heading>AI Image Generator🚀</Heading>
        <Text marginBottom={"10px"}>
          
         Let&apos;s  Try Something Interesting :: 
         TYPE YOUR NAME AND SEE THE MAGIC
           
          
        </Text>
        <form onSubmit={handleSubmit} >
        <Wrap  marginBottom={"10px"}>
          <Input
          type="text"
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
            width={"350px"}
          />
          <Button type="submit" disabled={loading}  colorScheme={"yellow"}>
            Generate
          </Button>
        </Wrap>
        </form>

        {loading && (
          <Stack>
          <SkeletonCircle />
          <SkeletonText />
        </Stack>
      )}
      {imageUrl && !loading && (
       
          
          <Image src={imageUrl} alt="Generated image"  boxShadow="lg" />
      )}
      </Container>
    </ChakraProvider>
</>
   
  );
}

export default Stable;