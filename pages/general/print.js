import { CodeInOut } from "../../components/code.block";
import Description from "../../components/decription";
import PageWrapper from "../../components/page";
import Snippet from "../../components/Snippet";
import About from "../../components/About";

export default function Page() {
  return (
    <PageWrapper title='Print'>
      <Description>
        <code>print()</code> converts it´s arguments to strings using{" "}
        <code>str()</code>
      </Description>
      <div>
        <Snippet>
          <About>You can duplicate characters</About>
        </Snippet>
        <CodeInOut codeIn={`print(10*'=')`} codeOut={`==========`} />
      </div>
      <div>
        <Snippet>
          <About>
            You can use the sep for replacing the spaces in the print ouput
          </About>
        </Snippet>
        <CodeInOut
          codeIn={`print('hello', 'world', sep='😁')`}
          codeOut={`hello😁world`}
        />
      </div>
      <div>
        <Snippet>
          <About>You can break line</About>
        </Snippet>
        <CodeInOut
          codeIn={`print('hello', 6, 'world', sep='\\n')`}
          codeOut={`hello \n6\nworld`}
        />
      </div>
      <div>
        <Snippet>
          <About>
            By default, the print ouput out an \n at the end, to modify that,
            you can use the end argument
          </About>
        </Snippet>
        <CodeInOut
          codeIn={`def bulllets():
print('My favorites foods:', end='\\n * ') 
print('Pizza', end='\\n * ')
print('Pasta')
        
bulllets()
    `}
          codeOut={`My favorites foods:
* Pizza
* Pasta`}
        />
      </div>
      <div>
        <Snippet>
          <About>You can add colors to your print, with ANSI color codes</About>
        </Snippet>
        <CodeInOut
          codeIn={`def esc(code):
   return f'\\033[{code}m'

print('this is ', esc('31;1'), 'really', esc(0), ' important', sep='')
`}
          codeOut={`this is really important`}
        />
      </div>
      {/* cos */}
    </PageWrapper>
  );
}
