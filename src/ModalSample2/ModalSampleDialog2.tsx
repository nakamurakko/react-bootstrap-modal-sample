import React, { useImperativeHandle, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import type { Ref } from 'react';

export interface ModalSampleDialog2Ref {
  /**
   * ダイアログを表示する。
   * @param resultFunction 表示終了後に実行する関数。
   */
  showDialog: (resultFunction?: ResultFunction) => void;
}

type ResultFunction = (value: string) => void;

/**
 * Modal sample dialog 2
 */
export default function ModalSampleDialog2(
  props:
    {
      ref: Ref<ModalSampleDialog2Ref>
    }
): React.JSX.Element {

  const [showSelf, setShowSelf] = useState<boolean>(false);
  const resultFunctionRef = useRef<ResultFunction>(undefined);

  const [selectedFruit, setSelectedFruit] = useState<string>('');

  const handleSelect = (): void => {
    setShowSelf(false);
    if (resultFunctionRef.current) {
      resultFunctionRef.current(selectedFruit);
    }
  };

  useImperativeHandle(props.ref, () => ({

    showDialog: (resultFunction?: ResultFunction): void => {
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

}
