import Form from 'react-bootstrap/Form';

function Checkbox() {
  return (
    <Form>
        <div key={`default-checkbox`} className="mb-3">
          <Form.Check 
            type={'checkbox'}
            id={`default-checkbox`}
          />
          </div>
    </Form>
  );
}

export default Checkbox;