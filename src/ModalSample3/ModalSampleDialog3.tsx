import React, { useImperativeHandle, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import type { Ref } from 'react';

export interface ModalSampleDialog3Ref {
  /**
   * ダイアログを表示する。
   * @returns 選択した値を返す。
   */
  showDialog: () => Promise<string>;
}

type ResultFunction = (value: string) => void;

/**
 * Modal sample dialog 3
 */
export default function ModalSampleDialog3(
  props:
    {
      ref: Ref<ModalSampleDialog3Ref>
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

    showDialog: async (): Promise<string> => {
      return await new Promise((resolve: ResultFunction) => {
        setSelectedFruit('');
        resultFunctionRef.current = resolve;
        setShowSelf(true);
      });
    }

  }));

  return (
    <Modal show={showSelf}>
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

}
