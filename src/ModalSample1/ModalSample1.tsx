import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import ModalSampleDialog1 from './ModalSampleDialog1';

/**
 * Modal sample 1
 */
export default function ModalSample1(): React.JSX.Element {

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [selectedFruit, setSelectedFruit] = useState<string>('');

  /**
   * ダイアログを表示する。
   * @returns
   */
  const handleShowDialog = (): void => setShowDialog(true);

  /**
   * 選択ボタンをクリックした時の処理。
   * @param selectedFruit 選択した値。
   */
  const handleSelect = (selectedFruit: string): void => {
    setSelectedFruit(selectedFruit);
    setShowDialog(false);
  }

  return (
    <div>
      <h2>Modal Sample 1</h2>
      <Container fluid>
        <Row>
          <Col>
            <Button onClick={handleShowDialog}>Show dialog</Button>
            <label>{selectedFruit}</label>
          </Col>
        </Row>
      </Container>

      <ModalSampleDialog1
        showDialog={showDialog}
        onSelect={handleSelect}
      />
    </div>
  );

}
