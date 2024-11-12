import React from 'react';
import { Root, Paper, Form, FileInput, ButtonSubmit } from './styles'; // Import styled components

const FormComponent = () => {
  return (
    <Root>
      <Paper>
        <Form>
          {/* Your form elements go here */}
          <FileInput>
            <input type="file" />
          </FileInput>
          <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </Form>
      </Paper>
    </Root>
  );
};

export default FormComponent;
