import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export interface ModalSampleDialog3Ref {
  /**
   * ダイアログを表示する。
   * @returns 選択した値を返す。
   */
  showdDialog: () => Promise<string>;
}

type ResultFunction = (value: string) => void;

/**
 * Modal sample dialog 3
 */
const ModalSampleDialog3 = forwardRef<ModalSampleDialog3Ref>((props, ref) => {

  const [showSelf, setShowSelf] = useState<boolean>(false);
  const resultFunctionRef = useRef<ResultFunction>(undefined);

  const [selectedFruit, setSelectedFruit] = useState<string>('');

  const handleSelect = (): void => {
    setShowSelf(false);
    if (resultFunctionRef.current) {
      resultFunctionRef.current(selectedFruit);
    }
  };

  useImperativeHandle(ref, () => ({

    showdDialog: async (): Promise<string> => {
      return await new Promise((resolve: ResultFunction) => {
        setSelectedFruit('');
        resultFunctionRef.current = resolve;
        setShowSelf(true);
      });
    }

  }));

  return (
    <Modal
      show={showSelf}
    >
      <Modal.Header>
        <Modal.Title>Modal Sample dialog 3</Modal.Title>
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
        <Button onClick={handleSelect}>Select</Button>
      </Modal.Footer>
    </Modal>
  );

});

ModalSampleDialog3.displayName = ModalSampleDialog3.name;

export default ModalSampleDialog3;
