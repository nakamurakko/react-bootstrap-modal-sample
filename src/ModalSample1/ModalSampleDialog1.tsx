import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

/**
 * Modal sample dialog 1
 */
export default function ModalSampleDialog1({ showDialog, onSelect }:
  {
    /** Modal ダイアログを表示するかどうか。 */
    showDialog: boolean,
    /**
     * 選択時イベント。
     * @param selectedFruit 選択した値。
     */
    onSelect: (selectedFruit: string) => void
  }
): React.JSX.Element {

  const [selectedFruit, setSelectedFruit] = useState<string>('');

  /**
   * Modal 表示時の処理。
   */
  const handleShow = (): void => {
    setSelectedFruit('');
  };

  return (
    <Modal
      show={showDialog}
      onShow={handleShow}
    >
      <Modal.Header>
        <Modal.Title>Modal Sample dialog 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Check
            label='Apple'
            name='fruit'
            type='radio'
            value='Apple'
            onChange={(event): void => setSelectedFruit(event.target.value)}
          />
          <Form.Check
            label='Banana'
            name='fruit'
            type='radio'
            value='Banana'
            onChange={(event): void => setSelectedFruit(event.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={(): void => onSelect(selectedFruit)}
        >
          Select
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
