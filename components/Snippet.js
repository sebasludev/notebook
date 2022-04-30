import Box from "./box";
import Container from "./Container";

export default function Snippet({ children }) {
  return (
    <Container className='pt-20 pb-10'>
      <Box>{children}</Box>
    </Container>
  );
}
