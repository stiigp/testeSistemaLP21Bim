import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


export default function Formulario (props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    if(props.classe==="forn")
{    return (
        
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="bg-dark text-white p-3">
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nome/Descrição"

            />
            <Form.Control.Feedback>Muito bom! Muito bom!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>CNPJ/CPF</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="CPNJ/CPF"
            />
                <Form.Control.Feedback type="invalid">
                Please choose a Email.
              </Form.Control.Feedback>
            <Form.Control.Feedback>Muito bom! Muito bom!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a Email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" placeholder="Cidade" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Cidade.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" placeholder="Estado" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Estado.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" placeholder="CEP" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid CEP.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Cadastro</Button>
      </Form>
    );}
}