import React, { useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import ModalSampleDialog2, { ModalSampleDialog2Ref } from './ModalSampleDialog2';

/**
 * Modal sample 2
 */
export default function ModalSample2(): React.JSX.Element {

  const modalSampleDialog2Ref = useRef<ModalSampleDialog2Ref>(null);
  const [selectedFruit, setSelectedFruit] = useState<string>('');

  /**
   * ダイアログを表示する。
   */
  const handleShowDialog = (): void => {
    modalSampleDialog2Ref.current?.showdDialog((value) => {
      setSelectedFruit(value);
    });
  };

  return (
    <div>
      <h2>Modal Sample 2</h2>
      <Container fluid>
        <Row>
          <Col>
            <Button onClick={handleShowDialog}>Show dialog</Button>
            <label>{selectedFruit}</label>
          </Col>
        </Row>
      </Container>

      <ModalSampleDialog2 ref={modalSampleDialog2Ref} />
    </div>
  );

}
