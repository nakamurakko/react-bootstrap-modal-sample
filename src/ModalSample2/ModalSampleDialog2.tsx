import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export interface ModalSampleDialog2Ref {
  /**
   * ダイアログを表示する。
   * @param resultFunction 表示終了後に実行する関数。
   */
  showdDialog: (resultFunction?: ResultFunction) => void;
}

type ResultFunction = (value: string) => void;

/**
 * Modal sample dialog 2
 */
const ModalSampleDialog2 = forwardRef<ModalSampleDialog2Ref>((props, ref) => {

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

    showdDialog: (resultFunction?: ResultFunction): void => {
      setSelectedFruit('');
      resultFunctionRef.current = resultFunction;
      setShowSelf(true);
    }

  }));

  return (
    <Modal show={showSelf}>
      <Modal.Header>
        <Modal.Title>Modal Sample dialog 2</Modal.Title>
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

ModalSampleDialog2.displayName = ModalSampleDialog2.name;

export default ModalSampleDialog2;
