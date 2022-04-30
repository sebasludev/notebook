import Box from "../../components/box";
import { CodeInOut, CodeInline } from "../../components/code.block";
import React from "react";

export default function Page() {
  const [titles, setTitles] = React.useState([]);
  React.useEffect(() => {
    const ar = [];
    const titles = document.querySelectorAll("h2");
    for (let index = 0; index < titles.length; index++) {
      ar.push(titles[index].innerText);
    }
    setTitles(ar);
  }, []);

  return (
    <div>
      <div className='border-b-4 border-white'>
        <h1 className='text-8xl pb-10'>String</h1>
        <div>
          {titles.map((title) => (
            <p key={title}>{title}</p>
          ))}
        </div>
      </div>
      <CodeInOut codeIn={code} codeOut={`Hello world`} title='Names'>
        <Box>
          <p>hey</p>
        </Box>
        <Box>
          <p>huhiuh</p>
        </Box>
      </CodeInOut>

      <CodeInOut>
        <Box>hello</Box>
      </CodeInOut>
    </div>
  );
}

const code = `print('hello world')
`;
