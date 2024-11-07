import Background from '../Background/Background';
import backgroundImage from "../../assets/BckEditDream.jpg";
import {useNavigate} from 'react-router-dom'
import { supabase } from "../../supabase/supabase";

import { Button } from '@mantine/core';
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import {useState} from "react";

import classes from "./EditDream.module.css";

export function EditDream() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')

  const theme = createTheme({
    components: {
      Input: Input.extend({
        defaultProps: {
          variant: 'filled',
        },
      }),
  
      InputWrapper: Input.Wrapper.extend({
        defaultProps: {
          inputWrapperOrder: ['label', 'input', 'description', 'error'],
        },
      }),
    },
  });
  const [content, setContent] = useState(`
  <h2 style="text-align: center;">Tady můžeš napsat svůj sen</h2>
  <p>
    <code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. 
    <code>RichTextEditor</code> is based on 
    <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> 
    and supports all of its features:
  </p>
  <ul>
    <li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s></li>
    <li>Headings (h1-h6)</li>
    <li>Ordered and bullet lists</li>
    <li>Text align&nbsp;</li>
    <li>And all 
      <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a>
    </li>
  </ul>
`)


  const handleButton = async (e) => {
    e.preventDefault()
    const{data, error} = await supabase.from('dreams').insert({content, title})
    console.log(data,error)
    // navigate("/OverviewOfDreams")
  }

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
    onUpdate
  });
 function onUpdate ({editor}){
  setContent(editor.getHTML())
 }
  return (
    <>
      <Background image={backgroundImage} />
     
      <div className={classes.container}>
        <div className={classes.editorContainer}>ZDE VLOŽTE SVŮJ SEN
          <div className={classes.prompt}>
      
          <MantineProvider theme={theme}>
    <div className={classes.textInput}>
        <TextInput 
            label="NÁZEV SNU:"
            placeholder="Tady napiště název svého snu"
        />
    </div>
    <div className={classes.textInput}>
        <NativeSelect
            mt="md"
            label="TYP SNU:"
            data={['Normální sen', 'Živý sen', 'Hezký sen', 'Noční můra', 'Astralní cestování', 'OBE', 'Pocity']}
        />
    </div>
</MantineProvider>

      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>

      <Button className={classes.button} onClick={handleButton}
              // variant="gradient"
              // gradient={{ from: 'dodgerblue', to: 'green' }}
              // size="xl"
              // className={classes.control}
              // mt={40}
            >
              Uložit sen
            </Button>
       </div>
       </div>
      </div>
    </>
  );
}

export default EditDream;
