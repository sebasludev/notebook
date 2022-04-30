import { CopyBlock, dracula, CodeBlock, Code } from "react-code-blocks";
import Container from "./Container";

export function CodeInOut(props) {
  const { codeIn = `none`, codeOut = `none`, children } = props;

  return (
    <div className='pt-5 pb-14 border-b-2 border-x-yellow-50 border-dotted'>
      <Container>
        <Title title='Input' />
        <Title title='Output' />
      </Container>
      <Container>
        <div>
          <CopyBlock
            text={codeIn}
            language='python'
            wrapLines
            theme={dracula}
            customStyle={{
              borderRadius: "5px",
              boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
              padding: "20px",
              fontSize: "0.8rem",
              height: "100%",
            }}
          />
        </div>
        <div>
          <CodeBlock
            text={codeOut}
            language='python'
            wrapLines
            theme={dracula}
            customStyle={{
              borderRadius: "5px",
              boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
              padding: "11px ",
              fontSize: "0.8rem",
              height: "100%",
            }}
          />
        </div>
      </Container>
    </div>
  );
}

export function CodeInline(props) {
  const { code } = props;

  return (
    <div className='inline-block mx-2 my-2'>
      <Code
        text={code}
        language='python'
        showLineNumbers={false}
        theme={dracula}
        customStyle={{
          padding: "10px ",
          fontSize: "0.8rem",
        }}
      />
    </div>
  );
}

const Title = ({ title }) => {
  return <h2 className='text-center text-2xl pb-3'>{title}</h2>;
};
