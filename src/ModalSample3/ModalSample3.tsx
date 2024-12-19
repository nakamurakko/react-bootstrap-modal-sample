import React, { useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import ModalSampleDialog3, { ModalSampleDialog3Ref } from './ModalSampleDialog3';

/**
 * Modal sample 3
 */
export default function ModalSample3(): React.JSX.Element {

  const modalSampleDialog3Ref = useRef<ModalSampleDialog3Ref>(null);
  const [selectedFruit, setSelectedFruit] = useState<string>('');

  /**
   * ダイアログを表示する。
   */
  const handleShowDialog = async (): Promise<void> => {
    await modalSampleDialog3Ref.current?.showdDialog()
      .then(value => {
        setSelectedFruit(value);
      });
  };

  return (
    <div>
      <h2>Modal Sample 3</h2>
      <Container fluid>
        <Row>
          <Col>
            <Button onClick={handleShowDialog}>Show dialog</Button>
            <label>{selectedFruit}</label>
          </Col>
        </Row>
      </Container>

      <ModalSampleDialog3 ref={modalSampleDialog3Ref} />
    </div>
  );

}
